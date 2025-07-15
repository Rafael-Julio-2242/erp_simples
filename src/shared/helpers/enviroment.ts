import dotenv from "dotenv";

export class Enviroment {
  DB_HOST!: string;
  DB_PORT!: string;
  DB_USERNAME!: string;
  DB_PASSWORD!: string;
  DB_DATABASE!: string;

  constructor() {
    dotenv.config();
    try {
     this.DB_HOST = process.env.DB_HOST!;
     this.DB_PORT = process.env.DB_PORT!;
     this.DB_USERNAME = process.env.DB_USERNAME!;
     this.DB_PASSWORD = process.env.DB_PASSWORD!;
     this.DB_DATABASE = process.env.DB_DATABASE!;
    } catch (e: any) {
      console.error("Error loading enviroment variables! ", e);
      process.exit(1);
    }
  }
}
