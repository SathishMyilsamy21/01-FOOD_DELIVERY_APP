import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sathishmyilsamy21:sathish21@cluster0.nuomq.mongodb.net/food-delivery-app"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
