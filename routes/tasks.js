import express from 'express';
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

const router = express.Router();

// Create Task API
router.post('/', createTask);

// Get All Tasks API
router.get('/', getAllTasks);

// Update Task API
router.put('/:id', updateTask);

// Delete Task API
router.delete('/:id', deleteTask);

export default router;
