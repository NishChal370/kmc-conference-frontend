import { IAttachment, IFilUpdateDetail } from '@/models/file/fileModel';
import { IMultipleInputFields, IMultiplePhoneNumberInput } from '@/models/input/multiplePhoneInputModel';

export interface IAdminSpeakerFullDetail {
      speakerId: number,
      photo: File,
      firstName: string,
      middleName: string,
      lastName: string,
      phone: string,
      email: string,
      title: string,
      affiliation: string,
      jobTitle: string,
      linkedInProfile: string,
      twitterHandle: string,
      professionalWebsite: string,
      bio: string,
      expertiseInField: string,
      publications: string[],
      previousSpeakingEngagements: string[],
      previousExperience: string,
      previousConferences: string,
      willingToTravel: boolean,
      avRequirements: string,
      preferredSessionLengthMinutes: number,
      accommodationNeeds: string,
      sessionProposal?: IAttachment[],
      referenceContacts: string[],
}



/**
 * @interface
 * Represent GET speaker full details by speakerId.
 */
export interface IAdminSpeakerFullDetailedInfoById {
      speakerId: IAdminSpeakerFullDetail["speakerId"],
}



export type IAdminSpeakerFullDetailedInfoByIdResponse = IAdminSpeakerFullDetail;



export interface IAdminSpeakerPutRequest {
      speakerId: number,
      photo: File,
      firstName: string,
      middleName: string,
      lastName: string,
      phone: string,
      email: string,
      title: string,
      affiliation: string,
      jobTitle: string,
      linkedInProfile: string,
      twitterHandle: string,
      professionalWebsite: string,
      bio: string,
      expertiseInField: string,
      publications: string[],
      previousSpeakingEngagements: string[],
      previousExperience: string,
      previousConferences: string,
      willingToTravel: boolean,
      avRequirements: string,
      preferredSessionLengthMinutes: number,
      accommodationNeeds: string,
      sessionProposal?: File[],
      oldSessionProposal?: IAttachment[],
      referenceContacts: string[],
}


export interface IAdminSpeakerEditForm extends Omit<IAdminSpeakerPutRequest, "speakerId" | "publications" | "previousSpeakingEngagements" | "referenceContacts" | "sessionProposal" | "oldSessionProposal"> {
      publications: IMultipleInputFields,
      previousSpeakingEngagements: IMultipleInputFields,
      referenceContacts: IMultiplePhoneNumberInput,
      proposalFile: IFilUpdateDetail,
}



export type IAdminSpeakerEditModal = IAdminSpeakerFullDetailedInfoById;


export interface IAdminSpeakerBasicInfoSearch {
      pageNumber?: number;
}