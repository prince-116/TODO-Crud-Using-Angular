const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let todoSchema = new Schema(
  {
    task: {
      type: String,
    },
    active: {
      type: Boolean,
    },
  },
  {
    collection: "tasks",
  }
);

module.exports = mongoose.model("todoSchema", todoSchema);
