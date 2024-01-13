import { IBasicApiResponse } from "@/models/commonModel";


export interface IScheduleTopicModel {
      id: number,
      sessionId: number,
      title: string,
      description: string,
      kmcHighlights: string,
      keyNote: string,
      internationalCases: string,
      workshop: string
}


export interface IScheduleTopicsResponse extends IBasicApiResponse {
      sessionTopics: IScheduleTopicModel[];
}

export type IScheduleTopicPostRequest = Omit<IScheduleTopicModel, "id">;


export type IScheduleTopicPutRequest = IScheduleTopicModel;


export interface IScheduleTopicDeleteRequest {
      id: IScheduleTopicModel["id"]
}


export interface IScheduleTopicsSearch {
      sessionId: IScheduleTopicModel["id"]
      pageNumber?: number;
}


export type IScheduleTopicForm = IScheduleTopicModel;