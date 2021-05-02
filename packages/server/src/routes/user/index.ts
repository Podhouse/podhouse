import jwt from "koa-jwt";
import Router from "koa-router";

import usersCtl from "../controllers/users";
import topicsCtl from "../controllers/topics";
import answerCtl from "../controllers/answers";
import config from "../config";

const router = new Router({
  prefix: "/users",
});

const { secret } = config;

const {
  login,
  create,
  update,
  find,
  findById,
  delete: del,
  listFollowing,
  follow,
  unfollow,
  listFollowers,
  followTopic,
  unfollowTopic,
  listFollowingTopics,
  checkOwner,
  checkUserExist,
  listQuestions,
  listLikingAnswers,
  likeAnswer,
  unlikeAnswers,
  listDislikingAnswers,
  dislikeAnswer,
  undislikeAnswers,
  listCollectingAnswers,
  collectingAnswer,
  uncollectingAnswers,
} = usersCtl;

const { checkTopicExist } = topicsCtl;
const { checkAnswerExist } = answerCtl;

// auth middleware
const auth = jwt({ secret });

router.get("/", find);
router.get("/:id", findById);
router.post("/", create);
router.patch("/:id", auth, checkOwner, update);
router.delete("/:id", auth, checkOwner, del);
router.post("/login", login);
router.get("/:id/following", listFollowing);
router.get("/:id/followers", auth, listFollowers);
router.put("/following/:id", auth, checkUserExist, follow);
router.delete("/following/:id", auth, checkUserExist, unfollow);
router.get("/:id/followingTopics", listFollowingTopics);
router.put("/followingTopics/:id", auth, checkTopicExist, followTopic);
router.delete("/followingTopics/:id", auth, checkTopicExist, unfollowTopic);
router.get("/:id/questions", listQuestions);
router.get("/:id/likingAnswer", listLikingAnswers);
router.put(
  "/likingAnswer/:id",
  auth,
  checkAnswerExist,
  likeAnswer,
  unlikeAnswers,
);
router.delete("/likingAnswer/:id", auth, checkAnswerExist, unlikeAnswers);
router.get("/:id/dislikingAnswer", listDislikingAnswers);
router.put(
  "/dislikingAnswer/:id",
  auth,
  checkAnswerExist,
  dislikeAnswer,
  unlikeAnswers,
);
router.delete("/dislikingAnswer/:id", auth, checkAnswerExist, undislikeAnswers);
router.get("/:id/collectingAnswers", listCollectingAnswers);
router.put("/collectingAnswers/:id", auth, checkAnswerExist, collectingAnswer);
router.delete(
  "/uncollectingAnswers/:id",
  auth,
  checkAnswerExist,
  uncollectingAnswers,
);

export default router;
