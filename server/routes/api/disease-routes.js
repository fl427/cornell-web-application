const router = require("express").Router();
const { check } = require("express-validator");

const diseasesControllers = require("../../controllers/diseases-controllers");
const checkAuth = require('../../middleware/check-auth');
const fileUpload = require('../../middleware/file-upload');

router.get("/:pid", diseasesControllers.getDiseaseById);

router.get("/user/:uid", diseasesControllers.getDiseasesByUserId);

router.use(checkAuth);

router.post(
  "/",
  fileUpload.single('image'),
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  diseasesControllers.createDisease
);

router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  diseasesControllers.updateDisease
);

router.delete("/:pid", diseasesControllers.deleteDisease);

module.exports = router;
