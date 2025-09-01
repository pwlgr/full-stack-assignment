import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { router } from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(3000, () => {
  console.log("servier running on port 3000");
});
app.use("/api", router);
