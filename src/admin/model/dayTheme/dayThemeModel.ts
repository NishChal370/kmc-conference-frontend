import { IBasicApiResponse } from '@/models/commonModel';
import { IConferenceDayModel } from "../conferenceDay/conferenceDayModel"

export interface IDayThemeModel {
      "id": number,
      "title": string,
      "dayId": IConferenceDayModel["id"],
      "plenarySession": {
            "title": string,
            "description": string,
            "startTime": string,
            "endTime": string,
      }
}


export interface IDayThemeResponse extends IBasicApiResponse {
      themes: IDayThemeModel[];
}


export interface IDayThemeSearch {
      dayId?: IDayThemeModel["id"]
      pageNumber?: number;
}