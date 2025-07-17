import { ModuleErrors } from "../../../../shared/errors/module.errors";
import { UserErrors } from "../../../../shared/errors/user.errors";
import { UserModuleDTO } from "../../dto/user-module.dto";
import { UserModule } from "../../models/user_module.entity";
import { ModuleRepository } from "../../repository/module.repository";
import { UserRepository } from "../../repository/user.repository";
import { UserModuleRepository } from "../../repository/user_module.repository";

export class CreateUserModuleUseCase {
  constructor(
    private userModuleRepository: UserModuleRepository,
    private userErrors: UserErrors,
    private moduleErrors: ModuleErrors,
    private moduleRepository: ModuleRepository,
    private userRepository: UserRepository
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

    const userModule = new UserModule();
    userModule.userId = userModuleDto.userId;
    userModule.moduleId = userModuleDto.moduleId;
    userModule.isAdmin = userModuleDto.isAdmin || false;

    return this.userModuleRepository.create(userModule);
  }
}
