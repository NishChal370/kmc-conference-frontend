import { IBasicApiResponse } from "@/models/commonModel";
import { IScheduleChoice } from "../schedule/scheduleModel";

export interface IParticipantBasicModel {
      id: number;
      name: string;
      jobTitle: string;
      affiliation: string;
      address: string;
      registrationType: string;
}


export interface IParticipantModel extends IParticipantBasicModel {
      phoneNumber: string;
      email: string;
      sessionChoices: IScheduleChoice[];
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


export interface IParticipantBasicResponse extends IBasicApiResponse {
      participants: IParticipantBasicModel[];
}


export type IParticipantByIdResponse = IParticipantModel;



export interface IParticipantBasicSearch {
      pageNumber: number;
}

export interface IParticipantByIdSearch {
      id: IParticipantBasicModel["id"];
}


export interface IAdminParticipantDeleteRequest {
      id: IParticipantBasicModel["id"];
}


export interface IAdminParticipantViewModal {
      id: IParticipantBasicModel["id"];
}