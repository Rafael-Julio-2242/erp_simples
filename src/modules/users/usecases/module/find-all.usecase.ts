import { ModuleRepository } from "../../repository/module.repository";

export class FindAllModulesUseCase {
  constructor(private repo: ModuleRepository) {}

  async execute() {
    return this.repo.findAll();
  }
}
