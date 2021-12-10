import express from "express";
import { getPizza } from "../helper.js";
// import { auth } from "../middleware/auth.js";

const router = express.Router(); ///////

router.route("/").get( async (request, response) => {
  console.log(request.query);
  const filter = request.query;
  const filterPizza = await getPizza(filter);
  response.send(filterPizza);
});

export const pizzalistRouter = router;
