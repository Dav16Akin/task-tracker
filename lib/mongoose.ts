import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) return console.log("mongoDB uri not found");

  if (isConnected) return console.log("already connected to mongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      connectTimeoutMS: 30000,
    });

    isConnected = true;
    console.log("connected to mongoDB");
  } catch (error: any) {
    console.log(`Eroor ${error.message}`);
  }
};
