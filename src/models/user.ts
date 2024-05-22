import { Schema, model } from 'mongoose'

interface IUser {
	username: string
}

const userSchema = new Schema<IUser>({
	username: { type: String, required: true },
})

export const User = model<IUser>('User', userSchema)
