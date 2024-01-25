import { IScheduleModel } from "../schedule/scheduleModel";
import { ISpeakerBasicModel, ISpeakerDetailModel } from "../speaker/speakerModel";
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



export interface ISpeakerScheduleApprovalStatusChangeReq {
      speakerId: ISpeakerDetailModel["id"];
      sessionId: ISpeakerScheduleBasicModel["sessionId"];
      approvalStatus: ISpeakerScheduleBasicModel["approvalStatus"];
}



export interface ISpeakerScheduleApprovalStatusChangeModal {
      id: ISpeakerDetailModel["id"],
      speakerName: ISpeakerDetailModel["name"];
      sessionId: ISpeakerScheduleBasicModel["sessionId"];
      sessionTitle: ISpeakerScheduleBasicModel["title"];
      approvalStatus: ISpeakerScheduleBasicModel["approvalStatus"],
}


