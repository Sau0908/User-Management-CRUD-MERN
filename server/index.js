import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();

app.use("/api/user", userRoute);
app.get("/", (req, res) => {
  res.send("This is a User Mangement MERN APP  API");
});

const PORT = process.env.PORT;

const DATABASE_URL = process.env.CONNECTION_URL;

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
