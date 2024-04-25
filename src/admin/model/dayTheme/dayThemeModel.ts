import { IBasicApiResponse, IBasicSearchParam } from '@/models/commonModel';
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


export interface IDayThemeMinSearch {
      dayId?: IDayThemeMinModel["day"]["dayId"];
}


export interface IDayThemeResponse extends IBasicApiResponse {
      themes: IDayThemeModel[];
}


export interface IDayThemeSearch extends IBasicSearchParam {
      dayId?: IConferenceDayDate["dayId"]
}




export type IDayThemeByIdResponse = Omit<IDayThemeModel, "day">;


export interface IDayThemeByIdSearch {
      id: IDayThemeModel["id"];
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