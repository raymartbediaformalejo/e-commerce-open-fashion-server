import { db } from "../database/database.js";

export class Products {
  static getProducts = async () => {
    const { data, error } = await db.from("tblProducts").select();
    if (error) throw error;
    return data;
  };
  static getProduct = async (id) => {
    const { data, error } = await db.from("tblProducts").select().eq("id", id);
    if (error) throw error;
    return data;
  };
  static createProduct = async (values) => {
    const { data, error } = await db.from("tblProducts").insert(values);
    if (error) throw error;
    return data;
  };

  static updateProduct = async (id, values) => {
    const { data, error } = await db
      .from("tblProducts")
      .update(values)
      .eq("id", id);
    if (error) throw error;
    return data;
  };

  static deleteProduct = async (id) => {
    const { data, error } = await db.from("tblProducts").delete().eq("id", id);
    if (error) throw error;
    return data;
  };
}
