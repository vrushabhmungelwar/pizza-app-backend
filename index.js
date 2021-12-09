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
var corsOptions = {
  origin: 'https://affectionate-murdock-39034f.netlify.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

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



app.get("/", cors(corsOptions), (request, response) => {
  response.send("pizza khao, **😅");
});

app.use("/user", userRouter);

app.listen(PORT, () => console.log("App is started", PORT));
