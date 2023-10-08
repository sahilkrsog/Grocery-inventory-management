const express = require("express");
const db = require("./src/persistence");
const addItem = require("./src/routes/addItem");
const getItems = require("./src/routes/getItems");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is working properly...");
});
app.post("/item", addItem);
app.get("/item", getItems);

db.init()
  .then(() => {
    app.listen(PORT, () => console.log(`http://localhost:${3000}`));
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const gracefulShutdown = () => {
  db.teardown()
    .catch(() => {})
    .then(() => process.exit());
};

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
process.on("SIGUSR2", gracefulShutdown);
