import { SpeakerApprovalStatus } from '@/enum/speaker/speakerEnum';
import { IBasicApiResponse, } from '@/models/commonModel';
import { IAttachment, IFilUpdateDetail } from '@/models/file/fileModel';
import { IMultipleInputFields, IMultiplePhoneNumberInput } from '@/models/input/multiplePhoneInputModel';
import { IScheduleChoice, IScheduleModel } from '../schedule/scheduleModel';



export interface ISpeakerBasicModel {
      id: number,
      name: string,
      photo: IAttachment | null,
      jobTitle: string,
      affiliation: string,
      approvalStatus: SpeakerApprovalStatus
}

export interface ISpeakerDetailModel extends ISpeakerBasicModel {
      title: string;
      email: string;
      phone: string;
      bio: string;
      linkedInProfile?: string;
      twitterHandle?: string;
      professionalWebsite?: string;
      previousExperience?: string;
      previousConferences?: string;
      expertiseInField: string;
      previousSpeakingEngagements: string[] | null;
      publications: string[] | null;
      preferredSessionLengthMinutes?: number;
      availabilityInfo: string[] | null; // THis is not in used
      willingToTravel: boolean;
      avRequirements?: string;
      accommodationNeeds?: string;
      sessionProposal: IAttachment | null;
      referenceContacts: string[] | null;
      agreedToDates: boolean;
}



export interface ISpeakerBasicResponse extends IBasicApiResponse {
      speakers: ISpeakerBasicModel[];
}




export type ISpeakerByIdResponse = ISpeakerDetailModel;





export interface ISpeakerBasicSearch {
      pageNumber: number;
}



export interface ISpeakerByIdSearch {
      id: ISpeakerDetailModel["id"];
}



export interface ISpeakerPostRequest {
      bio: string;
      photo: File | null,
      linkedInProfile?: string;
      twitterHandle?: string;
      professionalWebsite?: string;
      previousExperience?: string;
      previousConferences?: string;
      expertiseInField: string;
      previousSpeakingEngagements: string[] | null;
      publications: string[] | null;
      preferredSessionLengthMinutes?: number;
      availabilityInfo: string[] | null; // THis is not in used
      willingToTravel: boolean;
      avRequirements?: string;
      accommodationNeeds?: string;
      sessionProposal: File | null;
      referenceContacts: string[] | null;
      agreedToDates: boolean;
      agreedTandC: boolean;
      sessions: IScheduleChoice["sessionId"][];
}




export interface IAdminSpeakerPutRequest {
      speakerId: ISpeakerDetailModel["id"];
      bio: string;
      linkedInProfile?: string;
      twitterHandle?: string;
      professionalWebsite?: string;
      previousExperience?: string;
      previousConferences?: string;
      expertiseInField: string;
      previousSpeakingEngagements: string[] | null;
      publications: string[] | null;
      preferredSessionLengthMinutes?: number;
      availabilityInfo: string[] | null; // THis is not in used
      willingToTravel: boolean;
      avRequirements?: string;
      accommodationNeeds?: string;
      referenceContacts: string[] | null;
      photo: File | null,
      oldPhoto?: string;
      sessionProposal: File | null;
      oldSessionProposal?: string;
}


export interface ISpeakerDeleteRequest {
      speakerId: ISpeakerDetailModel["id"],
}




export interface IAdminSpeakerForm {
      speakerId: ISpeakerDetailModel["id"];
      photo: IFilUpdateDetail,
      bio: string;
      linkedInProfile?: string;
      twitterHandle?: string;
      professionalWebsite?: string;
      previousExperience?: string;
      previousConferences?: string;
      expertiseInField: string;
      previousSpeakingEngagements: IMultipleInputFields;
      publications: IMultipleInputFields;
      preferredSessionLengthMinutes?: number;
      availabilityInfo: string[] | null; // THis is not in used
      willingToTravel: boolean;
      avRequirements?: string;
      accommodationNeeds?: string;
      referenceContacts: IMultiplePhoneNumberInput;
      proposalFile: IFilUpdateDetail,
}


export interface IAdminSpeakerViewOrEditModal {
      id: ISpeakerDetailModel["id"],
}




export interface IAdminSpeakerStatusChangeReq {
      id: ISpeakerDetailModel["id"],
      approvalStatus: ISpeakerDetailModel["approvalStatus"],
}


export interface IAdminSpeakerStatusChangeModal {
      id: ISpeakerDetailModel["id"],
      speakerName: ISpeakerDetailModel["name"];
      approvalStatus: ISpeakerDetailModel["approvalStatus"],
}



export interface ISpeakerAddForm {
      bio: string;
      photo: IFilUpdateDetail,
      linkedInProfile?: string;
      twitterHandle?: string;
      professionalWebsite?: string;
      previousExperience?: string;
      previousConferences?: string;
      expertiseInField: string;
      previousSpeakingEngagements: IMultipleInputFields;
      publications: IMultipleInputFields;
      preferredSessionLengthMinutes?: number;
      availabilityInfo: string[] | null; // THis is not in used
      willingToTravel: boolean;
      avRequirements?: string;
      accommodationNeeds?: string;
      sessionProposal: IFilUpdateDetail;
      referenceContacts: IMultiplePhoneNumberInput;
      agreedToDates: boolean;
      agreedTandC: boolean;
      sessions: IScheduleChoice["sessionId"][];
}


export interface ISpeakerProfessionalAddForm {
      expertiseInField: string;
      publications: IMultipleInputFields;
      previousSpeakingEngagements: IMultipleInputFields;
      previousExperience?: string;
      previousConferences?: string;
}

export interface ISpeakerPersonalAddForm {
      linkedInProfile?: string;
      twitterHandle?: string;
      professionalWebsite?: string;
      bio: string;
      photo: IFilUpdateDetail,
}

export interface ISpeakerSessionDetailAddFrom {
      avRequirements?: string;
      preferredSessionLengthMinutes?: number;
      willingToTravel: boolean;
      accommodationNeeds?: string;
      sessionProposal: IFilUpdateDetail;
}


export interface ISpeakerAdditionalDetailAddFrom {
      referenceContacts: IMultiplePhoneNumberInput;
      agreedToDates: boolean;
      agreedTandC: boolean;
}


/**
 * used speaker apply modal
 */
export interface ISpeakerAddModal {
      sessionChoice: IScheduleChoice;
      dayDate: string;
      startTime: IScheduleModel["startTime"]
      endTime: IScheduleModel["endTime"];
      dayLocation: string;
      sessionLocation: IScheduleModel["location"]


}
