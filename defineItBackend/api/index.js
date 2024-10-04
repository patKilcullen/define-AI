
import { Router } from "express";


const router = Router();

import newWords from "./newWords.js"
export default router



router.use("/newWords", newWords);


router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
