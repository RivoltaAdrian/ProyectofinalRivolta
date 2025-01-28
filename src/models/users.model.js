import { model, Schema } from "mongoose";

const userCollection = 'user'

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    age: Number
})
export const UserModel = model(userCollection, userSchema, {
    timestamps: true
})