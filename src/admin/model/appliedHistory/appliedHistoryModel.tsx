import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";
import { IScheduleModel } from "../schedule/scheduleModel";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";
import { IAttachment, IFilUpdateDetail } from "@/models/file/fileModel";
import { IMultipleInputFields, IMultiplePhoneNumberInput } from "@/models/input/multiplePhoneInputModel";

export interface IPreviouslyAppliedHistory {
      participant: boolean;
      speaker: boolean;
      callForPaper: boolean;
}

export interface IAppliedParticipationModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      location: IScheduleModel["location"];
      startTime: IScheduleModel["startTime"];
      endTime: IScheduleModel["endTime"];
}

export type IAppliedParticipationResponse = IAppliedParticipationModel[];

export interface IAppliedParticipationDetailedModel extends IAppliedParticipationModel {
      address: string;
      registrationType: string;
      city: string;
      state: string;
      postalCode: number;
      country: string;
      registrationFeePaymentDetails: string;
      specialRequirements: string;
      trackPreferences: string;
      bio: string;
      linkedInProfile: string;
      twitterHandle: string;
      hotelPreferences: string;
      roommatePreferences: string;
      arrivalDate: string;
      departureDate: string;
      modeOfTransportation: string;
      emergencyContactName: string;
      relationshipWithEmergencyContact: string;
      emergencyContactNumber: string;
      conferenceDiscoverySource: string;
      expectationsGoals: string;
      hasReadPrivacy: boolean;
      consentToPhotography: boolean;
}

export type IAppliedParticipationDetailedResponse = IAppliedParticipationDetailedModel;

export interface IAppliedParticipationDetailSearch {
      sessionId: IScheduleModel["id"];
}

// -------Speakers --------

export interface IAppliedSpeakerBasic {
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
      availabilityInfo: string[] | null; // THis is not in used
      photo: IAttachment | null;
      referenceContacts: string[] | null;
      agreedToDates: boolean;
}

export type IAppliedSpeakerBasicResponse = IAppliedSpeakerBasic;

export interface IAppliedSpeakerSessionModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      location: IScheduleModel["location"];
      startTime: IScheduleModel["startTime"];
      endTime: IScheduleModel["endTime"];
      approvalStatus: SpeakerApprovalStatus;
}

export type IAppliedSpeakerSessionResponse = IAppliedSpeakerSessionModel[];

export interface IAppliedSpeakerSessionDetailedModel extends IAppliedSpeakerSessionModel {
      avRequirements?: string;
      sessionProposal: IAttachment | null;
      preferredSessionLengthMinutes?: number;
}

export interface IAppliedSpeakerSessionDetailSearch {
      sessionId: IScheduleModel["id"];
}

export type IAppliedSpeakerSessionDetailedResponse = IAppliedSpeakerSessionDetailedModel;

export interface IAppliedSpeakerBasicPutRequest {
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

export interface IAppliedSpeakerEditForm {
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

// --------CFP -------

export interface IAppliedCallForPaperBasicModel {
      briefBiography: string;
      linkedInProfile?: string;
      twitterHandle?: string;
      professionalWebsite?: string;
      previousExperience: string[] | null;
      listOfConferences: string[] | null;
      availabilityDaysTimes?: string; // no in use
      willParticipateInPanel: boolean;
      willParticipateInWorkshop: boolean;
      specialAccommodationNeeds: string;
      additionalRequirements: string;
      confirmPresent: boolean;
      acceptTandC: boolean;
}

export type IAppliedCallForPaperBasicResponse = IAppliedCallForPaperBasicModel;

export interface IAppliedCallForPaperSessionModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      location: IScheduleModel["location"];
      startTime: IScheduleModel["startTime"];
      endTime: IScheduleModel["endTime"];
      approvalStatus: CallForPaperApprovalStatus;
}

export type IAppliedCallForPaperSessionResponse = IAppliedCallForPaperSessionModel[];

export interface IAppliedCallForPaperSessionDetailedModel extends IAppliedCallForPaperSessionModel {
      proposedPaperSessionTitle: string;
      abstractSummary: string;
      keywords: string[] | null;
      primaryFieldCategory: string;
      researchMethodology: string;
      keyObjectives: string[] | null;
      contributions: string[] | null;
      significanceRelevance?: string;
      preferredPresentationFormat: string;
      audioVisualRequirements: string;
      referencesOrCitations: string[] | null;
      fullPaperORExtendedAbstract: IAttachment | null;
}

export interface IAppliedCallForPaperSessionDetailSearch {
      sessionId: IScheduleModel["id"];
}

export type IAppliedCallForPaperSessionDetailedResponse = IAppliedCallForPaperSessionDetailedModel;

export interface IAppliedCallForPaperPutRequest {
      briefBiography: string;
      linkedInProfile?: string;
      twitterHandle?: string;
      professionalWebsite?: string;
      previousExperience: string[];
      listOfConferences: string[];
      availabilityDaysTimes?: string; // no in use
      specialAccommodationNeeds: string;
      additionalRequirements: string;
}

export interface IAppliedCallForPaperEditForm {
      briefBiography: string;
      linkedInProfile?: string;
      twitterHandle?: string;
      professionalWebsite?: string;
      previousExperience: IMultipleInputFields;
      listOfConferences: IMultipleInputFields;
      availabilityDaysTimes?: string; // no in use
      specialAccommodationNeeds: string;
      additionalRequirements: string;
}

export interface IAppliedSpeakerScheduleDeleteReq {
      sessionId: number;
}

export interface IAppliedParticipationScheduleDeleteReq {
      sessionId: number;
}

export interface IAppliedCallForPaperScheduleDeleteReq {
      sessionId: number;
}

export interface IAppliedHistoryModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      location: IScheduleModel["location"];
      startTime: IScheduleModel["startTime"];
      endTime: IScheduleModel["endTime"];
      approvalStatus?: SpeakerApprovalStatus | CallForPaperApprovalStatus;
}
