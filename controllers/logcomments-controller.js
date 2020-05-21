const fs = require('fs');

const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Logcomment = require('../models/logcomment');
const User = require('../models/user');

const getLogcomments = async (req, res, next) => {

    let logcomments;
    try {
        logcomments = await Logcomment.find();
    } catch (err) {
        const error = new HttpError(
            'Fetching logcomments failed, please try again later',
            500
        );
        return next(error);
    }

    if (!logcomments || logcomments.length === 0) {
        console.log("There is No DOG")
    }
    res.json({ logcomments: logcomments.map(logcomment => logcomment.toObject({ getters: true })) });
}

const getLogcommentById = async (req, res, next) => {
    const logcommentId = req.params.lcid; // { lcid: 'lc1' }

    let logcomment;
    try {
        logcomment = await Logcomment.findById(logcommentId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not find a logcomment.',
            500
        );
        return next(error);
    }

    if (!logcomment) {
        const error = new HttpError(
            'Could not find a logcomment for the provided id.',
            404
        );
        return next(error);
    }

    res.json({ logcomment: logcomment.toObject({ getters: true }) }); // => { logcomment } => { logcomment: logcomment }
};


const getLogcommentsByUserId = async (req, res, next) => {
    const userId = req.params.uid;

    let userWithLogcomments;
    try {
        userWithLogcomments = await User.findById(userId).populate('logcomments');
    } catch (err) {
        const error = new HttpError(
            'Fetching logcomments failed, please try again later',
            500
        );
        return next(error);
    }

    if (!userWithLogcomments || userWithLogcomments.length === 0) {
        return next(
            new HttpError("Could not find logcomments for the provided user id.", 404)
        );
    }
    res.json({ logcomments: userWithLogcomments.logcomments.map(logcomment => logcomment.toObject({ getters: true })) });
};

const createLogcomment = async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return next (
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const { content } = req.body;
    console.log(req.body)

    const createdLogcomment = new Logcomment({
        content,
        creator: req.userData.userId
    });

    let user;
    try {
        user = await User.findById(req.userData.userId);
    } catch (err) {
        const error = new HttpError('Creating logcomment failed, please try again', 500);
        return next(error);
    }

    if (!user) {
        const error = new HttpError('Could not find user for provided id', 404);
        return next(error);
    }

    console.log("This Logcomment Belongs to user:", user);

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdLogcomment.save({ session: sess });
        user.logcomments.push(createdLogcomment);
        await user.save({ session: sess });
        await sess.commitTransaction();
    } catch (err) {
        const error = new HttpError(
            'Creating Logcomment failed, try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({logcomment: createdLogcomment});
};

const updateLogcomment = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const { content } = req.body;
    const logcommentId = req.params.lcid;

    let logcomment;
    try {
        logcomment = await Logcomment.findById(logcommentId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not update logcomment.',
            500
        );
        return next(error);
    }

    if (logcomment.creator.toString() !== req.userData.userId) {
        const error = new HttpError(
            'You are not allowed to edit this logcomment',
            401
        );
        return next(error);
    }

    logcomment.content = content;

    try {
        await logcomment.save();
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not update logcomment.',
            500
        );
        return next(error);
    }

    res.status(200).json({ logcomment: logcomment.toObject({ getters: true }) });
};

const deleteLogcomment = async (req, res, next) => {
    const logcommentId = req.params.lcid;

    let logcomment;
    try {
        logcomment = await Logcomment.findById(logcommentId).populate('creator');
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not delete logcomment.',
            500
        );
        return next(error);
    }

    if (!logcomment) {
        const error = new HttpError('Could not find logcomment for this id.', 404);
        return next(error);
    }

    if (logcomment.creator.id !== req.userData.userId) {
        const error = new HttpError(
            'You are not allowed to delete this logcomment',
            401
        );
        return next(error);
    }

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await logcomment.remove({ session: sess });
        logcomment.creator.logcomments.pull(logcomment);
        await logcomment.creator.save({ session: sess });
        await sess.commitTransaction();
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not delete logcomment.',
            500
        );
        return next(error);
    }

    res.status(200).json({ message: 'Deleted logcomment.' });
};

exports.getLogcomments = getLogcomments;
exports.getLogcommentById = getLogcommentById;
exports.getLogcommentsByUserId = getLogcommentsByUserId;
exports.createLogcomment = createLogcomment;
exports.updateLogcomment = updateLogcomment;
exports.deleteLogcomment = deleteLogcomment;