const db = require("../persistence");

module.exports = async (req, res) => {
  console.log("items");
  const item = await db.getItems();
  res.send(item);
};
