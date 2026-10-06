import { Request, Response, NextFunction } from 'express';
import { Task, ITask } from '../models/Task';

export const TaskController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks = await Task.find().populate('projectBlueprint');
      res.json(tasks);
    } catch (err) {
      next(err);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const task = await Task.findById(id).populate('projectBlueprint');
      if (!task) return res.status(404).json({ message: 'Task not found' });
      res.json(task);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data: Partial<ITask> = req.body;
      const task = new Task(data);
      await task.save();
      res.status(201).json(task);
    } catch (err) {
      next(err);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updated = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if (!updated) return res.status(404).json({ message: 'Task not found' });
      res.json(updated);
    } catch (err) {
      next(err);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await Task.findByIdAndDelete(id);
      if (!result) return res.status(404).json({ message: 'Task not found' });
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      next(err);
    }
  },
};
