import { Router, Request, Response } from 'express';
import { makeFindUserUseCase } from '../../../factories/user/find.factory';
import { isErrorInterface } from '../../../../shared/errors/errors.interface';
import { User } from '../../../../modules/users/models/user.entity';


const router = Router();

async function find(req: Request, res: Response) {
 const { id } = req.params;

 const useCase = await makeFindUserUseCase(req);

 try {
  const user = await useCase.execute(Number(id));

  const partialUser: Partial<User> = {
   id: user.id,
   name: user.name,
   email: user.email,
   isAdmin: user.isAdmin,
  };
  res.status(200).json(partialUser);
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


