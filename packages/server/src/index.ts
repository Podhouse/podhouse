import dotenv from "dotenv";
import Koa from "koa";
import cors from "@koa/cors";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import helmet from "koa-helmet";
import graphqlHttp from "koa-graphql";
import koaPlayground from "graphql-playground-middleware-koa";

import connectDB from "./database";

import graphql from "./graphql";

dotenv.config();

const app = new Koa();
const router = new Router();

const graphqlServer = graphqlHttp(graphql);

router.all("/graphql", bodyParser(), graphqlServer);
router.all(
  "/graphiql",
  koaPlayground({
    endpoint: "/graphql",
  }),
);

app.listen(process.env.PORT || 4000);
app.use(logger());
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy:
      process.env.NODE_ENV === "production" ? undefined : false,
  }),
);
app.use(router.routes()).use(router.allowedMethods());

connectDB();
