import { Router, Request, Response } from 'express';
import { makeFindAllUserUseCase } from '../../../factories/user/find-all.factory';
import { User } from '../../../../modules/users/models/user.entity';

const router = Router();

async function findAll(req: Request, res: Response) {

 const useCase = await makeFindAllUserUseCase();

 try {
  const users = await useCase.execute();

  const returnUsers = users.map(user => {
   const partialUser: Partial<User> = {
    id: user.id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
   };
   return partialUser;
  })
  res.status(200).json(returnUsers);
 } catch (e: any) {
  res.status(500).json({
   error: e.message
  });
 }

}

router.get('/find', findAll);

export default router;


