
import { Router } from "express";
 import eighthGradeWords from "../words/8thGrade.js";  // Ensure path and filename are correct

const router = Router();

router.get("/:wordType", async (req, res, next) => {

    let wordType = req.params.wordType
let word
    if (wordType === "8"){


word = eighthGradeWords[Math.floor(Math.random() * eighthGradeWords.length)]
    }
    try {
        console.log("eighthGradeWords:",word);


        res.send(word);  // Replace `scores` with actual response data
    } catch (err) {
        next(err);
    }
});

export default router;