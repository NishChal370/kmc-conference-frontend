import { IAttachment, IFilUpdateDetail } from '@/models/file/fileModel';
import { IMultipleInputFields, IMultiplePhoneNumberInput } from '@/models/input/multiplePhoneInputModel';

export interface AdminSpeakerFullDetail {
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
      sessionProposal: string,
      referenceContacts: string[],
}






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