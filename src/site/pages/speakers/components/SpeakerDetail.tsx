import ServerImage from "@/shared/serverImage/ServerImage";
import { IScheduleChoice } from "@/admin/model/schedule/scheduleModel";
import { ISpeakerContentDetailResponse } from "@/admin/model/speaker/speakerContentModel";

interface ISpeakerDetail {
      speaker: ISpeakerContentDetailResponse;
      navigateToSessionDetail: (sessionId: IScheduleChoice["sessionId"]) => () => void;
}
function SpeakerDetail({ speaker, navigateToSessionDetail }: ISpeakerDetail) {
      return (
            <div
                  className="speaker-detail--width flex flex-col gap-10 justify-center items-center leading-loose
                        md:flex-row md:items-start
                  "
            >
                  <div
                        className="hidden self-start md:flex flex-col gap-2 justify-start items-start text-start w-full max-w-[20rem] h-[20rem] 
                              sm:w-[26rem] sm:h-fit
                        "
                  >
                        <ServerImage
                              className="w-full h-[20rem] object-cover"
                              image={speaker.photo}
                              alt="speaker"
                        />
                  </div>

                  <article className="flex flex-col gap-6 w-full">
                        <span>
                              <p className="font-bold text-2xl">About {speaker?.name}</p>
                              <p>
                                    {speaker?.jobTitle}; {speaker?.affiliation}
                              </p>
                        </span>
                        <p className="line-clamp-2 hover:line-clamp-none cursor-pointer">{speaker?.bio}</p>

                        <dl>
                              <dt className="font-bold">View {speaker?.name} sessions</dt>
                              {speaker?.sessionDetail.map(({ sessionId, title }) => (
                                    <dd
                                          key={sessionId}
                                          className="w-fit cursor-pointer hover:underline"
                                          onClick={navigateToSessionDetail(sessionId)}
                                    >
                                          - {title}
                                    </dd>
                              ))}
                        </dl>
                  </article>
            </div>
      );
}

export default SpeakerDetail;
