import { ISpeakerSession } from "./speakerModel";
import { IFilUpdateDetail } from "@/models/file/fileModel";
import { IScheduleChoice, IScheduleModel } from "../schedule/scheduleModel";
import { IMultipleInputFields, IMultiplePhoneNumberInput } from "@/models/input/multiplePhoneInputModel";


/**
 * @interface
 * Represent apply for speaker Modal
 */
export interface ISpeakerAddModal {
      sessionChoice: IScheduleChoice;
      dayDate: string;
      startTime: IScheduleModel["startTime"];
      endTime: IScheduleModel["endTime"];
      dayLocation: string;
      sessionLocation: IScheduleModel["location"];
}






// Become Speaker

export interface ISpeakerPostRequest {
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
      photo: File | null,
      referenceContacts: string[] | null;
      sessionSelection: Omit<ISpeakerSession, "sessionProposal"> & {
            sessionProposal: File | null
      };
      agreedTandC: boolean;
      agreedToDates: boolean;
}




export interface ISpeakerAddForm {
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
      photo: IFilUpdateDetail,
      referenceContacts: IMultiplePhoneNumberInput;
      agreedToDates: boolean;
      agreedTandC: boolean;
      avRequirements?: string;
      preferredSessionLengthMinutes?: number;
      proposalFile: IFilUpdateDetail;
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
      proposalFile: IFilUpdateDetail;
}


export interface ISpeakerAdditionalDetailAddFrom {
      referenceContacts: IMultiplePhoneNumberInput;
      agreedToDates: boolean;
      agreedTandC: boolean;
}









// Add new session for existing speaker


/**
 * @interface
 * Represent add new session for existing speaker
 */
export interface ISpeakerNewSessionPostRequest {
      sessionId: IScheduleChoice["sessionId"];
      avRequirements?: string;
      sessionProposal: File | null;
      preferredSessionLengthMinutes?: number;
}




export interface ISpeakerNewSessionAddForm {
      avRequirements?: string;
      preferredSessionLengthMinutes?: number;
      proposalFile: IFilUpdateDetail;
}