import { UserRepository } from "../../repository/user.repository";

export class FindAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  execute() {
    return this.userRepository.findAll();
  }
}
