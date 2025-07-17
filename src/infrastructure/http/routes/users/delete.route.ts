import { Router, Request, Response } from 'express';
import { makeDeleteUserUseCase } from '../../../factories/user/delete.factory';
import { isErrorInterface } from '../../../../shared/errors/errors.interface';

const router = Router();

async function deleteUser(req: Request, res: Response) {

 const { id } = req.params;

 const useCase = await makeDeleteUserUseCase(req);

 try {
  const deleteResult = await useCase.execute(Number(id));
  res.status(200).json(deleteResult);
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


router.delete('/delete/:id', deleteUser);


export default router;