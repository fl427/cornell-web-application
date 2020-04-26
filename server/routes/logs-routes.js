const router = require("express").Router();
const { check } = require("express-validator");

const logsControllers = require("../controllers/logs-controller");

router.get("/", logsControllers.getLogs);

router.get("/:lid", logsControllers.getLogById);

router.post(
    "/",
    [check("log").not().isEmpty(), check("createDate").not().isEmpty()],
    logsControllers.createLog
);

router.delete("/:lid", logsControllers.deleteLog);

module.exports = router;
