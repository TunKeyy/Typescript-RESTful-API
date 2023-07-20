import { IScoreManagement } from './../interface/ScoreInterface';
import { query, Request, Response } from "express";
import { User } from "../models/User";
import { Score } from '../models/Score';
import { ScoreRepo, IscoreRepo } from '../repository/ScoreRepo';
import { BaseController } from "./BaseController";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
// import { transpileModule } from "typescript";

export class ScoreController extends BaseController {
    public _scoreRepo: IscoreRepo;
    constructor(scoreRep: IscoreRepo) {
        super();
        this._scoreRepo = scoreRep;
    }
    static getInstance(): ScoreController {
        return new ScoreController(new ScoreRepo());
        // return newInstance;
    }
    // protected executeImpl(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<any> {
    protected executeImpl(req: Request, res: Response): Promise<any> {
        throw new Error("Method not implemented.");
    }
    public showScoreById = async (req: Request, res: Response) => {
        try {
            let userId = req.params;
            console.log(userId);
            let allScoreForUser = await this._scoreRepo.findScoreByUserId(userId);
            res.send(allScoreForUser);
        } catch (err: any) {
            console.log(err);
            res.send("Error when getting score by userId")
        }
    }
    public showSumScoreById = async (req: Request, res: Response) => {
        try {
            let userId = req.params;
            let SumScoreForUser = await this._scoreRepo.findSumScoreByUserId(userId);
            res.json(SumScoreForUser);
        } catch (err: any) {
            console.log(err);
            res.send("Error when getting sum score");
        }
    }
//     public addUser = async (req: Request, res: Response) => {
//         try {
//             let tempUserVar: IUserManagement = {
//                 user: req.body
//             };
//             await this._scoreRepo.addUserInDatabase(tempUserVar)

//             res.send("Adding user has been successful")
//         }
//         catch (err) {
//             console.log(err)
//             res.send("Error when adding user")
//         }

//     }
//     public findUser = async (req: Request, res: Response) => {
//         try {
//             // let tempUserVarId = req.params.userName;
//             // const user = await this._scoreRepo.findUserById(tempUserVarId);
//             // res.send(user);
//             let userId = req.params;
//             console.log(userId);
            
//             const user = await this._scoreRepo.findUserById(userId);
//             res.send(user)
//         }
//         catch (err) {
//             console.log(err)
//             res.send("Error when finding user")
//         }
//     }
//     public getAllUsers = async (req: Request, res: Response) => {
//         try {
//             let allUsers = await this._scoreRepo.findAllUsers();
//             res.send(allUsers);
//         }
//         catch (error: any) {
//             res.send("error")
//         }
//     }
}
