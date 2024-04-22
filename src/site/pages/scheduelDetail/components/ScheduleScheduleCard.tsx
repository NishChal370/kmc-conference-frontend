import { ICON } from "@/constants/icon";
import AppIcon from "@/shared/icon/AppIcon";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";
import { IScheduleContentBriefDetailModel } from "@/admin/model/schedule/scheduleContentModel";
import ScheduleMaps from "./ScheduleMaps";

interface IScheduleScheduleCard {
      scheduleDetail: IScheduleContentBriefDetailModel;
}

function ScheduleScheduleCard({ scheduleDetail }: IScheduleScheduleCard) {
      return (
            <aside className="hidden lg:flex flex-col gap-6 min-w-[22rem] w-[22rem] max-w-[22rem]">
                  <div
                        className="flex flex-col gap-6 border border-default rounded-md w-full px-5 py-5 text-sm leading-relaxed
                              [&>span]:flex [&>span]:items-start [&>span]:gap-2 [&>span]:w-full
                              [&>span>svg]:text-gray-400
                        "
                  >
                        <span title="Date & Time">
                              <AppIcon name="clock" size={ICON.size + 10} />
                              <p className="text-base">
                                    {changeDateFormat(scheduleDetail.date, "long")} at{" "}
                                    {scheduleDetail.startTime} to{scheduleDetail.endTime}
                              </p>
                        </span>

                        <span title="Location">
                              <AppIcon name="location" size={ICON.size + 4} />
                              <article>
                                    <p className="font-semibold">
                                          {scheduleDetail.venueInfo.location}; {scheduleDetail.location}
                                    </p>
                                    <p>
                                          {scheduleDetail.venueInfo.venueCity},{" "}
                                          {scheduleDetail.venueInfo.venueState}
                                    </p>
                              </article>
                        </span>

                        <span title="Parking">
                              <AppIcon name="parking" size={ICON.size + 4} />
                              <article>
                                    <p className="font-semibold">{scheduleDetail.venueInfo.parkingInfo}</p>
                                    <p>{scheduleDetail.venueInfo.parkingLocation}</p>
                              </article>
                        </span>

                        <span title="Accommodation">
                              <AppIcon name="accommodation" size={ICON.size + 4} />
                              <article>
                                    <p className="font-semibold">{scheduleDetail.venueInfo.hotelInfo}</p>
                                    <p>{scheduleDetail.venueInfo.hotelLocation}</p>
                              </article>
                        </span>
                  </div>

                  <ScheduleMaps
                        locationCode={scheduleDetail.venueInfo.locationPlusCode}
                        accommodationCode={scheduleDetail.venueInfo.hotelPlusCode}
                        parkingCode={scheduleDetail.venueInfo.parkingPlusCode}
                  />
            </aside>
      );
}

export default ScheduleScheduleCard;
