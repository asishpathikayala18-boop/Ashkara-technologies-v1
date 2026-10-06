import { Setting } from "../models/Setting";

export class SettingsService {
  static async getAll(): Promise<Record<string, any>> {
    const settings = await Setting.find().lean();
    return settings.reduce((acc, s) => {
      acc[s.key] = s.value;
      return acc;
    }, {} as Record<string, any>);
  }

  static async set(key: string, value: any) {
    return Setting.findOneAndUpdate({ key }, { value }, { upsert: true, new: true });
  }

  static async bulkSet(data: Record<string, any>) {
    const ops = Object.entries(data).map(([key, value]) => ({
      updateOne: {
        filter: { key },
        update: { $set: { key, value } },
        upsert: true,
      },
    }));
    await Setting.bulkWrite(ops);
    return SettingsService.getAll();
  }

  static async seedDefaults(defaults: Record<string, any>) {
    for (const [key, value] of Object.entries(defaults)) {
      const exists = await Setting.findOne({ key });
      if (!exists) {
        await Setting.create({ key, value });
      }
    }
  }
}
