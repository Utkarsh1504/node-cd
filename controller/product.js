import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';
import path from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const data=JSON.parse(readFileSync(path.join(__dirname, '../model/product.json'), 'utf-8'));
// import data from "../model/data.json" assert {type:"json"};
const products = data.products;

export const createProduct = (req, res) => {
  products.push(req.body);
  res.status(201).json(products);
};

export const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

export const getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.status(200).json(product);
};

export const replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(200).json({ message: "successfully updated" });
};

export const updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(200).json({ message: "successfully updated" });
};

export const deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(200).json(product);
};
