import { IBasicApiResponse } from "@/models/commonModel";
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";

export interface ISpeakerBasicInfo {
      id: number,
      name: string,
      photo: string,
      jobTitle: string,
      affiliation: string,
      approvalStatus: SpeakerApprovalStatus,
}


export interface ISpeakerBasicInfoResponse extends IBasicApiResponse {
      speakers: ISpeakerBasicInfo[]
}