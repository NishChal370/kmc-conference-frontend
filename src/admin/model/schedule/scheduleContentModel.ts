import { IAttachment } from "@/models/file/fileModel"
import { ISpeakerBasicModel } from "../speaker/speakerModel"
import { IScheduleModel } from "./scheduleModel"
import { IDayThemeModel } from "../dayTheme/dayThemeModel"
import { IConferenceDayModel } from "../conferenceDay/conferenceDayModel"
import { IScheduleTopicModel } from "../scheduleTopic/scheduleTopicModel"
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum"
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum"
import { IPreviouslyAppliedHistory } from "../appliedHistory/appliedHistoryModel"



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
      }[],
      isUserParticipant?: boolean,
      userSpeakerApproval?: SpeakerApprovalStatus,
      userCallApproval?: CallForPaperApprovalStatus
}


export interface IScheduleContentDetailPrivateResponse {
      hasAddedPreviously?: IPreviouslyAppliedHistory;
      themeContents: IScheduleContentDetailModel[];
}

export type IScheduleContentDetailResponse = IScheduleContentDetailModel[];


export interface IScheduleContentDetailSearch {
      themeId: IDayThemeModel['id']
}

export interface IScheduleContentBriefDetailModel {
      id: number,
      title: string,
      startTime: string,
      endTime: string,
      date: string,
      location: string,
      sessionTopics:
      {
            id: number,
            title: string
      }[],
      venueInfo: {
            parkingInfo: string,
            parkingLocation: string,
            hotelInfo: string
            hotelLocation: string,
            location: string,
            venueCity: string,
            venueState: string,
            parkingPlusCode: string | null,
            hotelPlusCode: string | null,
            locationPlusCode: string | null,

      },
      speakers: [
            {
                  id: ISpeakerBasicModel["id"],
                  fullName: ISpeakerBasicModel["name"],
                  photo: IAttachment | null;
                  jobTitle: string,
                  affiliation: string,
            }
      ],
      isUserParticipant?: boolean,
      userSpeakerApproval?: SpeakerApprovalStatus,
      userCallApproval?: CallForPaperApprovalStatus
}



export type IScheduleContentBriefDetailResponse = IScheduleContentBriefDetailModel;



export interface IScheduleContentBriefDetailSearch {
      sessionId: IScheduleModel["id"]
}


export interface IScheduleContentBriefDetailPrivateResponse {
      hasAddedPreviously?: IPreviouslyAppliedHistory;
      sessionContent: IScheduleContentBriefDetailModel;
}
