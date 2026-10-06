import { Request, Response, NextFunction } from 'express';
import { Reminder, IReminder } from '../models/Reminder';

export const ReminderController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const reminders = await Reminder.find().populate('client projectBlueprint');
      res.json(reminders);
    } catch (err) {
      next(err);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const reminder = await Reminder.findById(id).populate('client projectBlueprint');
      if (!reminder) return res.status(404).json({ message: 'Reminder not found' });
      res.json(reminder);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data: Partial<IReminder> = req.body;
      const reminder = new Reminder(data);
      await reminder.save();
      res.status(201).json(reminder);
    } catch (err) {
      next(err);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updated = await Reminder.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if (!updated) return res.status(404).json({ message: 'Reminder not found' });
      res.json(updated);
    } catch (err) {
      next(err);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await Reminder.findByIdAndDelete(id);
      if (!result) return res.status(404).json({ message: 'Reminder not found' });
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      next(err);
    }
  },
};
