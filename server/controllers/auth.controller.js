import bcryptjs from "bcryptjs";
import User from "../models/user.model.js"

export const signup = async(req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    return res.status(400).json({ message: 'All Fields are required' });
  }
  const hashPassword = bcryptjs.hashSync(password,10);
  const newUser =  new User ({username,email,password:hashPassword})
  await newUser.save();
  res.json({ message: 'Signup' });
};
