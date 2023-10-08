const db = require("../persistence");

module.exports = async (req, res) => {
  const item = await db.storeItems(req.body);
  res.send(item);
};
