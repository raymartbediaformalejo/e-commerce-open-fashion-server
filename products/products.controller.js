import { v4 as uuidv4 } from "uuid";
import { Products } from "./products.services.js";
import { db } from "../database/database.js";

export const getProducts = async (request, response) => {
  try {
    const page = parseInt(request.query.page) - 1 || 0;
    const limit = parseInt(request.query.limit) || 5;
    const offset = page * limit;
    const { data: products, error: productsError } = await db
      .from("tblProducts")
      .select()
      .range(offset, offset + limit - 1);
    if (productsError) throw productsError;
    const total = products.length;
    const res = {
      total,
      products,
      page: page + 1,
      limit,
    };
    return response.status(200).json(res);
  } catch (error) {
    console.log("Error Products Controller", error);
    return response
      .status(500)
      .send({ message: "Internal Server Error", ok: false });
  }
};

export const getProduct = async (request, response) => {
  const { id } = request.params;
  try {
    const data = await Products.getProduct(id);
    return response.status(200).json(data[0]);
  } catch (error) {
    console.log("Error Product Controller", error);
    return response
      .status(500)
      .send({ message: "Internal Server Error", ok: false });
  }
};

export const createProduct = async (request, response) => {
  try {
    const {
      title,
      description,
      category,
      price,
      discountPercentage,
      brand,
      stock,
      thumbnail,
      images,
      rating,
    } = request.body;
    const id = uuidv4();
    const created_at = new Date();
    const values = {
      id,
      title,
      description,
      category,
      price,
      discountPercentage,
      brand,
      stock,
      thumbnail,
      images,
      rating,
      created_at,
    };
    await Products.createProduct(values);
    return response.status(201).send({ message: "Created", ok: true });
  } catch (error) {
    console.log("Error Product Controller", error);
    return response
      .status(500)
      .send({ message: "Internal Server Error", ok: false });
  }
};
