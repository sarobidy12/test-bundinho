import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../interface/User";

// Create Schema
const UserSchema: Schema = new Schema({
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
    default: ""
  },
  email: {
    type: String,
    required: true,
  },
  note: {
    type: Number,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});


export const User = mongoose.model<IUser>("User", UserSchema);
