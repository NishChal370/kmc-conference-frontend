import { IAttachment } from "@/models/file/fileModel";
import { IScheduleModel } from "../schedule/scheduleModel";
import { ISpeakerBasicModel, ISpeakerDetailModel } from "../speaker/speakerModel";
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";

export interface ISpeakerScheduleModel {
      sessionId: IScheduleModel["id"];
      title: IScheduleModel["title"];
      approvalStatus: SpeakerApprovalStatus;
      preferredSessionLengthMinutes: number,
      avRequirements?: number,
      sessionProposal: IAttachment | null,
}




export type ISpeakerScheduleResponse = ISpeakerScheduleModel[];



export interface ISpeakerScheduleSearch {
      speakerId: ISpeakerBasicModel["id"]
}



export interface ISpeakerScheduleApprovalStatusChangeReq {
      speakerId: ISpeakerDetailModel["id"];
      sessionId: ISpeakerScheduleModel["sessionId"];
      approvalStatus: ISpeakerScheduleModel["approvalStatus"];
}



export interface ISpeakerScheduleApprovalStatusChangeModal {
      id: ISpeakerDetailModel["id"],
      speakerName: ISpeakerDetailModel["name"];
      sessionId: ISpeakerScheduleModel["sessionId"];
      sessionTitle: ISpeakerScheduleModel["title"];
      approvalStatus: ISpeakerScheduleModel["approvalStatus"];
}




export interface ISpeakerScheduleDeleteAdminReq {
      speakerId: ISpeakerScheduleModel["sessionId"];
      sessionId: ISpeakerBasicModel["id"];
}


export type ISpeakerScheduleViewModal = ISpeakerScheduleModel;