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
    "/card2",
    vitalsControllers.createVitalCard2
);


module.exports = router;
