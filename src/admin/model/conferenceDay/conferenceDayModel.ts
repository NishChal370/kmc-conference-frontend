import { IBasicApiResponse } from "@/models/commonModel"

export interface IConferenceDayModel {
      id: number,
      description: string,
      date: string,
      venueInfo: {
            parkingInfo: string,
            parkingLocation: string,
            hotelInfo: string,
            hotelLocation: string,
            location: string,
            venueCity: string,
            venueState: string
      }
}


export interface IConferenceDayResponse extends IBasicApiResponse {
      days: IConferenceDayModel[];
}


export interface IConferenceDaySearch {
      pageNumber?: number;
}


export interface IConferenceDayForm {
      description: string,
      date: string,
      parkingInfo: string,
      parkingLocation: string,
      hotelInfo: string,
      hotelLocation: string,
      location: string,
      venueCity: string,
      venueState: string
}


export type IConferenceDayPutRequest = IConferenceDayModel;