const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoogleBookSchema = new Schema({
  authors: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

const GoogleBooks = mongoose.model("googleBooks", GoogleBookSchema);

module.exports = GoogleBooks;
