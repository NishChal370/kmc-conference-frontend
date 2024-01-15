import { IBasicApiResponse } from "@/models/commonModel";
import { IDayThemeModel } from "../dayTheme/dayThemeModel";

export interface IScheduleModel {
      id: number,
      title: string,
      location: string,
      startTime: string,
      endTime: string,
      themeId: IDayThemeModel["id"]
}


export interface ISchedulesResponse extends IBasicApiResponse {
      sessions: IScheduleModel[],
}


export interface IScheduleSearch {
      themeId?: IDayThemeModel["id"]
      pageNumber?: number;
}


export type ISchedulePostRequest = Omit<IScheduleModel, "id">;


export type ISchedulePutRequest = IScheduleModel;


export interface IScheduleDeleteRequest {
      id: IScheduleModel["id"];
}


export type IScheduleForm = ISchedulePostRequest;



export interface IScheduleChoice {
      sessionId: IScheduleModel["id"];
      sessionTitle: IScheduleModel["title"]
}