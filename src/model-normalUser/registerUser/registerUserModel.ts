import { GENDER } from "@/enum/commonEnum";

export interface IRegisterUserPostRequest {
      firstName: string;
      middleName: string;
      lastName: string;
      emailAddress: string;
      dateOfBirth: string;
      gender: GENDER;
      phoneNumber: string;
      password: string;
      confirmPassword: string;
}


export type IRegisterUserForm = IRegisterUserPostRequest