import { GENDER } from "@/enum/commonEnum"
import { ISpeakerBasicModel } from "../speaker/adminSpeakerModel"
import { ICallForPaperBasicModel } from "../callForPaper/callForPaperModel"
import { IParticipantBasicModel } from "../participant/participantModel"

interface IAdminProfileBasicModel {
      email: string,
      firstName: string,
      middleName?: string,
      lastName: string,
      dateOfBirth: string,
      gender: GENDER,
      phoneNumber: string,

}

export interface IAdminProfileModel extends IAdminProfileBasicModel {
      id: string,
      title: string,
      affiliation: string,
      jobTitle: string,
      speakerId: ISpeakerBasicModel["id"] | null,
      callForPaperId: ICallForPaperBasicModel["id"] | null,
      participantId: IParticipantBasicModel["id"] | null
}

export type IAdminProfileResponse = IAdminProfileModel;


export interface IAdminProfilePutRequest extends Omit<IAdminProfileBasicModel, "email"> {
      emailAddress: string;
};


export type IAdminProfileEditForm = IAdminProfilePutRequest;