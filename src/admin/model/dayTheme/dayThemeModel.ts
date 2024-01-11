import { IBasicApiResponse } from '@/models/commonModel';
import { IConferenceDayModel } from "../conferenceDay/conferenceDayModel"

export interface IDayThemeModel {
      id: number,
      title: string,
      date: string;
      dayId: IConferenceDayModel["id"],
      plenarySession: {
            title: string,
            description: string,
            startTime: string,
            endTime: string,
      }
}


export interface IDayThemeResponse extends IBasicApiResponse {
      themes: IDayThemeModel[];
}


export interface IDayThemeSearch {
      dayId?: IDayThemeModel["id"]
      pageNumber?: number;
}


export type IDayThemePostRequest = Omit<IDayThemeModel, "id" | "date">;

export type IDayThemePutRequest = Omit<IDayThemeModel, "date">;



export interface IDayThemeDeleteRequest {
      id: IDayThemeModel["id"];
}



export interface IDayThemeAddOrEditForm {
      title: string,
      plenaryTitle: string,
      plenaryDescription: string,
      plenaryStartTime: string,
      plenaryEndTime: string,
}