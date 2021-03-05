import { Context } from 'https://deno.land/x/oak/mod.ts';
import { UsersModel } from "../models/user.ts";
import {dataUser} from '../DataUtils.ts';
const usersModel = new UsersModel();

export class  UserController {
    async list () {
        const users = await usersModel.list();
        //context.response.body = users;
        console.log(users);
    }

    async create() {
        const user = dataUser();
        await usersModel.create({
            name: user.getName(),
            lastname: user.getLastname(),
            phone: user.getPhone(),
            email: user.getEmail(),
            password: user.getPassword(),
        });
    }

    async update(id:number) {
        const user = dataUser();
        await usersModel.update({
            name: user.getName(),
            lastname: user.getLastname(),
            phone: user.getPhone(),
            email: user.getEmail(),
            password: user.getPassword(),
        }, id);
    }

    async delete(id: number) {
        await usersModel.delete(id);
    }
}