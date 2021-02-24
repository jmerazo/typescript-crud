import { conexion } from './conexion_bd.ts';
import validate = WebAssembly.validate;

/*
Ejercicio

Realizar un crud para registrar Usuarios guardando en una base de datos MySQL/MariaDB...

Debe permitir las funciones básicas de:
Listar usuarios
Crear usuarios
Actualizar usuarios
Eliminar usuarios

Incluir en el proyecto SQL de la base de datos
Github Url del repositorio
Consola
 */
console.log("Menu");
console.log("1. Crear un usuario");
console.log("2. Actualizar un usuario");
console.log("3. Listar usuarios");
console.log("4. Eliminar usuario");
let op = prompt("Seleccione una opción") as string;

/*
switch(variable_expression) {
   case constant_expr1: {
      //statements;
      break;
   }
   case constant_expr2: {
      //statements;
      break;
   }
   default: {
      //statements;
      break;
   }
}
 */
switch (op) {
    case "1": {
        function validar_email( email: any )
        {
            var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email) ? true : false;
        }


        console.log("Registro de usuarios");
        let name = prompt("Ingrese su nombre") as string; //Nombre: Requerido y > 3 caracteres
        let lastname = prompt("Ingrese su apellido") as string; // Apellido: Requerido y > 3 caracteres
        let phone = prompt("Ingrese su celular") as string; //Celular: No es requerido, pero si lo digita debe ser de 10 caracteres
        let email = prompt("Ingrese su correo") as string; // Correo electronico: Requerido, formato email}
        let password = prompt("Ingrese una contraseña") as string; //Contraseña: Tiene que tener minimo 8 caracteres, 1 Letra mayuscula y 1 caracteres especial

        if(name.length > 3 && lastname.length > 3 && phone.length == 10 && validar_email( email ) && password.length >= 8)  {
            console.log("Datos almacenados")
            let user = await conexion.execute(`INSERT INTO register (name,lastname,phone,email,password) values (?,?,?,?,?)`, [
                name,
                lastname,
                phone,
                email,
                password,
            ]);
            //await conexion.execute("insert into register (name,lastname,phone,email,password) values('name','lastname','phone','email','password')");
            //const users = await conexion.execute('select * from categorias');
            console.log(user);
        }else{
            console.log("Por favor ingresar informacion valida")
        }
        break;
    }
    case "2": {
        /*
        const username = "manyuanrong";
        const users = await client.query(`select * from users`);
        const queryWithParams = await client.query(
             "select ??,name from ?? where id = ?",
                ["id", "users", 1],
                );
            console.log(users, queryWithParams);
         */
        let result = await conexion.execute(`update register set ?? = ?`, ["name", "MYR"]);
        console.log(result);
        break;
    }
    case "3": {
        /*
        const username = "manyuanrong";
        const users = await client.query(`select * from users`);
        const queryWithParams = await client.query(
             "select ??,name from ?? where id = ?",
                ["id", "users", 1],
                );
            console.log(users, queryWithParams);
         */
        const users = await conexion.query('select * from register');
        console.log(users.rows);
        break;
    }
    case "4": {
        console.log("op4");
        break;
    }
}




/*
[20:39, 23/2/2021] Jeyson Calvache ITP: En la sección del insert
[20:39, 23/2/2021] Jeyson Calvache ITP: Hay un pequeño ejemplo
[20:39, 23/2/2021] Jeyson Calvache ITP: let result = await client.execute(`INSERT INTO users(name) values(?)`, [
  "manyuanrong",
]);
[20:39, 23/2/2021] Jeyson Calvache ITP: Si te fijas, al execute le puedes enviar un array como segundo parámetro
[20:40, 23/2/2021] Jeyson Calvache ITP: Y los ? Que hay en el string se van a reemplazar directamente en el mismo orden que envías el array
 */