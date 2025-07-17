import { ErrorInterface, ErrorName, ErrorType } from "./errors.interface";
import type { TFunction } from "i18next";

export class UserErrors {

 constructor(private t: TFunction) {}

 userAlreadyExists(): ErrorInterface {
  return {
   name: ErrorName.USER_ALREADY_EXISTS,
   type: ErrorType.ALREADY_EXISTS,
   message: this.t("errors.userAlreadyExists")
  }
 }

 userNotFound(): ErrorInterface {
  return {
   name: ErrorName.USER_NOT_FOUND,
   type: ErrorType.NOT_FOUND,
   message: this.t("errors.userNotFound")
  }
 }

 noDataToUpdateUser(): ErrorInterface {
  return {
   name: ErrorName.NO_DATA_TO_UPDATE_USER,
   type: ErrorType.NO_DATA,
   message: this.t("errors.noDataToUpdateUser")
  }
 }

}