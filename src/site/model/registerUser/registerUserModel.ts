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
      title: string,
      affiliation: string,
      jobTitle: string,
}


export type IRegisterUserForm = IRegisterUserPostRequest;


export interface IRegisterUserBasicForm {
      firstName: string;
      middleName: string;
      lastName: string;
      emailAddress: string;
      dateOfBirth: string;
      gender: GENDER;
      phoneNumber: string;
}

export interface IRegisterUserPasswordForm {
      password: string;
      confirmPassword: string;
}


export interface IRegisterUserProfessionalForm {
      title: string,
      affiliation: string,
      jobTitle: string,
}