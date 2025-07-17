import { DataSource, Repository } from "typeorm";
import { Module } from "../models/module.entity";

export class ModuleRepository {
 private repo: Repository<Module>;

 constructor(connection: DataSource) {
  this.repo = connection.getRepository(Module);
 }

 async findAll() {
  return this.repo.find();
 }

 async findById(id: number) {
  return this.repo.findOneBy({ id });
 }

}
