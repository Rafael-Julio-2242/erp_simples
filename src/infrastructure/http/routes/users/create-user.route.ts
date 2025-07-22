import { Router, Request, Response } from 'express';
import  z from 'zod';
import { CreateUserDTO } from '../../../../modules/users/dto/create-user.dto';
import { isErrorInterface } from '../../../../shared/errors/errors.interface';
import { makeCreateUserUseCase } from '../../../factories/user/create.factory';

const router = Router();

const createUserSchema = z.object({
 name: z.string(),
 email: z.string(),
 password: z.string(),
 isAdmin: z.boolean().optional()
}).strict();

async function createUser(req: Request, res: Response) {

 const validation = createUserSchema.safeParse(req.body);

 if (!validation.success) {
  res.status(400).json({
   error: z.formatError(validation.error)
  });
  return;
 }

 const { name, email, password, isAdmin } = validation.data;

 const userDto: CreateUserDTO = {
  name,
  email,
  password,
  isAdmin
 }

 const useCase = await makeCreateUserUseCase(req);

 
 try {
  console.log(req.t('errors.userAlreadyExists'));
  const user = await useCase.execute(userDto);
  res.status(201).json(user);
 } catch (e: any) {
  if (isErrorInterface(e)) {
   res.status(400).json({
    type: e.type,
    name: e.name,
    error: e.message,
   });
   return;
  }
  res.status(500).json({
   error: e.message
  });
 }
}


router.post('/create', createUser)

export default router;