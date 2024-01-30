import { SpeakerApprovalStatus } from '@/enum/speaker/speakerEnum';
import { IBasicApiResponse, } from '@/models/commonModel';
import { IScheduleModel } from '../schedule/scheduleModel';
import { IAttachment, IFilUpdateDetail, } from '@/models/file/fileModel';
import { IMultipleInputFields, IMultiplePhoneNumberInput } from '@/models/input/multiplePhoneInputModel';



export interface ISpeakerBasicModel {
      id: number,
      name: string,
      photo: IAttachment | null,
      jobTitle: string,
      email: string;
      affiliation: string,
}

export interface ISpeakerDetailModel extends ISpeakerBasicModel {
      title: string;
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
      willingToTravel: boolean;
      accommodationNeeds?: string;
      referenceContacts: string[] | null;
      agreedToDates: boolean;
}

export interface ISpeakerApplicationBasicPutRequest {
      speakerId: ISpeakerBasicModel["id"];
      bio: string;
      linkedInProfile?: string;
      twitterHandle?: string;
      professionalWebsite?: string;
      previousExperience?: string;
      previousConferences?: string;
      expertiseInField: string;
      previousSpeakingEngagements: string[] | null;
      publications: string[] | null;
      willingToTravel: boolean;
      accommodationNeeds?: string;
      referenceContacts: string[] | null;
      photo: File | null;
      oldPhoto?: string;
      availabilityInfo: string[] | null; // THis is not in used
}


export interface ISpeakerApplicationEditForm {
      bio: string;
      linkedInProfile?: string;
      twitterHandle?: string;
      professionalWebsite?: string;
      previousExperience?: string;
      previousConferences?: string;
      expertiseInField: string;
      previousSpeakingEngagements: IMultipleInputFields;
      publications: IMultipleInputFields;
      willingToTravel: boolean;
      accommodationNeeds?: string;
      referenceContacts: IMultiplePhoneNumberInput;
      photo: IFilUpdateDetail;
}


export interface ISpeakerSession {
      sessionId: IScheduleModel["id"],
      title: IScheduleModel["title"],
      avRequirements?: string,
      approvalStatus: SpeakerApprovalStatus,
      preferredSessionLengthMinutes?: number,
      sessionProposal: IAttachment | null;
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





export interface ISpeakerDeleteRequest {
      speakerId: ISpeakerDetailModel["id"],
}



export interface ISpeakerViewOrEditModal {
      speakerId: ISpeakerDetailModel["id"],
}