import mongoose from "mongoose";

export const connectDatabase = () => {
  const mongo_uri = process.env.MONGO_URI;
  if (!mongo_uri) {
    throw new Error("MONGO_URI is not defined in the environment variables");
  }
  mongoose
    .connect(mongo_uri)
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((error) => console.log("Database connection error :", error));
};
