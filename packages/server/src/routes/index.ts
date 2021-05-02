import koaRouter from "koa-router";

const router = new koaRouter({
  prefix: "/api",
});

import home from "./home";
import users from "./users";

router.use(users.routes(), home.allowedMethods());

export default router;
