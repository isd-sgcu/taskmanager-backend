const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  start: {
    type: Date,
  },
  status: {
    type: String, // pending, ongoing, finished
  },
  updates: {
    type: [String],
  },
});
