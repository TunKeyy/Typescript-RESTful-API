import { Router } from "express";
import { UserController } from "../controller/UserController";
// import { User } from "../models/user";
import bodyParser from "body-parser";
// import { resourceLimits } from "worker_threads";
const router = Router();
let userController = UserController.getInstance();

router.post('/addUser', userController.addUser)
router.get('/findUser-by-id/:id', userController.findUser)
router.get('/all-users/', userController.getAllUsers)
export default router;