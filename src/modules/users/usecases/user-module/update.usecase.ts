import { ModuleErrors } from "../../../../shared/errors/module.errors";
import { UserErrors } from "../../../../shared/errors/user.errors";
import { UserModuleDTO } from "../../dto/user-module.dto";
import { ModuleRepository } from "../../repository/module.repository";
import { UserRepository } from "../../repository/user.repository";
import { UserModuleRepository } from "../../repository/user_module.repository";

export class UpdateUserModuleUseCase {

 constructor(
  private repo: UserModuleRepository,
  private moduleRepository: ModuleRepository,
  private userRepository: UserRepository,
  private userErrors: UserErrors,
  private moduleErrors: ModuleErrors,
 ) {}

 async execute(userModuleDto: UserModuleDTO) {

  const user = await this.userRepository.findById(userModuleDto.userId);

  if (!user) {
   throw this.userErrors.userNotFound();
  }

  const module = await this.moduleRepository.findById(userModuleDto.moduleId);

  if (!module) {
   throw this.moduleErrors.moduleNotFound();
  }

  const userModule = await this.repo.findModuleUser(userModuleDto.moduleId, userModuleDto.userId);

  if (!userModule) {
   throw this.moduleErrors.moduleUserNotFound();
  }
  if (!userModuleDto.isAdmin) {
   throw this.userErrors.noDataToUpdateUser();
  }

  userModule.isAdmin = userModuleDto.isAdmin;

  return this.repo.update(userModule);
 }
}

