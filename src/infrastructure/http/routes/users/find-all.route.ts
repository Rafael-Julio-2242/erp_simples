import { Router, Request, Response } from 'express';
import { makeFindAllUserUseCase } from '../../../factories/user/find-all.factory';

const router = Router();

async function findAll(req: Request, res: Response) {

 const useCase = await makeFindAllUserUseCase();

 try {
  const users = await useCase.execute();
  res.status(200).json(users);
 } catch (e: any) {
  res.status(500).json({
   error: e.message
  });
 }

}

router.get('/find', findAll);

export default router;


