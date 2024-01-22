export interface IVerifyEmailModel {
      userId: string,
      token: string
}

export type IVerifyEmailRequest = IVerifyEmailModel;



export interface IVerifyEmailResponse {
      valid: boolean,
      expired: boolean,
      requiresPasswordReset: boolean
}