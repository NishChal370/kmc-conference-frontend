import { IAttachment } from "@/models/file/fileModel"
import { ISpeakerBasicModel } from "../speaker/adminSpeakerModel"
import { IScheduleModel } from "./scheduleModel"
import { IDayThemeModel } from "../dayTheme/dayThemeModel"
import { IConferenceDayModel } from "../conferenceDay/conferenceDayModel"
import { IScheduleTopicModel } from "../scheduleTopic/scheduleTopicModel"
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum"
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum"





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
            venueState: string
      },
      speakers: [
            {
                  id: ISpeakerBasicModel["id"],
                  fullName: ISpeakerBasicModel["name"],
                  photo: IAttachment
            }
      ]
}



export type IScheduleContentBriefDetailResponse = IScheduleContentBriefDetailModel;



export interface IScheduleContentBriefDetailSearch {
      sessionId: IScheduleModel["id"]
}