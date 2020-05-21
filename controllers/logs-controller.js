const fs = require('fs');

const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Log = require('../models/log');

const getLogs = async (req, res, next) => {

    let logs;
    try {
        logs = await Log.find();
    } catch (err) {
        const error = new HttpError(
            'Fetching logs failed, please try again later',
            500
        );
        return next(error);
    }

    if (!logs || logs.length === 0) {
        console.log("There is No Log")
    }
    res.json({ logs: logs.map(log => log.toObject({ getters: true })) });
}

const getLogById = async (req, res, next) => {
    const logId = req.params.lid; // { did: 'd1' }

    let log;
    try {
        log = await Log.findById(logId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not find a log.',
            500
        );
        return next(error);
    }

    if (!log) {
        const error = new HttpError(
            'Could not find a log for the provided id.',
            404
        );
        return next(error);
    }

    res.json({ log: log.toObject({ getters: true }) }); // => { log } => { log: log }
};


const createLog = async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return next (
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const { log, createDate } = req.body;
    console.log(req.body)

    const createdLog = new Log({
        log,
        createDate
    });

    try {
        createdLog.save();
    } catch (err) {
        const error = new HttpError(
            'Creating log failed, try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({log: createdLog});
};

const deleteLog = async (req, res, next) => {
    const logId = req.params.lid;

    let log;
    try {
        log = await Log.findById(logId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not delete log.',
            500
        );
        return next(error);
    }

    if (!log) {
        const error = new HttpError('Could not find log for this id.', 404);
        return next(error);
    }


    try {
        log.remove();
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not delete log.',
            500
        );
        return next(error);
    }

    res.status(200).json({ message: 'Deleted log.' });
};

exports.getLogs = getLogs;
exports.getLogById = getLogById;
exports.createLog = createLog;
exports.deleteLog = deleteLog;