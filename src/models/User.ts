import {
    Model,
    Column,
    Table,
    BeforeCreate,
    HasMany,
} from 'sequelize-typescript';

import bcrypt from 'bcryptjs'
import { Score } from './Score';
// import { Tracing } from 'trace_events';
interface IUser {
    username: string;
    password: string;
}
@Table({ tableName: "Users", underscored: true })
export class User extends Model<User> {

    @Column
    username!: string;

    @Column
    password!: string;

    @HasMany(() => Score)
    scores!: Score[];
    @BeforeCreate
    static hashPassword(instance: User) {
        if (instance.password) {
            var hash = bcrypt.hashSync(instance.password, 8);
            instance.password = hash;
        }
    }
}

