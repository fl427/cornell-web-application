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
    "/simulatedVocalization",
    vitalsControllers.createSimulatedVocalization
);

router.post(
    "/",
    vitalsControllers.createSimulatedVocalization
);

module.exports = router;
