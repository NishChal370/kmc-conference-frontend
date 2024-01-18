export interface IResetPasswordModel {
      userId: string,
      token: string,
      newPassword: string,
      confirmPassword: string,
}


export type IResetPasswordRequest = IResetPasswordModel;



export interface IResetPasswordForm {
      newPassword: IResetPasswordModel["newPassword"],
      confirmPassword: IResetPasswordModel["confirmPassword"],
}