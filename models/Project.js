const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  members: {
    type: [String],
  },
  start: {
    type: Date,
  },
  status: {
    type: String,
  },
  tasks: {
    type: [String],
  },
});
