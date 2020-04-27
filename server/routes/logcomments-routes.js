const router = require("express").Router();
const { check } = require("express-validator");

const logcommentsControllers = require("../controllers/logcomments-controller");
const checkAuth = require('../middleware/check-auth');

router.get("/", logcommentsControllers.getLogcomments);

router.get("/:lcid", logcommentsControllers.getLogcommentById);

router.get("/user/:uid", logcommentsControllers.getLogcommentsByUserId);

router.use(checkAuth);

router.post(
    "/",
    [check("content").not().isEmpty()],
    logcommentsControllers.createLogcomment
);

router.patch(
    "/:lcid",
    [check("content").not().isEmpty()],
    logcommentsControllers.updateLogcomment
);

router.delete("/:lcid", logcommentsControllers.deleteLogcomment);

module.exports = router;
