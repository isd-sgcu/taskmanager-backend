const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Task = require('../models/Task');

// get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({
      status: -1,
      start: -1,
    });
    res.json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// get one specific project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });
    res.json(project);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// create project
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const project = new Project(req.body);
    await project.save();
    res.send('Project created');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// update project
router.post('/:id', async (req, res) => {
  try {
    await Project.findByIdAndUpdate(req.params.id, req.body);
    res.send('Project updated');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// delete project
router.delete('/:id', async (req, res) => {
  try {
    await Project.findOneAndDelete(req.params.id);
    res.send('Project deleted');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// get all tasks in a project
router.get('/:id/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({ project: req.params.id }).sort({
      status: -1,
      start: -1,
    });
    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// get one task
router.get('/:id/tasks/:taskId', async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.taskId });
    res.json(task);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// create task
router.post('/:id/tasks', async (req, res) => {
  const input = req.body;
  input.project = req.params.id; // or maybe get project id from frontend state instead
  try {
    const task = new Task(input);
    await task.save();
    res.send('Task added');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// update task (add commit)
router.post('/:id/tasks/:taskId', async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.taskId });
    task.updates.push(req.body); // push update object into the array
    await task.save();
    res.send('Task updated');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// view task (see all commits)
// now that I think about it, this is kinda unnecessary because we can just map and display all the updates after getting the task from the 'get one task' route

// router.get('/:id/tasks/:taskId/updates', async (req, res) => {
//   try {
//     const task = await Task.findOne({ _id: req.params.taskId });
//     res.json(task.updates);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Server error');
//   }
// });

// delete task
router.delete('/:id/tasks/:taskId', async (req, res) => {
  try {
    await Task.findOneAndDelete({ _id: req.params.taskId });
    res.send('Task deleted');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
