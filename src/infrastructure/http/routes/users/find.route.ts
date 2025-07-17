import { Router, Request, Response } from 'express';
import { makeFindUserUseCase } from '../../../factories/user/find.factory';
import { isErrorInterface } from '../../../../shared/errors/errors.interface';


const router = Router();

async function find(req: Request, res: Response) {
 const { id } = req.params;

 const useCase = await makeFindUserUseCase(req);

 try {
  const user = await useCase.execute(Number(id));
  res.status(200).json(user);
 } catch (e: any) {
  if (isErrorInterface(e)) {
   res.status(400).json(e);
   return;
  }
  res.status(500).json({
   error: e.message
  });
 }
}


router.get('/find/:id', find);

export default router;


