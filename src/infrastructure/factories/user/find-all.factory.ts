import { UserRepository } from "../../../modules/users/repository/user.repository";
import { FindAllUsersUseCase } from "../../../modules/users/usecases/user/find-all.usecase";
import { getCentralDbConnection } from "../../db/data-source";

export async function makeFindAllUserUseCase(): Promise<FindAllUsersUseCase> {
 const db = await getCentralDbConnection();
 const repo = new UserRepository(db);

 return new FindAllUsersUseCase(repo);
}
