import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

//config env
dotenv.config();

//connect databse config

connectDB();

const app = express();

//middleware
app.unsubscribe(express.json());
app.use(morgan("dev"));

app.get("/", (req, resp) => {
  resp.send("<h1>Welcome to e-commerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 4800;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgBlue.white);
});
