const fs = require('fs');

const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Vital = require('../models/vitals/vital');
const Awrr = require('../models/vitals/awrr');
const Etco = require('../models/vitals/etco2');
const HeartRate = require('../models/vitals/heartRate');
const Nibp = require('../models/vitals/nibp');
const Spo2 = require('../models/vitals/spo2');
const Temp = require('../models/vitals/temp');

// const getVital = async (req, res, next) => {
//     let vital;
//     try {
//         vital = await Vital.findOne().sort({ createdAt: -1 }).limit(1); // vital.target, vital.duration
//     } catch (err) {
//         const error = new HttpError(
//             'Fetching vitals failed, please try again later',
//             500
//         );
//         return next(error);
//     }
//     console.log(vital)
//     if (!vital || vital.length === 0) {
//         console.log("There is No Vital")
//     }
//
//     if (vital.previous === vital.target) {
//         vital.previous = vital.target;
//     } else {
//         vital.previous = vital.previous + vital.slope * 0.1;
//     }
//     try {
//         vital.save();
//     } catch (err) {
//         const error = new HttpError(
//             'Creating vital failed, try again.',
//             500
//         );
//         return next(error);
//     }
//
//     res.json({ vital: vital.toObject({ getters: true })});
// }

const getVital = async (req, res, next) => {
    let vital;
    try {
        vital = await Vital.findOne().sort({ createdAt: -1 }).limit(1); // vital.target, vital.duration
    } catch (err) {
        const error = new HttpError(
            'Fetching vitals failed, please try again later',
            500
        );
        return next(error);
    }
    console.log(vital)
    if (!vital || vital.length === 0) {
        console.log("There is No Vital")
    }

    if (vital.previous === vital.target) {
        vital.previous = vital.target;
    } else {
        vital.previous = vital.previous + vital.slope * 0.1;
    }
    try {
        vital.save();
    } catch (err) {
        const error = new HttpError(
            'Creating vital failed, try again.',
            500
        );
        return next(error);
    }

    res.json({ vital: vital.toObject({ getters: true })});
}

const createVital = async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return next (
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const { target, duration, vital } = req.body;
    console.log(req.body)

    let createdVital;
    switch (vital) {
        case 'awrr':
            createdVital = new Awrr({
                target,
                duration
            });
            break;
        case 'etco2':
            createdVital = new Etco({
                target,
                duration
            });
            break;
        case 'heartRate':
            createdVital = new HeartRate({
                target,
                duration
            });
            break;
        case 'nibp':
            createdVital = new Nibp({
                target,
                duration
            });
            break;
        case 'spo2':
            createdVital = new Spo2({
                target,
                duration
            });
            break;
        case 'temp':
            createdVital = new Temp({
                target,
                duration
            });
            break;
        default:
            createdVital = new Vital({
                target,
                duration,
                slope: (target - 0) / duration
            });
            break;
    }


    try {
        createdVital.save();
    } catch (err) {
        const error = new HttpError(
            'Creating vital failed, try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({vital: createdVital});
};


exports.getVital = getVital;
exports.createVital = createVital;