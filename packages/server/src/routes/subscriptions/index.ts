import jwt from "koa-jwt";
import Router from "koa-router";

import topicsCtl from "../controllers/topics";
import config from "../config";

const router = new Router({
  prefix: "/topics",
});
const { secret } = config;

const {
  // login,
  create,
  update,
  find,
  findById,
  // delete: del,
  checkTopicExist,
  listTopicFollowers,
  listQuestions,
} = topicsCtl;

// auth middleware
const auth = jwt({ secret });

router.get("/", find);
router.post("/", auth, create);
router.get("/:id", checkTopicExist, findById);
router.patch("/:id", auth, checkTopicExist, update);
router.get("/:id/followers", checkTopicExist, listTopicFollowers);
router.get("/:id/questions", checkTopicExist, listQuestions);

export default router;
