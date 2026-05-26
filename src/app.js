import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import pageRouters from "./routes/pageRouters.js";
import blogRouters from "./routes/blogRouters.js";
import authRouters from "./routes/authRouters.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
// app.use(cookieParser());
app.use(express.static("public"));
app.use(morgan("dev"));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use("/", pageRouters);
app.use("/blog", blogRouters);
app.use("/auth", authRouters);

export default app;