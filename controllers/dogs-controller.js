const fs = require('fs');

const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Dog = require('../models/dog');
const User = require('../models/user');

const getDogs = async (req, res, next) => {

    let dogs;
    try {
        dogs = await Dog.find();
    } catch (err) {
        const error = new HttpError(
            'Fetching dogs failed, please try again later',
            500
        );
        return next(error);
    }

    if (!dogs || dogs.length === 0) {
        console.log("There is No DOG")
    }
    res.json({ dogs: dogs.map(dog => dog.toObject({ getters: true })) });
}

const getDogById = async (req, res, next) => {
    const dogId = req.params.did; // { did: 'd1' }

    let dog;
    try {
        dog = await Dog.findById(dogId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not find a dog.',
            500
        );
        return next(error);
    }

    if (!dog) {
        const error = new HttpError(
            'Could not find a dog for the provided id.',
            404
        );
        return next(error);
    }

    res.json({ dog: dog.toObject({ getters: true }) }); // => { dog } => { dog: dog }
};


const getDogsByUserId = async (req, res, next) => {
    const userId = req.params.uid;

    let userWithDogs;
    try {
        userWithDogs = await User.findById(userId).populate('dogs');
    } catch (err) {
        const error = new HttpError(
            'Fetching dogs failed, please try again later',
            500
        );
        return next(error);
    }

    if (!userWithDogs || userWithDogs.length === 0) {
        return next(
            new HttpError("Could not find dogs for the provided user id.", 404)
        );
    }
    res.json({ dogs: userWithDogs.dogs.map(dog => dog.toObject({ getters: true })) });
};

const createDog = async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return next (
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const { name, description } = req.body;
    console.log(req.body)

    const createdDog = new Dog({
        name,
        description,
        image: req.file.path,
        creator: req.userData.userId
    });

    let user;
    try {
        user = await User.findById(req.userData.userId);
    } catch (err) {
        const error = new HttpError('Creating dog failed, please try again', 500);
        return next(error);
    }

    if (!user) {
        const error = new HttpError('Could not find user for provided id', 404);
        return next(error);
    }

    console.log("This Dog Belongs to user:", user);

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdDog.save({ session: sess });
        user.dogs.push(createdDog);
        await user.save({ session: sess });
        await sess.commitTransaction();
    } catch (err) {
        const error = new HttpError(
            'Creating Dog failed, try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({dog: createdDog});
};

const updateDog = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const { name, description } = req.body;
    const dogId = req.params.did;

    let dog;
    try {
        dog = await Dog.findById(dogId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not update dog.',
            500
        );
        return next(error);
    }

    if (dog.creator.toString() !== req.userData.userId) {
        const error = new HttpError(
            'You are not allowed to edit this dog',
            401
        );
        return next(error);
    }

    dog.name = name;
    dog.description = description;

    try {
        await dog.save();
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not update dog.',
            500
        );
        return next(error);
    }

    res.status(200).json({ dog: dog.toObject({ getters: true }) });
};

const deleteDog = async (req, res, next) => {
    const dogId = req.params.did;

    let dog;
    try {
        dog = await Dog.findById(dogId).populate('creator');
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not delete dog.',
            500
        );
        return next(error);
    }

    if (!dog) {
        const error = new HttpError('Could not find dog for this id.', 404);
        return next(error);
    }

    if (dog.creator.id !== req.userData.userId) {
        const error = new HttpError(
            'You are not allowed to delete this dog',
            401
        );
        return next(error);
    }

    const imagePath = dog.image;

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await dog.remove({ session: sess });
        dog.creator.dogs.pull(dog);
        await dog.creator.save({ session: sess });
        await sess.commitTransaction();
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not delete dog.',
            500
        );
        return next(error);
    }

    fs.unlink(imagePath, err => {
        console.log(err);
    });

    res.status(200).json({ message: 'Deleted dog.' });
};

exports.getDogs = getDogs;
exports.getDogById = getDogById;
exports.getDogsByUserId = getDogsByUserId;
exports.createDog = createDog;
exports.updateDog = updateDog;
exports.deleteDog = deleteDog;