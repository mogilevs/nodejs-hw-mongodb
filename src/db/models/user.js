import { model, Schema } from 'mongoose';
import { emailRegEx } from '../../constants/auth.js';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, match: emailRegEx, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const UserCollection = model('users', userSchema);
