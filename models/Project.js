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
    type: [{ name: String, role: String }],
  },
  start: {
    type: Date,
  },
  status: {
    type: String,
  },
  // don't think tasks array is necessary here anymore
  // tasks: [
  //   {
  //     id: {
  //       type: String,
  //     },
  //     name: {
  //       type: String,
  //     },
  //   },
  // ],
});

module.exports = Project = mongoose.model('project', ProjectSchema);
