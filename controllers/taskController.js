import Task from '../models/Task.js';

// Create Task
export const createTask = async (req, res) => {
  try {
    const { title, description, deadline, status } = req.body;
    // Check for existing task with same title and status
    const existingTask = await Task.findOne({ title, status });
    if (existingTask) {
      return res.status(400).json({ message: 'Task with the same title already exists in this status group.' });
    }
    const task = new Task({ title, description, deadline, status });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ updatedAt: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Task
export const updateTask = async (req, res) => {
  try {
    const { title, description, deadline, status } = req.body;
    // Check for existing task with same title and status excluding the current task
    const existingTask = await Task.findOne({
      _id: { $ne: req.params.id },
      title,
      status
    });

    if (existingTask) {
      return res.status(400).json({ message: 'Another task with the same title exists in this status group.' });
    }
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, deadline, status, updatedAt: Date.now() },
      { new: true }
    );
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Task
export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
