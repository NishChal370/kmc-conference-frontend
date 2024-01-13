import { IBasicApiResponse } from '@/models/commonModel';
import { IConferenceDayDate } from "../conferenceDay/conferenceDayModel"

export interface IDayThemeModel {
      id: number,
      title: string,
      day: IConferenceDayDate;
      plenarySession: {
            title: string,
            description: string,
            startTime: string,
            endTime: string,
      }
}



export interface IDayThemeMinModel {
      id: number,
      title: string,
      day: IConferenceDayDate;
}


export type IDayThemeMinResponse = IDayThemeMinModel[];


export interface IDayThemeResponse extends IBasicApiResponse {
      themes: IDayThemeModel[];
}


export interface IDayThemeSearch {
      dayId?: IConferenceDayDate["dayId"]
      pageNumber?: number;
}


export interface IDayThemePostRequest extends Omit<IDayThemeModel, "id" | "day"> {
      dayId: IDayThemeModel["day"]["dayId"];
};

export interface IDayThemePutRequest extends Omit<IDayThemeModel, "day"> {
      dayId: IDayThemeModel["day"]["dayId"];
};



export interface IDayThemeDeleteRequest {
      id: IDayThemeModel["id"];
}



export interface IDayThemeAddOrEditForm {
      title: string,
      day: IConferenceDayDate,
      plenaryTitle: string,
      plenaryDescription: string,
      plenaryStartTime: string,
      plenaryEndTime: string,
}