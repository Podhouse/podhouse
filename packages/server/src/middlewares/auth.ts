import jwt from "jsonwebtoken";
import { Context, Next } from "koa";

import config from "../config";

const { secret } = config;

// auth middleware
const auth = async (ctx: Context, next: Next) => {
  const { authorization = "" } = ctx.request.header;
  const token = authorization.replace("Bearer ", "");
  try {
    const user = jwt.verify(token, secret);
    ctx.state.user = user;
  } catch (err) {
    ctx.throw(401, err.message);
  }
  await next();
};

export default auth;
