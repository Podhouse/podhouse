import path from "path";
import Koa from "koa";
import dotenv from "dotenv";

dotenv.config();

const app = new Koa();

const env = process.env.NODE_ENV;
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Severing is running on http://localhost:${port}/api`);
});
