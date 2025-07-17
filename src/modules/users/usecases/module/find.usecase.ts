import { ModuleErrors } from "../../../../shared/errors/module.errors";
import { ModuleRepository } from "../../repository/module.repository";

export class FindModuleUseCase {
  constructor(
    private repo: ModuleRepository,
    private moduleErrors: ModuleErrors
  ) {}

  async execute(moduleId: number) {
    const module = await this.repo.findById(moduleId);

    if (!module) {
      throw this.moduleErrors.moduleNotFound();
    }

    return module;
  }
}
