import mongoose, { mongo } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema =new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required for creating user"],
    trim: true,
    lowercase: true,
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Please fill a valid email address",
    ],
    unique: [true, "email already exists"],
  },

  name: {
    type: String,
    required: [true, "Name is required for creating the account"],
  },

  password: {
    type: String,
    required: [true, "password is required for creating an account"],
    minlength: [6, "password should be contain more than 6 charecter"],
    select: false,
  },
},{timestamps : true});


userSchema.pre("save",async function (next) {
    if(!this.isModified("password")){
        return next()
    }

    const hash = await bcrypt.hash(this.password,10)
    this.password=hash
    return next()
})


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password)
}


const userModel = mongoose.model("user",userSchema)

export default userModel;