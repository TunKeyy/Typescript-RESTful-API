import { Router } from "express";
import { ScoreController } from "../controller/ScoreController";
// import { User } from "../models/user";
import bodyParser from "body-parser";
// import { resourceLimits } from "worker_threads";
const router = Router();
let scoreController = ScoreController.getInstance();

router.get('/show-score-by-user/:id', scoreController.showScoreById);
router.get('/show-sum-score-by-user/:id', scoreController.showSumScoreById);
export default router;