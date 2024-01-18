import { IBasicApiResponse } from "@/models/commonModel";
import { IDayThemeModel } from "../dayTheme/dayThemeModel";
import { IConferenceDayModel } from "../conferenceDay/conferenceDayModel";
import { IScheduleTopicModel } from "../scheduleTopic/scheduleTopicModel";
import { IAttachment } from "@/models/file/fileModel";

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
      title: IScheduleModel["title"]
}





export interface IScheduleContentDetailModel {
      themeId: IDayThemeModel["id"],
      sessionId: IScheduleModel["id"],
      dayId: IConferenceDayModel["id"],
      sessionTitle: string,
      sessionStart: string,
      sessionEnd: string,
      sessionLocation: string,
      dayLocation: string,
      dayDate: string,
      sessionTopics: {
            id: IScheduleTopicModel["id"]
            title: IScheduleTopicModel["title"],
            description: IScheduleTopicModel["description"],
      }[],

      speakers: {
            id: 0,
            fullName: string,
            photo: IAttachment
      }[]
}


export type IScheduleContentDetailResponse = IScheduleContentDetailModel[];

export interface IScheduleContentDetailSearch {
      themeId: IDayThemeModel['id']
}