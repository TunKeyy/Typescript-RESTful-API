import {
    Model,
    Column,
    Table,
    BeforeCreate,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';

import bcrypt from 'bcryptjs'
import { User } from './User';
// import { Tracing } from 'trace_events';
interface IScore {
    course: string;
    score: number;
    user_id: number
}
@Table({ tableName: "Scores", underscored: true })
export class Score extends Model<IScore> {

    @Column
    course!: string;

    @Column
    score!: number;

    @ForeignKey(() => User)
    @Column
    user_id!: number;
    @BelongsTo(() => User, {foreignKey: 'user_id', as: 'user'})
    user!: User;
}