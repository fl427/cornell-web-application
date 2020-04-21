const fs = require('fs');

const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Disease = require('../models/disease');
const User = require('../models/user');

const getDiseaseById = async (req, res, next) => {
  const diseaseId = req.params.pid; // { pid: 'p1' }

  let disease;
  try {
    disease = await Disease.findById(diseaseId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a disease.',
      500
    );
    return next(error);
  }

  if (!disease) {
    const error = new HttpError(
      'Could not find a disease for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ disease: disease.toObject({ getters: true }) }); // => { disease } => { disease: disease }
};


const getDiseasesByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let userWithDiseases;
  try {
    userWithDiseases = await User.findById(userId).populate('diseases');
  } catch (err) {
    const error = new HttpError(
      'Fetching diseases failed, please try again later',
      500
    );
    return next(error);
  }

  if (!userWithDiseases || userWithDiseases.length === 0) {
    return next(
      new HttpError("Could not find diseases for the provided user id.", 404)
    );
  }
  res.json({ diseases: userWithDiseases.diseases.map(disease => disease.toObject({ getters: true })) });
};

const createDisease = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }

  const { title, description, creator } = req.body;

  const createdDisease = new Disease({
    title,
    description,
    image: req.file.path,
    creator
  });

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError('Creating disease failed, please try again', 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for provided id', 404);
    return next(error);
  }

  console.log(user);

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdDisease.save({ session: sess });
    user.diseases.push(createdDisease);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Creating Disease failed, try again.',
      500
    );
    return next(error);
  }
  
  res.status(201).json({disease: createdDisease});
};

const updateDisease = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { title, description } = req.body;
  const diseaseId = req.params.pid;

  let disease;
  try {
    disease = await Disease.findById(diseaseId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update disease.',
      500
    );
    return next(error);
  }

  disease.title = title;
  disease.description = description;

  try {
    await disease.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update disease.',
      500
    );
    return next(error);
  }

  res.status(200).json({ disease: disease.toObject({ getters: true }) });
};

const deleteDisease = async (req, res, next) => {
  const diseaseId = req.params.pid;

  let disease;
  try {
    disease = await Disease.findById(diseaseId).populate('creator');
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete disease.',
      500
    );
    return next(error);
  }

  if (!disease) {
    const error = new HttpError('Could not find disease for this id.', 404);
    return next(error);
  }

  const imagePath = place.image;

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await disease.remove({ session: sess });
    disease.creator.diseases.pull(disease);
    await disease.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete disease.',
      500
    );
    return next(error);
  }

  fs.unlink(imagePath, err => {
    console.log(err);
  });

  res.status(200).json({ message: 'Deleted disease.' });
};

exports.getDiseaseById = getDiseaseById;
exports.getDiseasesByUserId = getDiseasesByUserId;
exports.createDisease = createDisease;
exports.updateDisease = updateDisease;
exports.deleteDisease = deleteDisease;