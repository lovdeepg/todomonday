const express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");
const TodoCtrl = require("./controllers/todoCrl");
const app = express();

app.use(methodOverride("_method"));
app.use(parser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use("/", TodoCtrl);

app.listen(3002, () => {
  console.log("listen on port 3002");
});
