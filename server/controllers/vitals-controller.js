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

const SimulatedVocalization = require('../models/arraysSN/simulatedVocalization');
const HeartSound = require('../models/arraysSN/heartSound');

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
//     res.json({ vital: vital.toObject({ getters: true })});
// }

const getVital = async (req, res, next) => {
    let awrr;
    let etco;
    let heartRate;
    let nibp;
    let spo2;
    let temp;
    let simulatedVocalization;
    try {// vital.target, vital.duration
        awrr = await Awrr.findOne().sort({createdAt: -1}).limit(1);
        etco = await Etco.findOne().sort({createdAt: -1}).limit(1);
        heartRate = await HeartRate.findOne().sort({createdAt: -1}).limit(1);
        nibp = await Nibp.findOne().sort({createdAt: -1}).limit(1);
        spo2 = await Spo2.findOne().sort({createdAt: -1}).limit(1);
        temp = await Temp.findOne().sort({createdAt: -1}).limit(1);
        simulatedVocalization = await SimulatedVocalization.findOne().sort({createdAt: -1}).limit(1);
    } catch (err) {
        const error = new HttpError(
            'Fetching vitals failed, please try again later',
            500
        );
        return next(error);
    }

    if (!awrr || awrr.length === 0) {
        console.log("There is No Vital")
    }

    if (awrr.previous === awrr.target) {
        awrr.previous = awrr.target;
    } else {
        awrr.previous = awrr.previous + awrr.slope * 0.1;
    }

    if (etco.previous === etco.target) {
        etco.previous = etco.target;
    } else {
        etco.previous = etco.previous + etco.slope * 0.1;
    }

    if (heartRate.previous === heartRate.target) {
        heartRate.previous = heartRate.target;
    } else {
        heartRate.previous = heartRate.previous + heartRate.slope * 0.1;
    }

    if (nibp.previous === nibp.target) {
        nibp.previous = nibp.target;
    } else {
        nibp.previous = nibp.previous + nibp.slope * 0.1;
    }

    if (spo2.previous === spo2.target) {
        spo2.previous = spo2.target;
    } else {
        spo2.previous = spo2.previous + spo2.slope * 0.1;
    }

    if (temp.previous === temp.target) {
        temp.previous = temp.target;
    } else {
        temp.previous = temp.previous + temp.slope * 0.1;
    }

    try {
        awrr.save();
        etco.save();
        heartRate.save();
        nibp.save();
        spo2.save();
        temp.save();
    } catch (err) {
        const error = new HttpError(
            'Creating vital failed, try again.',
            500
        );
        return next(error);
    }

    let vital;
    vital = {
        'awrr': awrr.previous,
        'etco': etco.previous,
        'heartRate': heartRate.previous,
        'nibp': nibp.previous,
        'spo2': spo2.previous,
        'temp': temp.previous,
        'simulatedVocalization': simulatedVocalization
    }
    console.log(vital)
    res.json({ vital: vital});
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
                duration,
                slope: (target - 0) / duration
            });
            break;
        case 'etco':
            createdVital = new Etco({
                target,
                duration,
                slope: (target - 0) / duration
            });
            break;
        case 'heartRate':
            createdVital = new HeartRate({
                target,
                duration,
                slope: (target - 0) / duration
            });
            break;
        case 'nibp':
            createdVital = new Nibp({
                target,
                duration,
                slope: (target - 0) / duration
            });
            break;
        case 'spo2':
            createdVital = new Spo2({
                target,
                duration,
                slope: (target - 0) / duration
            });
            break;
        case 'temp':
            createdVital = new Temp({
                target,
                duration,
                slope: (target - 0) / duration
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


const createSimulatedVocalization = async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return next (
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const { part1, part2 } = req.body;
    console.log(req.body)

    let createdSimulatedVocalization;
    createdSimulatedVocalization = new SimulatedVocalization({
        part1,
        part2,
    });

    try {
        createdSimulatedVocalization.save();
    } catch (err) {
        const error = new HttpError(
            'Creating vital failed, try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({simulatedVocalization: createdSimulatedVocalization});
};

const createHeartSound = async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return next (
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const { part1, part2 } = req.body;
    console.log(req.body)

    let createdHeartSound;
    createdHeartSound = new HeartSound({
        part1,
        part2,
    });

    try {
        createdHeartSound.save();
    } catch (err) {
        const error = new HttpError(
            'Creating vital failed, try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({heartSound: createdHeartSound});
};

exports.getVital = getVital;
exports.createVital = createVital;
exports.createSimulatedVocalization = createSimulatedVocalization
exports.createHeartSoundn = createHeartSound