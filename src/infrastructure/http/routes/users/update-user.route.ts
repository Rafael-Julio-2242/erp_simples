import { Router, Request, Response } from "express";
import z from "zod";
import { UpdateUserDTO } from "../../../../modules/users/dto/update-user.dto";
import { makeUpdateUserUseCase } from "../../../factories/user/update.factory";
import { isErrorInterface } from "../../../../shared/errors/errors.interface";

const router = Router();

const updateUserSchema = z
  .object({
    id: z.number(),
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    isAdmin: z.boolean().optional(),
  })
  .strict();

async function updateUser(req: Request, res: Response) {
  const validation = updateUserSchema.safeParse(req.body);

  if (!validation.success) {
    res.status(400).json({
      error: z.formatError(validation.error),
    });
    return;
  }

  const { id, name, email, password, isAdmin } = validation.data;

  const userDto: UpdateUserDTO = {
    id,
    name,
    email,
    password,
    isAdmin,
  };

  const useCase = await makeUpdateUserUseCase(req);

  try {
    const user = await useCase.execute(userDto);
    res.status(200).json(user);
  } catch (e: any) {
    if (isErrorInterface(e)) {
      res.status(400).json(e);
      return;
    }
    res.status(500).json({
      error: e.message,
    });
  }
}

router.put("/update", updateUser);

export default router;
