const router = require("express").Router();
const { check } = require("express-validator");

const dogsControllers = require("../controllers/dogs-controller");
const checkAuth = require('../middleware/check-auth');
const fileUpload = require('../middleware/file-upload');

router.get("/", dogsControllers.getDogs);

router.get("/:did", dogsControllers.getDogById);

router.get("/user/:uid", dogsControllers.getDogsByUserId);

router.use(checkAuth);

router.post(
    "/",
    fileUpload.single('image'),
    [check("name").not().isEmpty(), check("description").isLength({ min: 5 })],
    dogsControllers.createDog
);

router.patch(
    "/:did",
    [check("name").not().isEmpty(), check("description").isLength({ min: 5 })],
    dogsControllers.updateDog
);

router.delete("/:did", dogsControllers.deleteDog);

module.exports = router;
