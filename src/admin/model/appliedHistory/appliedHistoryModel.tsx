import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";
import { IScheduleModel } from "../schedule/scheduleModel";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";
import { IAttachment } from "@/models/file/fileModel";

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

export interface IAppliedSpeakerModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      location: IScheduleModel["location"];
      startTime: IScheduleModel["startTime"];
      endTime: IScheduleModel["endTime"];
      approvalStatus: SpeakerApprovalStatus;
}

//Speakers

export type IAppliedSpeakerResponse = IAppliedSpeakerModel[];

export interface IAppliedSpeakerDetailedModel extends IAppliedSpeakerModel {
      photo: IAttachment | null;
      affiliation: string;
      approvalStatus: SpeakerApprovalStatus;
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

export interface IAppliedSpeakerDetailSearch {
      sessionId: IScheduleModel["id"];
}

export type IAppliedSpeakerDetailedResponse = IAppliedSpeakerDetailedModel;

//CFP

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
