import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    fullname: string;
    password: string;
    confirmed: boolean;
    avatar?: string;
    confirm_hash?: string;
    last_seen?: Date;
  }

const UserSchema: Schema = new Schema(
    {
    email: String,
    avatar: String,
    fullname: String,
    password: String,
    confirmed: Boolean,
    confirm_hash: String,
    last_seen: Date,
    }, 
    {
    timestamps: true,
    }
);
const User = mongoose.model<IUser>('User', UserSchema);

export default User;