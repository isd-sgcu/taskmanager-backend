const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Task = require('../models/Task');

// get all projects
router.get('/', (req, res) => {
  res.send('Projects');
});

// get one specific project

// create project

// update project

// delete project

module.exports = router;
