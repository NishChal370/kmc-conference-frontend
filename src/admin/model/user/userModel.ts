import { GENDER, UserRole } from "@/enum/commonEnum"
import { IBasicApiResponse } from "@/models/commonModel";
import { ISpeakerBasicModel } from "../speaker/adminSpeakerModel"
import { IParticipantBasicModel } from "../participant/participantModel"
import { ICallForPaperBasicModel } from "../callForPaper/callForPaperModel"
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
      speakerId?: ISpeakerBasicModel["id"];
      callForPaperId?: ICallForPaperBasicModel["id"];
      participantId?: IParticipantBasicModel["id"];
      userRole: UserRole;
}



export interface IUserResponse extends IBasicApiResponse {
      registeredUsers: IUserModel[];
}

export interface IUserSearch {
      pageNumber: number;
}


export type IUserViewOrEditModal = IUserModel;


export interface IUserPostRequest extends IRegisterUserPostRequest {
      role: UserRole,
};


export type IAdminUserAddForm = IUserPostRequest;