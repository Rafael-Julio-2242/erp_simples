import { UserErrors } from "../../../../shared/errors/user.errors";
import { UserRepository } from "../../repository/user.repository";

export class FindUserUseCase {

 constructor(private userRepository: UserRepository, private errors: UserErrors) {}

 async execute(id: number) {
  const user = await this.userRepository.findById(id);

  if (!user) {
   throw this.errors.userNotFound();
  }

  return user;
 }

}
