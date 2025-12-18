import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const createToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body

    const user = await userModel.findOne({email})

    if (!user) {
      return res.json({success: false, message: "User doesn't Exist"})
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (isMatch) {
      const token = createToken(user._id)
      res.json({success: true, token})
    } else {
      res.json({success: true, message: "Invalid credentials"})
    }
  } catch (error) {
    res.json({success: false, error: error.message})
  }
}

export {loginUser}