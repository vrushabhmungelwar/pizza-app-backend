import { client } from "./index.js";
import bcrypt from "bcrypt";

async function createUser(data) {
  return await client.db("Users").collection("user").insertOne(data);
}
async function getUserByEmail(email) {
  return await client.db("Users").collection("user").findOne({ email: email });
}

async function createAdmin(data) {
  return await client.db("Users").collection("admin").insertOne(data);
}
async function getAdminByEmail(email) {
  return await client.db("Users").collection("admin").findOne({ email: email });
}

async function genPassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  console.log(salt);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
  return hashedPassword;
}

async function getPizza(data) {
  return await client
    .db("pizza_data")
    .collection("pizzalist")
    .find(data)
    .toArray();
}

async function getDogs(data) {
  return await client.db("Dogs").collection("dog_facts").find(data).toArray();
}
export {
  createUser,
  getUserByEmail,
  genPassword,
  getPizza,
  createAdmin,
  getAdminByEmail,
  getDogs,
};
