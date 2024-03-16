import mongoose from "mongoose";

export default async function connectMongoDB(dbUrl) {
  try {
    //mongodb://127.0.0.1:27017/db_name
    await mongoose.connect(dbUrl);
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}
