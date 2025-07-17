import { DataSource, Repository } from "typeorm";
import { User } from "../models/user.entity";

export class UserRepository {
  private repo: Repository<User>;

  constructor(connection: DataSource) {
    this.repo = connection.getRepository(User);
  }

  async findAll() {
    return this.repo.find();
  }

  async findById(id: number) {
    return this.repo.findOneBy({ id });
  }

  async findByEmail(email: string) {
    return this.repo.findOneBy({ email });
  }

  async create(user: User) {
    return this.repo.save(user);
  }

  async update(id: number, user: User) {
    return this.repo.update(id, user);
  }

  async delete(id: number) {
    return this.repo.delete(id);
  }
}
