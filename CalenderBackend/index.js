const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const models = require("./models");

// require in the sub-routes
const apiRouter = require("./routes/api");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// logging middleware
app.use(morgan("dev"));

app.use("/api", apiRouter);

app.get("/", (req, res, next) => {
  res.send("hello");
});

// error-handling express middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

const PORT = 3000;

models.Event.sync() // {force: true} as arg to DROP table
  .then(() => {
    console.log("Event model created!");
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  })
  .catch(console.error.bind(console));
