import { UserErrors } from "../../../../shared/errors/user.errors"; 
import { HashService } from "../../../../shared/hash.service";
import { CreateUserDTO } from "../../../../modules/users/dto/create-user.dto";
import { User } from "../../../../modules/users/models/user.entity";
import { UserRepository } from "../../../../modules/users/repository/user.repository";

export class CreateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private hashService: HashService,
    private errors: UserErrors
  ) {}

  async execute(userDto: CreateUserDTO) {
    // Validar se o usuário já não existe
    const userExists = await this.userRepository.findByEmail(userDto.email);
    if (userExists) {
     throw this.errors.userAlreadyExists();
    }

    const user = new User();
    user.name = userDto.name;
    user.email = userDto.email;
    user.password = await this.hashService.hash(userDto.password);
    user.isAdmin = userDto.isAdmin || false;

    return this.userRepository.create(user);
  }
}
