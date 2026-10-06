import { Request, Response, NextFunction } from 'express';
import { ProjectBlueprint, IProjectBlueprint } from '../models/ProjectBlueprint';

export const ProjectBlueprintController = {
  // GET /admin/project-blueprints
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const blueprints = await ProjectBlueprint.find().populate('client requirement');
      res.json(blueprints);
    } catch (err) {
      next(err);
    }
  },

  // GET /admin/project-blueprints/:id
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const blueprint = await ProjectBlueprint.findById(id).populate('client requirement');
      if (!blueprint) return res.status(404).json({ message: 'Project Blueprint not found' });
      res.json(blueprint);
    } catch (err) {
      next(err);
    }
  },

  // POST /admin/project-blueprints
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data: Partial<IProjectBlueprint> = req.body;
      const blueprint = new ProjectBlueprint(data);
      await blueprint.save();
      res.status(201).json(blueprint);
    } catch (err) {
      next(err);
    }
  },

  // PUT /admin/project-blueprints/:id
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updated = await ProjectBlueprint.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if (!updated) return res.status(404).json({ message: 'Project Blueprint not found' });
      res.json(updated);
    } catch (err) {
      next(err);
    }
  },

  // DELETE /admin/project-blueprints/:id
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await ProjectBlueprint.findByIdAndDelete(id);
      if (!result) return res.status(404).json({ message: 'Project Blueprint not found' });
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      next(err);
    }
  },
};
