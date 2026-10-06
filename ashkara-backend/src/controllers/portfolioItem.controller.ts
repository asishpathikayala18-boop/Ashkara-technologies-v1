import { Request, Response, NextFunction } from 'express';
import { PortfolioItem, IPortfolioItem } from '../models/PortfolioItem';

export const PortfolioItemController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const portfolioItems = await PortfolioItem.find().populate('client projectBlueprint');
      res.json(portfolioItems);
    } catch (err) {
      next(err);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const portfolioItem = await PortfolioItem.findById(id).populate('client projectBlueprint');
      if (!portfolioItem) return res.status(404).json({ message: 'Portfolio Item not found' });
      res.json(portfolioItem);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data: Partial<IPortfolioItem> = req.body;
      const portfolioItem = new PortfolioItem(data);
      await portfolioItem.save();
      res.status(201).json(portfolioItem);
    } catch (err) {
      next(err);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updated = await PortfolioItem.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if (!updated) return res.status(404).json({ message: 'Portfolio Item not found' });
      res.json(updated);
    } catch (err) {
      next(err);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await PortfolioItem.findByIdAndDelete(id);
      if (!result) return res.status(404).json({ message: 'Portfolio Item not found' });
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      next(err);
    }
  },
};
