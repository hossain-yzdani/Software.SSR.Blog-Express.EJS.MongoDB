import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`☢️  app is run on port ${port}`) });