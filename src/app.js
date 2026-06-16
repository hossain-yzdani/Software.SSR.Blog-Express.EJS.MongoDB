import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

import pageRouters from "./routes/pageRouters.js";
import blogRouters from "./routes/blogRouters.js";
import authRouters from "./routes/authRouters.js";
import adminRouters from "./routes/adminRouters.js";
import { restrictTo } from "./middlewares/authMiddleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(morgan("dev"));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use("/", pageRouters);
app.use("/blog", blogRouters);
app.use("/auth", authRouters);
app.use("/admin", restrictTo("user"), adminRouters);

app.use((req, res) => {
  res.status(404).render('pages/404', { activePage: '404', user: req.user });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('pages/500', { activePage: '500', user: req.user });
});

export default app;