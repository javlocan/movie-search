import mongoose from 'mongoose'

const { Schema } = mongoose
interface IUser {
  name: string
  email: string
  password: string
  image?: string
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  }

},
{
  timestamps: true,
  collection: 'users'
})

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
