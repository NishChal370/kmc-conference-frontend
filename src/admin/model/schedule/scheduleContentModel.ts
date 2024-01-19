import { IAttachment } from "@/models/file/fileModel"
import { ISpeakerBasicModel } from "../speaker/adminSpeakerModel"
import { IScheduleModel } from "./scheduleModel"

export interface IScheduleContentBriefDetailModel {
      id: number,
      title: string,
      startTime: string,
      endTime: string,
      date: string,
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