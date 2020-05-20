const router = require("express").Router();
const { check } = require("express-validator");

const commandsControllers = require("../controllers/commands-controller");
const checkAuth = require('../middleware/check-auth');

router.get("/", commandsControllers.getCommands);

router.get("/:cid", commandsControllers.getCommandById);

// router.use(checkAuth);

router.post(
    "/",
    commandsControllers.createCommand
);

// router.post(
//     "/",
//     [check("content").not().isEmpty()],
//     commandsControllers.createCommand
// );

router.delete("/:cid", commandsControllers.deleteCommand);

module.exports = router;
