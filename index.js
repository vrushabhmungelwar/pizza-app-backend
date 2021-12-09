import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routes/user.js";

dotenv.config();
console.log(process.env);

const app = express();
const PORT = process.env.PORT;
// app.use(cors());



// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://affectionate-murdock-39034f.netlify.app');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});



// app.use(
//   cors({ origin: 'https://affectionate-murdock-39034f.netlify.app' })
// );
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb Connected");
  return client;
}
export const client = await createConnection();
app.get("/", (request, response) => {
  response.send("pizza khao, **😅");
});

app.use("/user", userRouter);

app.listen(PORT, () => console.log("App is started", PORT));
