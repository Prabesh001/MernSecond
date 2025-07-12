import mongoose from "mongoose";
import User from "../models/User.js";

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://prabeshdaahal123:Prabesh001@cluster0.dmtgt.mongodb.net/ecom?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("database connected successfully");

    const adminExist = await User.findOne({ role: "ADMIN" });

    if (adminExist) {
      console.log("Admin already exists");
    } else {
      await User.create({
        userName: "AdminUser",
        email: "admin@gmail.com",
        password: "admin123",
        role: "ADMIN",
      });

      console.log("Admin seeded successfully");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
