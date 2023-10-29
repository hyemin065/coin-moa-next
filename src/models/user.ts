import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    id: String,
    password: String
  },
  {
    timestamps: true,
    collection: 'user'
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
