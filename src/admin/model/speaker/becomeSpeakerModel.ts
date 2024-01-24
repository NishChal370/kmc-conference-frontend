import { IFilUpdateDetail } from "@/models/file/fileModel";
import { IScheduleChoice, IScheduleModel } from "../schedule/scheduleModel";
import { IMultipleInputFields, IMultiplePhoneNumberInput } from "@/models/input/multiplePhoneInputModel";

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
      avRequirements?: string,
      preferredSessionLengthMinutes?: number,
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

