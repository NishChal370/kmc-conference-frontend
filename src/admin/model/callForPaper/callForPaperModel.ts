import { IBasicApiResponse } from '@/models/commonModel';

export interface ICallForPaperBasicModel {
      id: number,
      name: string,
      email: string,
      jobTitle?: string,
      affiliation?: string,
}

export interface ICallForPaperDetailModel extends ICallForPaperBasicModel {
      phoneNumber: string;
      briefBiography: string;
      linkedInProfile?: string;
      twitterHandle?: string;
      professionalWebsite?: string;
      previousExperience: string[] | null;
      listOfConferences: string[] | null;
      availabilityDaysTimes?: string; // no in use
      willParticipateInPanel: boolean;
      willParticipateInWorkshop: boolean;
      specialAccommodationNeeds?: string;
      additionalRequirements?: string;
      confirmPresent: boolean;
      acceptTandC: boolean;
}


export interface ICallForPaperBasicResponse extends IBasicApiResponse {
      calls: ICallForPaperBasicModel[];
}


export interface ICallForPaperBasicSearch {
      pageNumber: number;
}


export type ICallForPaperByIdResponse = ICallForPaperDetailModel;


export interface ICallForPaperByIdSearch {
      id: ICallForPaperBasicModel["id"];
}


export interface IAdminCallForPaperViewModal {
      id: ICallForPaperBasicModel["id"]
}



export interface IAdminCallForPaperDeleteRequest {
      callId: ICallForPaperBasicModel["id"];
}