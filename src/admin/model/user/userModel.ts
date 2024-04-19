import { GENDER, UserRole } from "@/enum/commonEnum"
import { UserStatus } from "@/enum/user/userEnum";
import { IBasicApiResponse, IBasicSearchParam } from "@/models/commonModel";
import { IRegisterUserPostRequest } from '@/site/model/registerUser/registerUserModel';

export interface IUserModel {
      id: string;
      fullName: string;
      dateOfBirth: string;
      gender: GENDER;
      title: string;
      affiliation: string;
      jobTitle: string;
      email: string;
      phoneNumber: string;
      isSpeaker: boolean;
      isCallForPaper: boolean;
      isParticipant: boolean;
      userRole: UserRole;
      userStatus: UserStatus;
      lockoutEnd: string;
}


export interface IUserResponse extends IBasicApiResponse {
      registeredUsers: IUserModel[];
}

export type IUserSearch = IBasicSearchParam;


export type IUserViewOrEditModal = IUserModel;


export interface IUserPostRequest extends IRegisterUserPostRequest {
      role: UserRole,
};


export type IAdminUserAddForm = IUserPostRequest;



export interface IAdminUserRoleChangeRequest {
      userId: string,
      newRole: UserRole,
}


export interface IAdminUserRoleChangeModal {
      id: IUserModel["id"];
      fullName: IUserModel["fullName"];
      userRole: IUserModel["userRole"];
}


export interface IAdminUserStatusChangeRequest {
      userId: string;
      userStatus: UserStatus;
}


export interface IAdminUserStatusChangeModal {
      id: IUserModel["id"];
      fullName: IUserModel["fullName"];
      userStatus: IUserModel["userStatus"];
}