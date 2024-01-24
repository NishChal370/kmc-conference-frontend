import { IAttachment } from "@/models/file/fileModel";
import { IScheduleChoice } from "../schedule/scheduleModel";


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


export interface ISpeakersContentResponse {
      speakers: Omit<ISpeakerContentModel, "sessionDetail" | "bio">[];
}


export type ISpeakerContentDetailResponse = Omit<ISpeakerContentModel, "linkedInProfile" | "twitterHandler" | "professionalWebsite">;


export interface ISpeakerContentDetailSearch {
      id: number
}