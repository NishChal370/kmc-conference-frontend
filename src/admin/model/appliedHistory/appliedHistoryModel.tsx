import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";
import { IScheduleModel } from "../schedule/scheduleModel";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";

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

export type IAppliedSpeakerResponse = IAppliedSpeakerModel[];

export interface IAppliedCallForPaperModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      location: IScheduleModel["location"];
      startTime: IScheduleModel["startTime"];
      endTime: IScheduleModel["endTime"];
      approvalStatus: CallForPaperApprovalStatus;
}

export type IAppliedCallForPaperResponse = IAppliedCallForPaperModel[];

export interface IAppliedHistoryModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      location: IScheduleModel["location"];
      startTime: IScheduleModel["startTime"];
      endTime: IScheduleModel["endTime"];
      approvalStatus?: SpeakerApprovalStatus | CallForPaperApprovalStatus;
}
