const express = require("express");
const {
  createController,
  getDataController,
  deleteController,
  updateController,
} = require("../Controller/CreateCotroller");

const router = express.Router();

router.post("/create", createController);

router.get("/get-data", getDataController);

router.delete("/delete/:id", deleteController);

router.put("/update/:id", updateController);

module.exports = router;
