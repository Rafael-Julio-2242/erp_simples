export enum ErrorType {
 ALREADY_EXISTS = 'ALREADY_EXISTS',
 NOT_FOUND = 'NOT_FOUND',
 NO_DATA = 'NO_DATA'
}

export enum ErrorName {
 USER_ALREADY_EXISTS = 'UserAlreadyExistsError',
 USER_NOT_FOUND = 'UserNotFoundError',
 NO_DATA_TO_UPDATE_USER = 'NoDataToUpdateUserError',
 MODULE_NOT_FOUND = 'ModuleNotFoundError',
 MODULE_USER_NOT_FOUND = 'ModuleUserNotFoundError',
}

export interface ErrorInterface extends Error {
  name: ErrorName;
  type: ErrorType;
  message: string;
}

export function isErrorInterface(error: any): error is ErrorInterface {
  return (
    // error instanceof Error &&
    'name' in error &&
    'type' in error &&
    'message' in error &&
    Object.values(ErrorName).includes((error as ErrorInterface).name) &&
    Object.values(ErrorType).includes((error as ErrorInterface).type)
  );
}
