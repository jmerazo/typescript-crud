import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { UserController } from './controllers/user.ts';

const app = new Application();

const router = new Router();
const userController = new UserController();

router.get('/', (
    context) => {
    context.response.body = "Hola, desde Oak";
});

router.get('/users', userController.list);

app.use(router.routes());
console.log('Servidor escuchando por el puerto 8000');

await app.listen({
    port: 8000,
});