import ScheduleCardTitle from "./ScheduleCardTitle";
import ScheduleViewMoreButton from "./ScheduleViewMoreButton";
import ScheduleCardStatusBadge from "./ScheduleCardStatusBadge";
import ScheduleCardActionButton from "./ScheduleCardActionButton";
import SanitizedContent from "@/shared/sanitizedContent/SanitizedContent";
import getMonth from "@/utils/dateFormat/getMonth";
import getDateDay from "@/utils/dateFormat/getDateDay";
import { IParticipationAddModal } from "@/admin/model/participant/participantModel";
import { ISpeakerAddModal } from "@/admin/model/speaker/adminSpeakerModel";
import { IScheduleContentDetailModel } from "@/admin/model/schedule/scheduleContentModel";

interface IScheduleCard {
      schedule: IScheduleContentDetailModel;
      openSpeakerFormHandler: (data: ISpeakerAddModal) => () => void;
      openParticipationFormHandler: (data: IParticipationAddModal) => () => void;
}

function ScheduleCard({ schedule, openSpeakerFormHandler, openParticipationFormHandler }: IScheduleCard) {
      return (
            <div className="flex flex-col gap-10 w-full h-full px-6 py-4 border border-l-2 border-l-primary border-default">
                  <section className="flex justify-between items-start gap-1 w-full h-full">
                        <article className="flex flex-col items-start justify-center gap-y-4 w-full h-full">
                              <section className="flex flex-col gap-y-2 w-full h-full">
                                    <ScheduleCardTitle
                                          scheduleId={schedule.sessionId}
                                          title={schedule.sessionTitle}
                                    />

                                    <span
                                          className="flex flex-col gap-2
                                                sm:flex-row
                                                md:flex-col
                                                lg:flex-row md:gap-2
                                          "
                                    >
                                          <p className="text-sm">
                                                {schedule.sessionStart} -{schedule.sessionEnd}
                                          </p>
                                          <span className="flex gap-2">
                                                <p className="text-sm">
                                                      {schedule.dayLocation}, {schedule.sessionLocation}
                                                </p>
                                          </span>
                                    </span>
                              </section>

                              <ScheduleCardStatusBadge
                                    isParticipant={schedule.isUserParticipant}
                                    speakerApproval={schedule.userSpeakerApproval}
                                    callForPaperApproval={schedule.userCallApproval}
                              />
                        </article>

                        <span className="flex flex-col items-center text-sm w-fit">
                              <h5 className="text-3xl font-semibold text-primary">
                                    {getDateDay(schedule.dayDate)}
                              </h5>

                              <h6 className="font-semibold text-primary uppercase">
                                    {getMonth(schedule.dayDate)}
                              </h6>
                        </span>
                  </section>

                  <section className="flex flex-col gap-6 w-full h-fit">
                        {schedule.sessionTopics.map((topic, index) => (
                              <div key={topic.id} className="flex flex-col gap-1 w-full h-fit">
                                    <p className="text-sm font-semibold text-gray-900">{topic.title}</p>
                                    <SanitizedContent htmlContent={topic.description} truncate />

                                    {index + 1 === schedule.sessionTopics.length && (
                                          <ScheduleViewMoreButton scheduleId={schedule.sessionId} />
                                    )}
                              </div>
                        ))}
                  </section>

                  <section className="flex flex-col gap-4 w-full h-full">
                        <div
                              className="flex gap-3
                                    [&>*]:w-12 [&>*]:h-12 [&>img]:object-cover [&>img]:rounded-md
                              "
                        >
                              <img
                                    src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                    alt="speaker"
                              />
                              <img
                                    src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                    alt="speaker"
                              />
                              <img
                                    src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                    alt="speaker"
                              />
                              <div className="flex items-center justify-center rounded-md font-bold text-white bg-primary">
                                    <p>+10</p>
                              </div>
                        </div>

                        <ScheduleCardActionButton
                              isParticipant={schedule.isUserParticipant}
                              isSpeaker={!!schedule.userSpeakerApproval?.toString()}
                              isCallForPaper={!!schedule.userCallApproval?.toString()}
                              participationHandler={openParticipationFormHandler({
                                    sessionChoice: {
                                          sessionId: schedule.sessionId,
                                          title: schedule.sessionTitle,
                                    },
                                    dayDate: schedule.dayDate,
                                    startTime: schedule.sessionStart,
                                    endTime: schedule.sessionEnd,
                                    dayLocation: schedule.dayLocation,
                                    sessionLocation: schedule.sessionLocation,
                              })}
                              speakerButtonHandler={openSpeakerFormHandler({
                                    sessionChoice: {
                                          sessionId: schedule.sessionId,
                                          title: schedule.sessionTitle,
                                    },
                                    dayDate: schedule.dayDate,
                                    startTime: schedule.sessionStart,
                                    endTime: schedule.sessionEnd,
                                    dayLocation: schedule.dayLocation,
                                    sessionLocation: schedule.sessionLocation,
                              })}
                              callForPaperButtonHandler={function (): void {
                                    throw new Error("Function not implemented.");
                              }}
                        />
                  </section>
            </div>
      );
}

export default ScheduleCard;
