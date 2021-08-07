const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  project: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  members: {
    type: [{ name: String, role: String }],
  },
  start: {
    type: Date,
  },
  deadline: {
    type: Date,
  },
  status: {
    type: String, // pending, ongoing, finished
  },
  updates: {
    type: [String],
    // type: [
    //   { name: String, member: { name: String, role: String }, message: String },
    // ],
  },
});

module.exports = Task = mongoose.model('task', TaskSchema);
