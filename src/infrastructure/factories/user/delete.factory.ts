import { getCentralDbConnection } from "../../db/data-source";
import { DeleteUserUseCase } from "../../../modules/users/usecases/user/delete.usecase";
import { UserErrors } from "../../../shared/errors/user.errors";
import { UserRepository } from "../../../modules/users/repository/user.repository";

export async function makeDeleteUserUseCase(req: any): Promise<DeleteUserUseCase> {
 const db = await getCentralDbConnection();
 const repo = new UserRepository(db);
 const errors = new UserErrors(req.t);
 
 return new DeleteUserUseCase(repo, errors);
}
