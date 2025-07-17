import { UserRepository } from "../../../modules/users/repository/user.repository";
import { UpdateUserUseCase } from "../../../modules/users/usecases/user/update.usecase";
import { UserErrors } from "../../../shared/errors/user.errors";
import { HashService } from "../../../shared/hash.service";
import { getCentralDbConnection } from "../../db/data-source";


export async function makeUpdateUserUseCase(req: any): Promise<UpdateUserUseCase> {
 const db = await getCentralDbConnection();
 const repo = new UserRepository(db);
 const hashService = new HashService(HashService.getDefaultSaltValue());
 const errors = new UserErrors(req.t);
 
 return new UpdateUserUseCase(repo, hashService, errors);
}
