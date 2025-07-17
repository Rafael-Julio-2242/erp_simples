import * as bcrypt from 'bcrypt';

export class HashService {

 constructor(private saltRounds: number) {}

 async hash(password: string) {
  return bcrypt.hash(password, this.saltRounds);
 }

 async compare(password: string, hash: string) {
  return bcrypt.compare(password, hash);
 }

}
