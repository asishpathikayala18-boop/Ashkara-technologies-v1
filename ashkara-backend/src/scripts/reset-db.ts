import "dotenv/config";
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/ashkara";

async function resetDb() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const collections = await mongoose.connection.db!.collections();
    for (const collection of collections) {
      await collection.drop();
      console.log(`🗑  Dropped: ${collection.collectionName}`);
    }

    console.log("\n✅ Database reset complete!");
    console.log("   Run 'npm run seed' to re-populate the database.\n");
  } catch (error) {
    console.error("❌ Reset failed:", error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

resetDb();
