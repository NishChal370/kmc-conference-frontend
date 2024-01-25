import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScheduleSpeakerCard from "./ScheduleSpeakerCard";
// import SpeakerDetailModal from "@/site/pages/speakers/components/SpeakerDetailModal";
import { SPEAKER_PATH } from "@/site/constants/routePath";
import { IScheduleContentBriefDetailResponse } from "@/admin/model/schedule/scheduleContentModel";

interface IScheduleSpeakerBanner {
      speakers: IScheduleContentBriefDetailResponse["speakers"];
}
function ScheduleSpeakerBanner({ speakers }: IScheduleSpeakerBanner) {
      const navigate = useNavigate();
      const [_, setIsOpen] = useState<boolean>(false);

      const navigateToSpeakerPage = () => {
            navigate(SPEAKER_PATH.speaker.full);
      };

      return (
            <>
                  <span>
                        <h5 className="hover:underline cursor-pointer" onClick={navigateToSpeakerPage}>
                              Speakers
                        </h5>

                        {!speakers.length && (
                              <p className="text-error font-medium">Speaker detail Not Found.</p>
                        )}

                        {speakers.length > 0 && (
                              <span className="w-full flex flex-col min-w-full max-w-fit mt-2">
                                    <span className="min-w-full max-w-[10rem] overflow-scroll pb-2">
                                          <section className="flex gap-4 w-full min-w-fit max-w-4xl items-center mt-4">
                                                {speakers.map(
                                                      ({ id, fullName, photo, jobTitle, affiliation }) => (
                                                            <ScheduleSpeakerCard
                                                                  key={id}
                                                                  img={photo}
                                                                  speakerName={fullName}
                                                                  jobTitle={jobTitle}
                                                                  affiliation={affiliation}
                                                                  openDetailModalHandler={function (): void {
                                                                        setIsOpen(true);
                                                                  }}
                                                            />
                                                      )
                                                )}
                                          </section>
                                    </span>
                              </span>
                        )}
                  </span>

                  {/* //TODO: DO it by fetching API */}
                  {/* {isOpen && <SpeakerDetailModal closeModal={() => setIsOpen(false)} />} */}
            </>
      );
}

export default ScheduleSpeakerBanner;
