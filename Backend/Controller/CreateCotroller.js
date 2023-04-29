const crudModel = require("../Model/crudModel");

const createController = async (req, res) => {
  try {
    const { name, number } = req.body;
    const data = new crudModel({
      name: name,
      number: number,
    });
    await data.save();
    res.status(200).send({
      success: true,
      messege: "data added successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messege: "error while creating crud",
      error,
    });
  }
};

const getDataController = async (req, res) => {
  try {
    const data = await crudModel.find({});
    res.status(200).send({
      success: true,
      messege: "Data get successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messege: "erroe while getting data",
      error,
    });
  }
};

const deleteController = async (req, res) => {
  try {
    const id = req.params.id;
    await crudModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      messege: "Data deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      messege: "error while deleting data",
      error,
    });
  }
};

const updateController = async (req, res) => {
  try {
    const { name, number } = req.body;
    const id = req.params.id;
    const data = await crudModel.findByIdAndUpdate(
      id,
      {
        name: name,
        number: number,
      },
      {
        new: true,
      }
    );
    await data.save();
    res.status(200).send({
      success: true,
      messege: "Data updated successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messege: "Error while editing data",
      error,
    });
  }
};

module.exports = {
  createController,
  getDataController,
  deleteController,
  updateController,
};
