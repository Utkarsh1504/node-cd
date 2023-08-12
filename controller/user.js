import { User } from "../model/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

export const getUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.status(200).json(user);
};

export const replaceUser = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await User.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json({ message: "successfully replace", doc });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json({ message: "successfully modified", doc });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await User.findOneAndDelete({ _id: id });
    res.status(200).json({message:"deleted", doc});
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
