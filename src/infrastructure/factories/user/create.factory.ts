import { UserRepository } from "../../../modules/users/repository/user.repository";
import { CreateUserUseCase } from "../../../modules/users/usecases/user/create.usecase";
import { UserErrors } from "../../../shared/errors/user.errors";
import { HashService } from "../../../shared/hash.service";
import { getCentralDbConnection } from "../../db/data-source";

export async function makeCreateUserUseCase(req: any): Promise<CreateUserUseCase> {
 const db = await getCentralDbConnection();
 const repo = new UserRepository(db);
 const hashService = new HashService(HashService.getDefaultSaltValue());
 const errors = new UserErrors(req.t);
 
 return new CreateUserUseCase(repo, hashService, errors);
}

