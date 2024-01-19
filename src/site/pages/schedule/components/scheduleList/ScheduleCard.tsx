import ScheduleCardTitle from "./ScheduleCardTitle";
import { IScheduleContentDetailModel } from "@/admin/model/schedule/scheduleModel";
import getMonth from "@/utils/dateFormat/getMonth";
import getDateDay from "@/utils/dateFormat/getDateDay";
import SanitizedContent from "@/shared/sanitizedContent/SanitizedContent";
import ScheduleViewMoreButton from "./ScheduleViewMoreButton";
import { IParticipationAddModal } from "@/admin/model/participant/participantModel";

interface IScheduleCard {
      schedule: IScheduleContentDetailModel;
      status?: { status: string }[];
      openParticipationFormHandler: (data: IParticipationAddModal) => () => void;
}

function ScheduleCard({ schedule, status, openParticipationFormHandler }: IScheduleCard) {
      return (
            <div className="flex flex-col gap-10 w-full h-full px-6 py-4 border border-l-2 border-l-primary border-default">
                  <section className="flex justify-between items-start gap-1 w-full h-full">
                        <article className="flex flex-col items-start justify-center gap-y-10 w-full h-full">
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

                              {status ? (
                                    <section className="w-full flex flex-col min-w-[90%] max-w-fit">
                                          <span className="min-w-[90%] max-w-[10rem] md:max-w-[20rem] overflow-scroll no-scrollbar">
                                                <div className="flex gap-1.5 w-full text-xs">
                                                      {status.map(({ status }, index) => (
                                                            <p
                                                                  key={index}
                                                                  className="px-1.5 py-0.5 select-none bg-primary/20 text-primary rounded-sm min-w-fit"
                                                            >
                                                                  {status}
                                                            </p>
                                                      ))}
                                                </div>
                                          </span>
                                    </section>
                              ) : null}
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

                        <span className="flex gap-8 justify-end">
                              <button
                                    type="button"
                                    className="text-sm font-bold text-primary self-end 
                                          hover:text-rose-600 active:underline
                                    "
                              >
                                    Submit Proposal
                              </button>

                              <button
                                    type="button"
                                    className="text-sm font-bold text-primary self-end 
                                          hover:text-rose-600 active:underline
                                    "
                              >
                                    Become a Speaker
                              </button>
                              <button
                                    type="button"
                                    className="text-sm font-bold text-primary self-end 
                                          hover:text-rose-600 active:underline
                                    "
                                    onClick={openParticipationFormHandler({
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
                              >
                                    Reserve my Spot
                              </button>
                        </span>
                  </section>
            </div>
      );
}

export default ScheduleCard;
