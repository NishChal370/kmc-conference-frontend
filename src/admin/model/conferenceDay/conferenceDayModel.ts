import { IBasicApiResponse, IBasicSearchParam } from "@/models/commonModel"

export interface IConferenceDayModel {
      id: number,
      description?: string,
      date: string,
      venueInfo: {
            parkingInfo: string,
            parkingLocation: string,
            parkingPlusCode: string,
            hotelInfo: string,
            hotelLocation: string,
            hotelPlusCode: string,
            location: string,
            venueCity: string,
            venueState: string
            locationPlusCode: string,
      }
}


export interface IConferenceDayResponse extends IBasicApiResponse {
      days: IConferenceDayModel[];
}


export type IConferenceDaySearch = IBasicSearchParam;


export interface IConferenceDayForm {
      description?: string,
      date: string,
      parkingInfo: string,
      parkingLocation: string,
      parkingPlusCode: string,
      hotelInfo: string,
      hotelLocation: string,
      hotelPlusCode: string,
      location: string,
      locationPlusCode: string,
      venueCity: string,
      venueState: string
}


export type IConferenceDayPutRequest = IConferenceDayModel;

export type IConferenceDayPostRequest = Omit<IConferenceDayModel, "id">;


export interface IConferenceDayDeleteRequest {
      id: IConferenceDayModel["id"];
}


export interface IConferenceDayDate {
      dayId: number;
      date: string;
}

export type IConferenceDayBasicInfoResponse = IConferenceDayDate[];