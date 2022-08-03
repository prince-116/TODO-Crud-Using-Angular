const express = require("express");
const app = express();
const todoExpressRoute = express.Router();
let todoSchema = require("../model/todo.model")


todoExpressRoute.route('/').get((req, res) => {
  todoSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});


todoExpressRoute.route("/task/:id").get((req, res) => {
  todoSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

todoExpressRoute.route("/add-task").post((req, res, next) => {
  todoSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

todoExpressRoute.route("/del-task/:id").delete((req, res) => {
  todoSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

todoExpressRoute.route("/update-task/:id").put((req, res) => {
  todoSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("UPDATED Successfully!");
      }
    }
  );
});

module.exports = todoExpressRoute;