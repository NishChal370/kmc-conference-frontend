import { IScheduleContentBriefDetailModel } from "@/admin/model/schedule/scheduleContentModel";
import ScheduleCardStatusBadge from "@/site/pages/schedule/components/scheduleList/ScheduleCardStatusBadge";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";

interface IScheduleArticleHeader {
      scheduleDetail: IScheduleContentBriefDetailModel;
}
function ScheduleArticleHeader({ scheduleDetail }: IScheduleArticleHeader) {
      return (
            <>
                  <span className="w-full flex !gap-0 !leading-3 h-fit">
                        <h3 className="text-lg font-semibold">
                              {changeDateFormat(scheduleDetail.date, "medium")}
                        </h3>
                        <h1 className="text-4xl font-bold">{scheduleDetail.title}</h1>

                        <ScheduleCardStatusBadge
                              isParticipant={scheduleDetail.isUserParticipant}
                              speakerApproval={scheduleDetail.userSpeakerApproval}
                              callForPaperApproval={scheduleDetail.userCallApproval}
                        />
                  </span>

                  <span className="lg:!hidden">
                        <h5>Date and time</h5>
                        <p>
                              {changeDateFormat(scheduleDetail.date, "medium")} . {scheduleDetail.startTime} -{" "}
                              {scheduleDetail.endTime}
                        </p>
                  </span>

                  <span className="lg:!hidden">
                        <h5>Location</h5>
                        <p>{scheduleDetail.venueInfo.location}</p>
                        <p>
                              {scheduleDetail.venueInfo.venueCity}, {scheduleDetail.venueInfo.venueState}
                        </p>
                  </span>

                  <span className="lg:!hidden">
                        <h5>Parking</h5>
                        <p>{scheduleDetail.venueInfo.parkingInfo}</p>
                        <p>{scheduleDetail.venueInfo.parkingLocation}</p>
                  </span>

                  <span className="lg:!hidden">
                        <h5>Accommodation</h5>
                        <p>{scheduleDetail.venueInfo.hotelInfo}</p>
                        <p>{scheduleDetail.venueInfo.hotelLocation}</p>
                  </span>
            </>
      );
}

export default ScheduleArticleHeader;
