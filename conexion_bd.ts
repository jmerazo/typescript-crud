import {Client} from 'https://deno.land/x/mysql/mod.ts';

const client = await new Client().connect({
    hostname: 'localhost',
    username: 'root',
    db: 'users',
    password: 'Jmerazo96*',
    port: 3306,
});

export const conexion = client;