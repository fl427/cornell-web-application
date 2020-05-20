const fs = require('fs');

const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Command = require('../models/command');

const getCommands = async (req, res, next) => {

    let commands;
    try {
        commands = await Command.find();
    } catch (err) {
        const error = new HttpError(
            'Fetching commands failed, please try again later',
            500
        );
        return next(error);
    }

    if (!commands || commands.length === 0) {
        console.log("There is No DOG")
    }
    res.json({ commands: commands.map(command => command.toObject({ getters: true })) });
}

const getCommandById = async (req, res, next) => {
    const commandId = req.params.cid; // { cid: 'd1' }

    let command;
    try {
        command = await Command.findById(commandId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not find a command.',
            500
        );
        return next(error);
    }

    if (!command) {
        const error = new HttpError(
            'Could not find a command for the provided id.',
            404
        );
        return next(error);
    }

    res.json({ command: command.toObject({ getters: true }) }); // => { command } => { command: command }
};


const createCommand = async (req, res, next) => {
    const errors = validationResult(req);
    console.log("error", errors);
    if (!errors.isEmpty()) {
        return next (
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const { content } = req.body;
    console.log(req.body)

    const createdCommand = new Command({
        content: content
    });

    try {
        createdCommand.save();
    } catch (err) {
        const error = new HttpError(
            'Creating Command failed, try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({command: createdCommand});
};


const deleteCommand = async (req, res, next) => {
    const commandId = req.params.cid;

    let command;
    try {
        command = await Command.findById(commandId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not delete command.',
            500
        );
        return next(error);
    }

    if (!command) {
        const error = new HttpError('Could not find command for this id.', 404);
        return next(error);
    }

    try {
        command.remove();
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not delete command.',
            500
        );
        return next(error);
    }


    res.status(200).json({ message: 'Deleted command.' });
};

exports.getCommands = getCommands;
exports.getCommandById = getCommandById;
exports.createCommand = createCommand;
exports.deleteCommand = deleteCommand;