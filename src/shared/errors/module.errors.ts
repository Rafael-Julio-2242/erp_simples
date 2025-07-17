import { TFunction } from "i18next";
import { ErrorInterface, ErrorName, ErrorType } from "./errors.interface";


export class ModuleErrors {

 constructor(private t: TFunction) {}

 moduleNotFound(): ErrorInterface {
  return {
   name: ErrorName.MODULE_NOT_FOUND,
   type: ErrorType.NOT_FOUND,
   message: this.t("errors.moduleNotFound")
  }
 }

 moduleUserNotFound(): ErrorInterface {
  return {
   name: ErrorName.MODULE_USER_NOT_FOUND,
   type: ErrorType.NOT_FOUND,
   message: this.t("errors.moduleUserNotFound")
  }
 }

}
