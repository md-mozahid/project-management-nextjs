import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    required: false,
    type: String,
  },
  role: {
    required: true,
    type: String,
  },
  profilePicture: {
    required: false,
    type: String,
  },
  designation: {
    required: false,
    type: String,
  },
});
export const UserModel =
  mongoose.models.User ?? mongoose.model("User", userSchema);
