const mongoose = require("../db/connection");

//model structure

TodoSchema = new mongoose.Schema({
  title: String,
  complete: Boolean,
  description: String
});

//create model
const Todos = mongoose.model("Todos", TodoSchema);

module.exports = Todos;

//same as above
// module.exports = mongoose.model("Todos", TodoSchema)
