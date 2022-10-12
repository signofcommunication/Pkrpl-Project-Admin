import { config } from "dotenv";
import express from "express";
import connectDB from "./db/connect.js";
import routes from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => res.json({ message: "Welcome to Nica Store API" }));
app.use("/products", routes);

async function start() {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
