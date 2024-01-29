import { IAttachment } from "@/models/file/fileModel";
import { IScheduleChoice } from "../schedule/scheduleModel";
import { IBasicApiResponse } from "@/models/commonModel";


export interface ISpeakerContentModel {
      id: number
      bio: string;
      name: string,
      jobTitle: string,
      photo: IAttachment | null,
      affiliation: string,
      linkedInProfile?: string;
      twitterHandler?: string;
      professionalWebsite?: string;
      sessionDetail: IScheduleChoice[];
}


export interface ISpeakersContentResponse extends IBasicApiResponse {
      speakers: Omit<ISpeakerContentModel, "sessionDetail" | "bio">[];
}


export type ISpeakerContentDetailResponse = Omit<ISpeakerContentModel, "linkedInProfile" | "twitterHandler" | "professionalWebsite">;


export interface ISpeakerContentDetailSearch {
      id: number
}


export interface ISpeakerContentSearch {
      pageNumber: number;
      pageSize?: number;
}