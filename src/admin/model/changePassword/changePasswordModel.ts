export interface IChangePasswordRequest {
      oldPassword: string;
      newPassword: string;
      confirmPassword: string;
}


export type IChangePasswordForm = IChangePasswordRequest;