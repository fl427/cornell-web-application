const router = require("express").Router();
const { check } = require("express-validator");

const vitalsControllers = require("../controllers/vitals-controller");

router.get("/", vitalsControllers.getVital);

router.post(
    "/",
    [check("target").not().isEmpty(), check("duration").not().isEmpty()],
    vitalsControllers.createVital
);

router.post(
    "/scenario",
    [check("scenario").not().isEmpty()],
    vitalsControllers.setScenario
);

router.post(
    "/",
    [check("target").not().isEmpty(), check("duration").not().isEmpty()],
    vitalsControllers.createVital
);

router.get("/sounds", vitalsControllers.getVitalSounds);
router.post(
    "/sounds",
    vitalsControllers.createVitalSounds
);

router.get("/pulse", vitalsControllers.getVitalPulse);
router.post(
    "/pulse",
    vitalsControllers.createVitalPulse
);

router.get("/probe", vitalsControllers.getVitalProbe);
router.post(
    "/probe",
    vitalsControllers.createVitalProbe
);


module.exports = router;
