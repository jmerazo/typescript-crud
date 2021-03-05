import {User} from "./user.ts";

export function dataUser():User {
    let name
    let lastname
    let phone
    let email
    let password
    let condition = 0
    do {
        condition = 0
        name = prompt('Nombres: ') as string;
        if (name !== "" && name !== null) {
            if (name.length >= 3) {
                condition = 1
            }
        }
    } while (condition < 1)

    do {
        condition = 0
        lastname = prompt('Apellidos: ') as string;
        if (name !== "" && lastname !== null) {
            if (lastname.length >= 3) {
                condition = 1
            }
        }
    } while (condition < 1)

    do {
        condition = 0
        phone = prompt('Celular: ') as string;
        if (phone !== "" || phone !== null) {
            if (phone.length == 10) {
                condition = 1
            }
        } else {
            condition = 1
        }
    } while (condition < 1)


    function isValidEmail(email: string) {
        return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
    }

    do {
        email = prompt('Correo electronico: ') as string
        isValidEmail(email)

    } while (!isValidEmail(email))

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;


    function isValidPassword(paswore: string) {
        return regex.test(paswore)

    }

    do {
        password = prompt("Contraseña: ") as string
        isValidPassword(password)
    } while (!isValidPassword(password))

    let dataUserInput=new User(name,lastname,phone,email,password);

    return dataUserInput;
}