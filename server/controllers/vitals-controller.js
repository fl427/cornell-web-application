const fs = require('fs');

const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Vital = require('../models/vitals/vital');
const Awrr = require('../models/vitals/awrr');
const Etco2 = require('../models/vitals/etco2');
const HeartRate = require('../models/vitals/heartRate');
const Spo2 = require('../models/vitals/spo2');
const Temp = require('../models/vitals/temp');
const SystolicNIBP = require('../models/vitals/systolicNIBP');
const DiastolicNIBP = require('../models/vitals/diastolicNIBP');
const NbpHR = require('../models/vitals/nbpHR');

//-------------Sound-----------//
const SimulatedVocalization = require('../models/sounds/simulatedVocalization');
const HeartSound = require('../models/sounds/heartSound');
const LeftLungSound = require('../models/sounds/leftLungSound');
const RightLungSound = require('../models/sounds/rightLungSound');

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
    let etco2;
    let heartRate;
    let systolicNIBP;
    let diastolicNIBP;
    let nbpHR;
    let spo2;
    let temp;
    try {// vital.target, vital.duration
        awrr = await Awrr.findOne().sort({createdAt: -1}).limit(1);
        etco2 = await Etco2.findOne().sort({createdAt: -1}).limit(1);
        heartRate = await HeartRate.findOne().sort({createdAt: -1}).limit(1);
        systolicNIBP = await SystolicNIBP.findOne().sort({createdAt: -1}).limit(1);
        diastolicNIBP = await DiastolicNIBP.findOne().sort({createdAt: -1}).limit(1);
        nbpHR = await NbpHR.findOne().sort({createdAt: -1}).limit(1);
        spo2 = await Spo2.findOne().sort({createdAt: -1}).limit(1);
        temp = await Temp.findOne().sort({createdAt: -1}).limit(1);
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

    if (awrr.slope >= 0 && awrr.previous >= awrr.target) {
        awrr.previous = awrr.target;
    } else if (awrr.slope < 0 && awrr.previous <= awrr.target) {
        awrr.previous = awrr.target;
    } else {
        awrr.previous = (awrr.previous + awrr.slope * 0.1).toFixed(2);
    }

    if (etco2.slope >= 0 && etco2.previous >= etco2.target) {
        etco2.previous = etco2.target;
    } else if (etco2.slope < 0 && etco2.previous <= etco2.target) {
        etco2.previous = etco2.target;
    } else {
        etco2.previous = (etco2.previous + etco2.slope * 0.1).toFixed(2);
    }

    if (heartRate.slope >= 0 && heartRate.previous >= heartRate.target) {
        heartRate.previous = heartRate.target;
    } else if (heartRate.slope < 0 && heartRate.previous <= heartRate.target) {
        heartRate.previous = heartRate.target;
    } else {
        heartRate.previous = (heartRate.previous + heartRate.slope * 0.1).toFixed(2);
    }

    if (systolicNIBP.slope >= 0 && systolicNIBP.previous >= systolicNIBP.target) {
        systolicNIBP.previous = systolicNIBP.target;
    } else if (systolicNIBP.slope < 0 && systolicNIBP.previous <= systolicNIBP.target) {
        systolicNIBP.previous = systolicNIBP.target;
    } else {
        systolicNIBP.previous = (systolicNIBP.previous + systolicNIBP.slope * 0.1).toFixed(2);
    }

    if (diastolicNIBP.slope >= 0 && diastolicNIBP.previous >= diastolicNIBP.target) {
        diastolicNIBP.previous = diastolicNIBP.target;
    } else if (diastolicNIBP.slope < 0 && diastolicNIBP.previous <= diastolicNIBP.target) {
        diastolicNIBP.previous = diastolicNIBP.target;
    } else {
        diastolicNIBP.previous = (diastolicNIBP.previous + diastolicNIBP.slope * 0.1).toFixed(2);
    }

    if (nbpHR.slope >= 0 && nbpHR.previous >= nbpHR.target) {
        nbpHR.previous = nbpHR.target;
    } else if (nbpHR.slope < 0 && nbpHR.previous <= nbpHR.target) {
        nbpHR.previous = nbpHR.target;
    } else {
        nbpHR.previous = (nbpHR.previous + nbpHR.slope * 0.1).toFixed(2);
    }

    if (spo2.previous === spo2.target) {
        spo2.previous = spo2.target;
    } else {
        spo2.previous = spo2.previous + spo2.slope * 0.1;
    }

    if (nbpHR.slope >= 0 && nbpHR.previous >= nbpHR.target) {
        nbpHR.previous = nbpHR.target;
    } else if (nbpHR.slope < 0 && nbpHR.previous <= nbpHR.target) {
        nbpHR.previous = nbpHR.target;
    } else {
        nbpHR.previous = (nbpHR.previous + nbpHR.slope * 0.1).toFixed(2);
    }

    if (temp.slope >= 0 && temp.previous >= temp.target) {
        temp.previous = temp.target;
    } else if (temp.slope < 0 && temp.previous <= temp.target) {
        temp.previous = temp.target;
    } else {
        temp.previous = (temp.previous + temp.slope * 0.1).toFixed(2);
    }

    try {
        awrr.save();
        etco2.save();
        heartRate.save();
        systolicNIBP.save();
        diastolicNIBP.save();
        nbpHR.save();
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
        'etco2': etco2.previous,
        'heartRate': heartRate.previous,
        'systolicNIBP': systolicNIBP.previous,
        'diastolicNIBP': diastolicNIBP.previous,
        'nbpHR': nbpHR.previous,
        'spo2': spo2.previous,
        'temp': temp.previous,
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

    let latestVital;
    switch (vital) {
        case 'awrr':
            latestVital = await Awrr.findOne().sort({createdAt: -1}).limit(1);
            if (!latestVital) {
                latestVital = new Awrr({
                    target,
                    duration,
                    slope: (target - 0) / duration
                });
            } else {
                latestVital.target = target;
                latestVital.duration = duration;
                latestVital.slope = (target - latestVital.previous) / duration
            }
            break;
        case 'etco2':
            latestVital = await Etco2.findOne().sort({createdAt: -1}).limit(1);
            if (!latestVital) {
                latestVital = new Etco2({
                    target,
                    duration,
                    slope: (target - 0) / duration
                });
            } else {
                latestVital.target = target;
                latestVital.duration = duration;
                latestVital.slope = (target - latestVital.previous) / duration
            }
            break;
        case 'heartRate':
            latestVital = await HeartRate.findOne().sort({createdAt: -1}).limit(1);
            if (!latestVital) {
                latestVital = new HeartRate({
                    target,
                    duration,
                    slope: (target - 0) / duration
                });
            } else {
                latestVital.target = target;
                latestVital.duration = duration;
                latestVital.slope = (target - latestVital.previous) / duration
            }
            break;
        case 'spo2':
            latestVital = await Spo2.findOne().sort({createdAt: -1}).limit(1);
            if (!latestVital) {
                latestVital = new Spo2({
                    target,
                    duration,
                    slope: (target - 0) / duration
                });
            } else {
                latestVital.target = target;
                latestVital.duration = duration;
                latestVital.slope = (target - latestVital.previous) / duration
            }
            break;
        case 'temp':
            latestVital = await Temp.findOne().sort({createdAt: -1}).limit(1);
            if (!latestVital) {
                latestVital = new Temp({
                    target,
                    duration,
                    slope: (target - 0) / duration
                });
            } else {
                latestVital.target = target;
                latestVital.duration = duration;
                latestVital.slope = (target - latestVital.previous) / duration
            }
            break;
        case 'systolicNIBP':
            latestVital = await SystolicNIBP.findOne().sort({createdAt: -1}).limit(1);
            if (!latestVital) {
                latestVital = new SystolicNIBP({
                    target,
                    duration,
                    slope: (target - 0) / duration
                });
            } else {
                latestVital.target = target;
                latestVital.duration = duration;
                latestVital.slope = (target - latestVital.previous) / duration
            }
            break;
        case 'diastolicNIBP':
            latestVital = await DiastolicNIBP.findOne().sort({createdAt: -1}).limit(1);
            if (!latestVital) {
                latestVital = new DiastolicNIBP({
                    target,
                    duration,
                    slope: (target - 0) / duration
                });
            } else {
                latestVital.target = target;
                latestVital.duration = duration;
                latestVital.slope = (target - latestVital.previous) / duration
            }
            break;
        case 'nbpHR':
            latestVital = await NbpHR.findOne().sort({createdAt: -1}).limit(1);
            if (!latestVital) {
                latestVital = new NbpHR({
                    target,
                    duration,
                    slope: (target - 0) / duration
                });
            } else {
                latestVital.target = target;
                latestVital.duration = duration;
                latestVital.slope = (target - latestVital.previous) / duration
            }
            break;
        default:
            latestVital = await Vital.findOne().sort({createdAt: -1}).limit(1);
            if (!latestVital) {
                latestVital = new Vital({
                    target,
                    duration,
                    slope: (target - 0) / duration
                });
            } else {
                latestVital.target = target;
                latestVital.duration = duration;
                latestVital.slope = (target - latestVital.previous) / duration
            }
            break;
    }

    try {
        latestVital.save();
    } catch (err) {
        const error = new HttpError(
            'Creating vital failed, try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({vital: latestVital});
};

const getVitalSounds = async (req, res, next) => {
    let simulatedVocalization;
    let heartSound;
    let leftLungSound;
    let rightLungSound;
    try {
        simulatedVocalization = await SimulatedVocalization.findOne().sort({createdAt: -1}).limit(1);
        heartSound = await HeartSound.findOne().sort({createdAt: -1}).limit(1);
        leftLungSound = await LeftLungSound.findOne().sort({createdAt: -1}).limit(1);
        rightLungSound = await RightLungSound.findOne().sort({createdAt: -1}).limit(1);
    } catch (err) {
        const error = new HttpError(
            'Fetching vitals failed, please try again later',
            500
        );
        return next(error);
    }
    if (!simulatedVocalization || simulatedVocalization.length === 0) {
        console.log("There is No Sound")
    }

    let vitalSounds;
    vitalSounds = {
        'simulatedVocalization': simulatedVocalization,
        'heartSound': heartSound,
        'leftLungSound': leftLungSound,
        'rightLungSound': rightLungSound,
    }
    console.log(vitalSounds)
    res.json({ vitalSounds: vitalSounds});
}
const createVitalSounds = async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return next (
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const { part1, part2, sound } = req.body;
    console.log(req.body)

    let createdVitalSound;
    switch (sound) {
        case 'simulatedVocalization':
            createdVitalSound = new SimulatedVocalization({
                part1,
                part2,
            });
            break;
        case 'heartSound':
            createdVitalSound = new HeartSound({
                part1,
                part2,
            });
            break;
        case 'leftLungSound':
            createdVitalSound = new LeftLungSound({
                part1,
                part2,
            });
            break;
        case 'rightLungSound':
            createdVitalSound = new RightLungSound({
                part1,
                part2,
            });
            break;
        default:
            console.log("Not one of sounds")
            break;
    }

    try {
        createdVitalSound.save();
    } catch (err) {
        const error = new HttpError(
            'Creating vital failed, try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({sound: createdVitalSound});
};

exports.getVital = getVital;
exports.createVital = createVital;
exports.getVitalSounds = getVitalSounds;
exports.createVitalSounds = createVitalSounds;