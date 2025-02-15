import { Router } from "express";
import { createQuiz,getquizes,updateQuiz,deleteQuiz } from "../controller/quiz.controller";
const router = Router()

router.route("/get-quizes").get(getquizes)
router.route("/update-quiz/:id").put(updateQuiz)
router.route("/delete-quiz/:id").delete(deleteQuiz)
router.route("/create-quiz").post(createQuiz)
export default router
