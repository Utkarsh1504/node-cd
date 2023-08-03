import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';
import path from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const data=JSON.parse(readFileSync(path.join(__dirname, '../model/user.json'), 'utf-8'));
// import data from "../model/user.json" assert {type:"json"};
const users = data.users;

export const createUser = (req, res) => {
  users.push(req.body);
  res.status(201).json(users);
};

export const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

export const getUser = (req, res) => {
  const id = +req.params.id;
  const user = users.find((p) => p.id === id);
  res.status(200).json(user);
};

export const replaceUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  users.splice(userIndex, 1, { ...req.body, id: id });
  res.status(200).json({ message: "successfully updated" });
};

export const updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(200).json({ message: "successfully updated" });
};

export const deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  res.status(200).json(user);
};
