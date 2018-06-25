const express = require("express");
const apiRouter = express.Router();

const models = require("../models");
const Event = models.Event;

// allow localhost:8080 (or front-end) to request from localhost:3000
apiRouter.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// routes here prepended with '/api/'
apiRouter.get("/", (req, res, next) => {
  res.redirect("api/events");
});

apiRouter.get("/events", (req, res, next) => {
  Event.findAll({})
    .then(events => res.json(events))
    .catch(next);
});

apiRouter.get("/events/:id", (req, res, next) => {
  return Event.findById(req.params.id)
    .then(event => {
      if (event !== null) {
        res.json(event);
      } else {
        res
          .status(404)
          .json({ error: "Event not found! Was deleted or did not exist." });
      }
    })
    .catch(next);
});

apiRouter.post("/events", (req, res, next) => {
  return Event.create({
    title: req.body.title,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end,
    status: req.body.status
  })
    .then(createdEvent => {
      console.log("Event created:", createdEvent);
      res.status(201).send(createdEvent);
    })
    .catch(next);
});

apiRouter.put("/events/:id", (req, res, next) => {
  return Event.update(
    {
      title: req.body.title,
      description: req.body.description,
      start: req.body.start,
      end: req.body.end,
      status: req.body.status
    },
    { where: { id: req.params.id }, returning: true, plain: true }
  )
    .then(arr => res.status(200).json(arr[1]))
    .catch(next);
});

apiRouter.delete("/events/:id", (req, res, next) => {
  return Event.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(arr => res.status(202).json(arr))
    .catch(next);
});

module.exports = apiRouter;
