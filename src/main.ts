import { connection_bd } from './config/connection_mariadb.ts';
import { dataUser } from "./DataUtils.ts";
import { UsersModel } from './models/user.ts';
import {UserController} from "./controllers/user.ts";
import {UsuariosModel} from "../../deno-crud/deno-mvc/src/models/user.ts";

const usersModel = new UsersModel();
const userController = new UserController();

let op
do {
    console.log("Menu");
    console.log("1. Crear un usuario");
    console.log("2. Actualizar un usuario");
    console.log("3. Listar usuarios");
    console.log("4. Eliminar usuario");
    console.log("5. Salir");
    op = parseInt(prompt("Seleccione una opción") as string);

    switch (op) {
        case 1: {
            const user = dataUser();
            await userController.create();
            break;
        }
        case 2: {
            await userController.list();
            const id = parseInt(prompt("Seleccione el ID que desea actualizar") as string);
            await userController.update(id);
            break;
        }
        case 3: {
            await userController.list();
            break;
        }
        case 4: {
            await userController.list();
            const id = parseInt(prompt("Seleccione el ID que desea eliminar") as string);
            await userController.delete(id);
            break;
        }
        case 5: {
            break;
        }
    }
}while(op != 5);