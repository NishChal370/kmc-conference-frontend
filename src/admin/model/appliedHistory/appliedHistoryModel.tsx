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

export type IAppliedSpeakerResponse = IAppliedSpeakerSessionModel[];

export interface IAppliedSpeakerDetailedModel extends IAppliedSpeakerSessionModel {
      avRequirements?: string;
      sessionProposal: IAttachment | null;
      preferredSessionLengthMinutes?: number;
}

export interface IAppliedSpeakerDetailSearch {
      sessionId: IScheduleModel["id"];
}

export type IAppliedSpeakerDetailedResponse = IAppliedSpeakerDetailedModel;

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

export interface IAppliedCallForPaperModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      location: IScheduleModel["location"];
      startTime: IScheduleModel["startTime"];
      endTime: IScheduleModel["endTime"];
      approvalStatus: CallForPaperApprovalStatus;
}

export type IAppliedCallForPaperResponse = IAppliedCallForPaperModel[];

export interface IAppliedCallForPaperDetailedModel extends IAppliedCallForPaperModel {
      proposedPaperSessionTitle: string;
      briefBiography: string;
      linkedInProfile?: string;
      twitterHandle?: string;
      professionalWebsite?: string;
      abstractSummary: string;
      keywords: string[] | null;
      primaryFieldCategory: string;
      researchMethodology: string;
      keyObjectives: string[] | null;
      contributions: string[] | null;
      significanceRelevance?: string;
      preferredPresentationFormat: string;
      audioVisualRequirements: string;
      previousExperience: string[] | null;
      listOfConferences: string[] | null;
      referencesOrCitations: string[] | null;
      availabilityDaysTimes?: string; // no in use
      willParticipateInPanel: boolean;
      willParticipateInWorkshop: boolean;
      specialAccommodationNeeds: string;
      additionalRequirements: string;
      confirmPresent: boolean;
      acceptTandC: boolean;
      fullPaperORExtendedAbstract: IAttachment | null;
}

export interface IAppliedCallForPaperDetailSearch {
      sessionId: IScheduleModel["id"];
}

export type IAppliedCallForPaperDetailedResponse = IAppliedCallForPaperDetailedModel;

export interface IAppliedHistoryModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      location: IScheduleModel["location"];
      startTime: IScheduleModel["startTime"];
      endTime: IScheduleModel["endTime"];
      approvalStatus?: SpeakerApprovalStatus | CallForPaperApprovalStatus;
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
