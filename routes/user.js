import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, getUserByEmail, genPassword } from "../helper.js";

const router = express.Router(); ///////

router.route("/register").post(async (request, response) => {
  let success = false;

  const { email, password } = request.body;

  const userFromDB = await getUserByEmail(email);

  console.log(userFromDB);

  if (userFromDB) {
    success = false;
    response.status(400).send({ success, message: "email already exists" });
    return;
  }
  if (password.length < 8) {
    success = false;
    response.status(400).send({ success, message: "Password is not longer" });
    return;
  } else {
    success = true;
    const hashedPassword = await genPassword(password);
    const result = await createUser({ email, password: hashedPassword });
    response.send({ success, result });
  }
});

router.route("/signin").post(async (request, response) => {
  let success = false;
  const { email, password } = request.body;

  const userFromDB = await getUserByEmail(email);
  // if (!userFromDB) {
  //   success = false;
  //   response.status(401).send({ success, message: "Invalid credentials1" });
  //   return;
  // }

  const storedPassword = userFromDB.password;

  const isPasswordMatch = await bcrypt.compare(password, storedPassword);

  if (isPasswordMatch) {
    const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY);
    success = true;
    response.send({ success, message: "Successful login", token: token });
    console.log(userFromDB);
  } else {
    success = false;
    response.status(401).send({ success, message: "Invalid credentials" });
  }
});
export const userRouter = router;
