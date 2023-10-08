const mongoose = require("mongoose");

const groceryModel = require("../schema/schema");

async function init() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/grocery-inventory", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await groceryModel.createCollection();
  } catch (error) {
    console.error("Error initializing the collection:", error);
  }
}

async function teardown() {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.log("Error while disconnect the db", error);
  }
}

async function storeItems(object) {
  const { supplierName, supplierInfo } = object || {};
  const item = new groceryModel(object);

  item.supplier.name = supplierName || {};
  item.supplier.contactInfo = supplierInfo || {};

  try {
    await item.save();

    return {
      statusCode: 201,
      message: "New item added successfully",
    };
  } catch (error) {
    return {
      statusCode: 404,
      message: "Item not added successfully due to server issue",
    };
  }
}

async function getItems() {
  try {
    const filter = {};
    const items = await groceryModel.find(filter);

    return items;
  } catch (error) {
    return {
      statusCode: 404,
      message: "Server Not Respond, Please contact to the Technical Team.",
    };
  }
}

module.exports = {
  init,
  teardown,
  storeItems,
  getItems,
};
