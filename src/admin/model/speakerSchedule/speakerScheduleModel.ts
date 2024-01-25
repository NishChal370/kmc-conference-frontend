import { IScheduleModel } from "../schedule/scheduleModel";
import { ISpeakerBasicModel } from "../speaker/speakerModel";
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";

export interface ISpeakerScheduleBasicModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      approvalStatus: SpeakerApprovalStatus;
}




export type ISpeakerScheduleBasicResponse = ISpeakerScheduleBasicModel[];



export interface ISpeakerScheduleBasicSearch {
      speakerId: ISpeakerBasicModel["id"]
}