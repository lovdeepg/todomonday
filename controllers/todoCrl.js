const express = require("express");
const router = express.Router();
const Todos = require("../models/TodoModel");

router.get("/", (req, res) => {
  res.redirect("/todos");
});

router.get("/todos", (req, res) => {
  Todos.find().then(todos => {
    res.render("index", { todos }); // if its array of data put curley brackets on around todos
  });
});

router.get("/todos/new", (req, res) => {
  res.render("new");
});

router.post("/todos", (req, res) => {
  Todos.create({
    title: req.body.title,
    description: req.body.description
  }).then(todo => {
    res.redirect("/todos/" + todo.id);
  });
});

router.get("/todos/:id", (req, res) => {
  Todos.findOne({ _id: req.params.id }).then(todo => {
    res.render("show", todo);
  });
});

router.get("/todos/edit/:id", (req, res) => {
  Todos.findOne({ _id: req.params.id }).then(todo => {
    res.render("edit", todo);
  });
});

router.put("todos/update/:id", (req, res) => {
  req.body.complete = req.body.complete ? true : false;
  Todos.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    todo => {
      res.redirect("/todos" + todo.id);
    }
  );
});

router.patch("/todos/patch/:id", (req, res) => {
  Todos.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { complete: req.body.checked } }
  ).then(() => {});
});

router.delete("/todos/delete/:id", (req, res) => {
  Todos.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});

router.get("/todos/delete/:id", (req, res) => {
  Todos.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});

router.get("/test", (req, res) => {
  res.send("this is the test  route");
});

module.exports = router;
