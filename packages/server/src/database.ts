import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = () =>
  mongoose
    .connect(process.env.DB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("✅  Database connected!"))
    .catch(() => console.log("🚫  Could not connect to database"));

export default connectDB;
