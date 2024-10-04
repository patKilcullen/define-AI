const router = require("express").Router();
module.exports = router;

// router.use("/users", require("./users"));
// router.use("/games", require("./games"));
// router.use("/scores", require("./scores"));
// router.use("/wordsAndDefinitions", require("./wordsAndDefinitions"));
router.use("/newWords", require("./newWords"));
// router.use("/openAI", require("./openAI"));
// router.use("/openAIFunc", require("./openAIFunc"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
