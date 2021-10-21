import express from "express";

import * as db from "./db.mjs";

const router = express.Router();

router.get("/:ticker", async (request, response) => {
  const stock = await db.getStockByTicker(request.params.ticker);
  response.json(stock);
});

router.use(express.json());
router.post("/", async (request, response) => {
  console.log(request.body);
  const stock = await db.addOrUpdateStock(request.body);
  response.status(201).json(stock);
});

export default router;
