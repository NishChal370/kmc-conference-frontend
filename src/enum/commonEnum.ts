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
 * Represent role
 */
export enum UserRole {
      SUPER_ADMIN = "SuperAdmin",
      SITE_MANAGER = "SiteManager",
      REVIEWER = "Reviewer",
      READ_ONLY = "ReadOnly",
      PARTICIPANTS = "User",
}



/**
 * @enum
 * Represent API network status
 */
export enum Status {
      IDEL,
      LOADING,
      SUCCEEDED,
      FAILED,
      DATA_NOT_FOUND,
}

