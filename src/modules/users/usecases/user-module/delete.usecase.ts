import { ModuleErrors } from "../../../../shared/errors/module.errors";
import { UserErrors } from "../../../../shared/errors/user.errors";
import { ModuleRepository } from "../../repository/module.repository";
import { UserRepository } from "../../repository/user.repository";
import { UserModuleRepository } from "../../repository/user_module.repository";

export class DeleteUserModuleUseCase {

 constructor(
  private repo: UserModuleRepository,
  private userRepository: UserRepository,
  private moduleRepository: ModuleRepository,
  private userErrors: UserErrors,
  private moduleErrors: ModuleErrors,
 ) {}

 async execute(userId: number, moduleId: number) {

  const user = await this.userRepository.findById(userId);

  if (!user) {
   throw this.userErrors.userNotFound();
  }

  const module = await this.moduleRepository.findById(moduleId);

  if (!module) {
   throw this.moduleErrors.moduleNotFound();
  }

  const userModule = await this.repo.findModuleUser(moduleId, userId);

  if (!userModule) {
   throw this.moduleErrors.moduleUserNotFound();
  }

  return this.repo.delete(userId, moduleId);
 }

}
