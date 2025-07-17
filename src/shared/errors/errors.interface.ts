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
