import { UserRepository } from "../../../modules/users/repository/user.repository";
import { FindUserUseCase } from "../../../modules/users/usecases/user/find.usecase";
import { UserErrors } from "../../../shared/errors/user.errors";
import { getCentralDbConnection } from "../../db/data-source";

export async function makeFindUserUseCase(req: any): Promise<FindUserUseCase> {
 const db = await getCentralDbConnection();
 const repo = new UserRepository(db);
 const errors = new UserErrors(req.t);

 return new FindUserUseCase(repo, errors);

}
