const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/todo",
  { useNewUrlParser: true }
);

module.exports = mongoose;
