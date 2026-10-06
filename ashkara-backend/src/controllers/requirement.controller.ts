import { Request, Response, NextFunction } from 'express';
import { Requirement, IRequirement } from '../models/Requirement';

export const RequirementController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const requirements = await Requirement.find().populate('client');
      res.json(requirements);
    } catch (err) {
      next(err);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const requirement = await Requirement.findById(id).populate('client');
      if (!requirement) return res.status(404).json({ message: 'Requirement not found' });
      res.json(requirement);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data: Partial<IRequirement> = req.body;
      const requirement = new Requirement(data);
      await requirement.save();
      res.status(201).json(requirement);
    } catch (err) {
      next(err);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updated = await Requirement.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if (!updated) return res.status(404).json({ message: 'Requirement not found' });
      res.json(updated);
    } catch (err) {
      next(err);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await Requirement.findByIdAndDelete(id);
      if (!result) return res.status(404).json({ message: 'Requirement not found' });
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      next(err);
    }
  },
};
