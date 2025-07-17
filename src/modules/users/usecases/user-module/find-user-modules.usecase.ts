import { UserErrors } from "../../../../shared/errors/user.errors";
import { UserRepository } from "../../repository/user.repository";
import { UserModuleRepository } from "../../repository/user_module.repository";

export class FindUserModulesUseCase {

 constructor(
  private repo: UserModuleRepository,
  private userRepository: UserRepository,
  private userErrors: UserErrors,
 ) {}

 async execute(userId: number) {
  const user = await this.userRepository.findById(userId);

  if (!user) {
   throw this.userErrors.userNotFound();
  }

  return this.repo.findUserModules(userId);
 }

}
