import { ModuleErrors } from "../../../../shared/errors/module.errors";
import { ModuleRepository } from "../../repository/module.repository";
import { UserModuleRepository } from "../../repository/user_module.repository";

export class FindModuleUsersUseCase {
  constructor(
    private repo: UserModuleRepository,
    private moduleRepository: ModuleRepository,
    private moduleErrors: ModuleErrors
  ) {}

  async execute(moduleId: number) {
    const module = await this.moduleRepository.findById(moduleId);

    if (!module) {
      throw this.moduleErrors.moduleNotFound();
    }

    return this.repo.findModuleUsers(moduleId);
  }
}
