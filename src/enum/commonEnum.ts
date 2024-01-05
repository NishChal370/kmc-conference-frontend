/**
 * @type
 * Represent cookies token key
 */
export type COOKIES_TOKEN = 'access_token' | 'refresh_token';



export enum GENDER {
      MALE = "Male",
      FEMALE = "Female",
      OTHERS = "Others",
}



/**
 * @enum
 * Represent API network status
 */
export enum STATUS {
      Idle,
      Loading,
      Succeeded,
      Failed,
      DATA_NOT_FOUND,
}

