import { UserErrors } from "../../../../shared/errors/user.errors";
import { HashService } from "../../../../shared/hash.service";
import { UpdateUserDTO } from "../../../../modules/users/dto/update-user.dto";
import { UserRepository } from "../../../../modules/users/repository/user.repository";

export class UpdateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private hashService: HashService,
    private errors: UserErrors
  ) {}

  async execute(userDto: UpdateUserDTO) {
    const user = await this.userRepository.findById(userDto.id);

    if (!user) {
      throw this.errors.userNotFound();
    }

    if (!userDto.name && !userDto.email && !userDto.password) {
    }

    if (userDto.name) user.name = userDto.name;
    if (userDto.email) user.email = userDto.email;
    if (userDto.password)
      user.password = await this.hashService.hash(userDto.password);

    return this.userRepository.update(userDto.id, user);
  }
}
