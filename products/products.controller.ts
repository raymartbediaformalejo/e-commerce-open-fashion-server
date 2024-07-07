import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Products } from "./products.services";

export const getProducts = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const data = await Products.getProducts();
    return response.status(200).send({ data, ok: true });
  } catch (error) {
    console.log("Error Products Controller", error);
    return response
      .status(500)
      .send({ message: "Internal Server Error", ok: false });
  }
};

export const getProduct = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { productID } = request.params;
  try {
    const data = await Products.getProduct(+productID);
    return response.status(200).send({ data, ok: true });
  } catch (error) {
    console.log("Error Product Controller", error);
    return response
      .status(500)
      .send({ message: "Internal Server Error", ok: false });
  }
};

export const createProduct = async (
  request: Request,
  response: Response
): Promise<Response> => {
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
