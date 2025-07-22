import { Router } from 'express';
import usersRouter from './users';

const router = Router();

// TODO
// Esse router é responsável por basicamente juntar todas as outras rotas

router.use('/users', usersRouter);

export default router;
