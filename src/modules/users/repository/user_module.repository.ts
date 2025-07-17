import { DataSource, Repository } from "typeorm";
import { UserModule } from "../models/user_module.entity";

export class UserModuleRepository {
 private repo: Repository<UserModule>;

 constructor(private connection: DataSource) {
  this.repo = connection.getRepository(UserModule);
 }

 async findModuleUser(moduleId: number, userId: number) {
  return this.repo.findOneBy({ moduleId, userId });
 }

 async findUserModules(userId: number) {
  return this.repo.find({ where: { userId } });
 }

 async findModuleUsers(moduleId: number) {
  return this.repo.find({ where: { moduleId } });
 }

 async create(userModule: UserModule) {
  return this.repo.save(userModule);
 }

 async update(userModule: UserModule) {
  return this.repo.save(userModule);
 }

 async delete(userId: number, moduleId: number) {
  return this.repo.delete({ userId, moduleId });
 }

}
