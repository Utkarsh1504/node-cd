import { User } from "../model/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    const user = new User(req.body);
    var token = jwt.sign({ email: req.body.email }, process.env.SECRET);
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    user.token = token;
    user.password = hashPassword;
    const doc = await user.save();
    console.log(doc);
    res.status(201).json({ message: "created", token });
  } catch (err) {
    console.error("error", err);
    res.status(400).json(err);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const isAuth = bcrypt.compareSync(req.body.password, user.password);
    if (isAuth) {
      var token = jwt.sign({ email: req.body.email }, process.env.SECRET);
      user.token = token;
      user.save(() => {
        res.json({ token });
      });
      res.status(200).json({ token });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.status(401).json(err);
  }
};
