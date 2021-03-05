import {connection_bd} from "../config/connection_mariadb.ts";
import { UserDTO } from "../dto/user.ts";
import {User} from "../user.ts";

export class UsersModel {
    async list() {
        const showAll = await connection_bd.execute('select * from register')

        return showAll.rows;
    }

    async create(user: UserDTO): Promise <void> {
        await connection_bd.execute(`INSERT INTO register (name,lastname,phone,email,password) 
        values (?,?,?,?,?)`, [
            user.name,
            user.lastname,
            user.phone,
            user.email,
            user.password,
        ]);
    }

    async update(user: UserDTO, id: number): Promise <void> {
        await connection_bd.execute(`update register set name = ?,lastname = ?,phone = ?,email = ?,password = ? WHERE id = ?`, [
            user.name,
            user.lastname,
            user.phone,
            user.email,
            user.password,
            id,
        ]);
    }

    async delete(id: number): Promise <void>{
        await connection_bd.execute(`delete from register where id = ?`, [id]);
    }
}