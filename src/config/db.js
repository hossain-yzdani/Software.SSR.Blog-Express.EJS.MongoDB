import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ connected to database");
  } catch (error) {
    console.log("❌ connecting to database faild");
    process.exit(1);
  }
}

export default connectDB;