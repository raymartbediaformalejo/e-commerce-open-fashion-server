import express from "express";
import "dotenv/config";

import productsRoutes from "../products/products.routes";

const PORT = process.env.PORT || 4000;
const app = express();
app.listen(PORT, () =>
  console.log(`Server is now running at http://localhost:${PORT}`)
);
app.use(express.json());

app.use("/api", productsRoutes);
