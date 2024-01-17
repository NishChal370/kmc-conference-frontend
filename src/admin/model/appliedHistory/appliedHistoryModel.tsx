import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";
import { IScheduleModel } from "../schedule/scheduleModel";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";

export interface IAppliedParticipationModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      location: IScheduleModel["location"];
      startTime: IScheduleModel["startTime"];
      endTime: IScheduleModel["endTime"];
}

export type IAppliedParticipationResponse = IAppliedParticipationModel[];

export interface IAppliedSpeakerModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      location: IScheduleModel["location"];
      startTime: IScheduleModel["startTime"];
      endTime: IScheduleModel["endTime"];
      approvalStatus: SpeakerApprovalStatus;
}

export type IAppliedSpeakerResponse = IAppliedSpeakerModel[];

export interface IAppliedCallForPaperModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      location: IScheduleModel["location"];
      startTime: IScheduleModel["startTime"];
      endTime: IScheduleModel["endTime"];
      approvalStatus: CallForPaperApprovalStatus;
}

export type IAppliedCallForPaperResponse = IAppliedCallForPaperModel[];

export interface IAppliedHistoryModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      location: IScheduleModel["location"];
      startTime: IScheduleModel["startTime"];
      endTime: IScheduleModel["endTime"];
      approvalStatus?: SpeakerApprovalStatus | CallForPaperApprovalStatus;
}
