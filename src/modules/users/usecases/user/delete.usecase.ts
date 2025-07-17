import { UserErrors } from "../../../../shared/errors/user.errors";
import { UserRepository } from "../../repository/user.repository";

export class DeleteUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private errors: UserErrors
  ) {}

  execute(id: number) {
    const user = this.userRepository.findById(id);

    if (!user) {
      throw this.errors.noDataToUpdateUser();
    }

    return this.userRepository.delete(id);
  }
}
