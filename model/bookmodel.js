const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
});

// This creates the collection.
const Bookmodel = mongoose.model("Books", bookSchema);
module.exports = Bookmodel;