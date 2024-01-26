import { IAttachment } from "@/models/file/fileModel";
import { IScheduleModel } from "../schedule/scheduleModel";
import { ICallForPaperBasicModel } from "../callForPaper/callForPaperModel";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";


export interface ICallForPaperScheduleModel {
      sessionId: IScheduleModel["id"];
      callForPaperId: ICallForPaperBasicModel["id"];
      abstractSummary: string;
      keywords: string[] | null;
      proposedPaperSessionTitle: string,
      primaryFieldCategory: string,
      researchMethodology: string,
      keyObjectives: string[] | null,
      contributions: string[] | null,
      significanceRelevance: string,
      preferredPresentationFormat: string,
      audioVisualRequirements: string,
      fullPaperOrExtendedAbstract: IAttachment | null,
      referencesOrCitations: string[] | null,
      title: string,
      location: string,
      approvalStatus: CallForPaperApprovalStatus
}


export type ICallForPaperScheduleResponse = ICallForPaperScheduleModel[];


export interface ICallForPaperScheduleSearch {
      callId: ICallForPaperBasicModel["id"];
}


export type ICallForPaperScheduleViewModal = ICallForPaperScheduleModel;




export interface ICallForPaperScheduleApprovalStatusChangeReq {
      callId: ICallForPaperScheduleModel["callForPaperId"];
      sessionId: ICallForPaperScheduleModel["sessionId"];
      approvalStatus: CallForPaperApprovalStatus,
}



export interface ICallForPaperScheduleApprovalStatusChangeModal {
      callId: ICallForPaperScheduleModel["callForPaperId"];
      sessionId: ICallForPaperScheduleModel["sessionId"];
      callForPaperName: ICallForPaperBasicModel["name"];
      sessionTitle: ICallForPaperScheduleModel["title"];
      approvalStatus: CallForPaperApprovalStatus;
}


export interface ICallForPaperDeleteRequest {
      callId: ICallForPaperScheduleModel["callForPaperId"];
      sessionId: ICallForPaperScheduleModel["sessionId"];
}