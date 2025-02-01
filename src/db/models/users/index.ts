import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  authentication: {
    sessionToken: { type: String, select: false },
  },
});

export const UserModel = mongoose.model("User", UserSchema);
