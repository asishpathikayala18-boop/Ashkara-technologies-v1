import { Request, Response, NextFunction } from 'express';
import { Client, IClient } from '../models/Client';

export const ClientController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const clients = await Client.find();
      res.json(clients);
    } catch (err) {
      next(err);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const client = await Client.findById(id);
      if (!client) return res.status(404).json({ message: 'Client not found' });
      res.json(client);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data: Partial<IClient> = req.body;
      const client = new Client(data);
      await client.save();
      res.status(201).json(client);
    } catch (err) {
      next(err);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updated = await Client.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if (!updated) return res.status(404).json({ message: 'Client not found' });
      res.json(updated);
    } catch (err) {
      next(err);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await Client.findByIdAndDelete(id);
      if (!result) return res.status(404).json({ message: 'Client not found' });
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      next(err);
    }
  },
};
