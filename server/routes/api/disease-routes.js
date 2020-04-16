const router = require("express").Router();
const { check } = require("express-validator");

const diseasesControllers = require("../../controllers/diseases-controllers");

router.get("/:pid", diseasesControllers.getDiseaseById);

router.get("/user/:uid", diseasesControllers.getDiseasesByUserId);

router.post(
  "/",
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
