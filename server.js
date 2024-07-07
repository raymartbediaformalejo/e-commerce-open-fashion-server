import express from "express";
import cors from "cors";
import "dotenv/config";

import productsRoutes from "./products/products.routes.js";

const PORT = process.env.PORT || 4000;
const app = express();
app.listen(PORT, () =>
  console.log(`Server is now running at http://localhost:${PORT}`)
);
app.use(cors({ origin: ["http://localhost:3000", ""], credentials: true }));
app.use(express.json());

app.use("/api", productsRoutes);
