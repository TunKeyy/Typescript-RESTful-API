import { query } from 'express';
import { IScoreManagement } from "../interface/ScoreInterface";
import { Score } from "../models/Score";
import { sequelize } from '../sequelize';
import { User } from '../models/User';
import { log } from 'console';
export interface IscoreRepo {
    addScoreInDatabase(scoreManagementInstance: IScoreManagement): Promise<Score | null>;
    findScoreByUserId(queryParam: any): Promise<Score[] | null>;
    findSumScoreByUserId(queryParam: any) : Promise<number>;
}

export class ScoreRepo implements IscoreRepo {
    addScoreInDatabase = async (scoreManagementInstance: IScoreManagement): Promise<Score | null> => {
        let txn;
        try {
            txn = await sequelize.transaction();
            const scoreDone = await Score.create(scoreManagementInstance.score, {
                transaction: txn,
            });
            txn.commit();
            return scoreDone;
        }
        catch(err: any){
            if (txn) await txn.rollback();
            throw new Error(err);
        }
    }
    findScoreByUserId = async(queryParam: any): Promise<Score[] | null> => {
        try {
            const scores = await Score.findAll({
                where: {
                  user_id: queryParam.id,
                },
              });
          
              return scores;
        } catch (err : any) {
            throw new Error(err);
        }
    }
    findSumScoreByUserId = async(queryParam: any) : Promise<number> => {
        try {
            let sumScore: number = 0;
            await Score.findAll({
                where: {
                    user_id: queryParam.id,
                }
            }).then((scores) => {
                scores.forEach((score) => {
                    sumScore += score.score;
                })
            })
            .catch((err: any) => console.log(err));
            return sumScore;
        } catch (err: any) {
            throw new Error(err);
        }
    }

}