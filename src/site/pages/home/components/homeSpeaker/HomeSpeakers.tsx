import { useNavigate } from "react-router-dom";
import HomeSpeakerCard from "./HomeSpeakerCard";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import ViewMoreButton from "@/site/shared/buttons/ViewMoreButton";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import HeaderAnimatedText from "@/template/animation/HeadingAnimatedText";
import { Status } from "@/enum/commonEnum";
import { SPEAKER_PATH } from "@/site/constants/routePath";
import { IApiErrorDetail } from "@/models/commonModel";
import { ISpeakersContentResponse } from "@/admin/model/speaker/speakerContentModel";

interface IHomeSpeakers {
      status: Status;
      speakers: ISpeakersContentResponse;
      error: IApiErrorDetail | undefined;
}

function HomeSpeakers({ speakers, status, error }: IHomeSpeakers) {
      const navigate = useNavigate();

      return (
            <div className="home-section--width text-start flex flex-col justify-center items-center gap-20">
                  <HeaderAnimatedText
                        el="h1"
                        text="Meet our 2080 speakers"
                        className="text-4xl font-bold self-start uppercase"
                  />

                  <span className="flex flex-col w-full items-center sm:items-start h-full gap-1">
                        <section
                              className="grid place-items-center w-fit h-fit gap-x-12 gap-y-20 auto-cols-auto text-xl items-center
                                    sm:grid-cols-2 
                                    lg:grid-cols-3 
                                    xl:grid-cols-3
                              "
                        >
                              {speakers.speakers.map(({ id, name, jobTitle, affiliation, photo }) => (
                                    <HomeSpeakerCard
                                          key={id}
                                          photo={photo}
                                          name={name}
                                          jobTitle={jobTitle}
                                          affiliation={affiliation}
                                    />
                              ))}
                              <span
                                    className="w-full h-fit 
                                          sm:col-span-2 
                                          lg:col-span-3 
                                          xl:col-span-3
                                    "
                              >
                                    {status === Status.FAILED ? (
                                          <ErrorMessage
                                                title={error?.title}
                                                detail={error?.detail}
                                                needTopPadding={false}
                                                traceId={error?.traceId}
                                          />
                                    ) : undefined}

                                    {status === Status.LOADING ? <LoadingMessage /> : undefined}

                                    {status === Status.DATA_NOT_FOUND ? (
                                          <NotFoundMessage needTopPadding={false} />
                                    ) : undefined}
                              </span>
                        </section>

                        {status !== Status.LOADING ? (
                              <ViewMoreButton
                                    name="view speakers"
                                    clickHandler={() => navigate(SPEAKER_PATH.speaker.full)}
                              />
                        ) : undefined}
                  </span>
            </div>
      );
}

export default HomeSpeakers;
