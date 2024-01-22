import { IBasicApiResponse } from "@/models/commonModel";
import { IScheduleChoice, IScheduleModel } from "../schedule/scheduleModel";

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
      registrationFeePaymentDetails: string; // add it if they asked. now not implemented
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



export interface IParticipantPostRequest {
      address: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      registrationType: string,
      registrationFeePaymentDetails: string,
      specialRequirements: string,
      sessionChoices: IScheduleChoice["sessionId"][],
      trackPreferences: string,
      bio: string,
      linkedInProfile: string,
      twitterHandle: string,
      hotelPreferences: string,
      roommatePreferences: string,
      arrivalDate: string,
      departureDate: string,
      modeOfTransportation: string,
      emergencyContactName: string,
      relationshipWithEmergencyContact: string,
      emergencyContactNumber: string,
      conferenceDiscoverySource: string,
      expectationsGoals: string,
      hasReadPrivacy: boolean,
      consentToPhotography: boolean
}


export type IParticipationAddForm = IParticipantPostRequest;



/**
 * @interface
 * 
 * Represent the add new session of participant.
 */
export interface IParticipationNewSessionPostRequest {
      sessionId: IScheduleChoice["sessionId"];
}


export interface IParticipationPreferenceForm {
      registrationType: string,
      trackPreferences: string,
      specialRequirements: string,
}

export interface IParticipationAccommodationForm {
      arrivalDate: string,
      departureDate: string,
      modeOfTransportation: string,
      hotelPreferences: string,
      roommatePreferences: string,
}

export interface IParticipationContactForm {
      address: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
}

export interface IParticipationEmergencyContactForm {
      emergencyContactName: string,
      relationshipWithEmergencyContact: string,
      emergencyContactNumber: string,
}


export interface IParticipationPersonalProfileForm {
      bio: string,
      linkedInProfile: string,
      twitterHandle: string,
}


export interface IParticipationAdditionalForm {
      conferenceDiscoverySource: string,
      expectationsGoals: string,
      hasReadPrivacy: boolean,
      consentToPhotography: boolean
}




/**
 * used user to participate in session
 */
export interface IParticipationAddModal {
      sessionChoice: IScheduleChoice;
      dayDate: string;
      startTime: IScheduleModel["startTime"]
      endTime: IScheduleModel["endTime"];
      dayLocation: string;
      sessionLocation: IScheduleModel["location"]
}
