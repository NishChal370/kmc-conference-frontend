import { useState } from "react";
import ScheduleSpeakerCard from "./ScheduleSpeakerCard";
// import SpeakerDetailModal from "@/site/pages/speakers/components/SpeakerDetailModal";
import { IScheduleContentBriefDetailResponse } from "@/admin/model/schedule/scheduleContentModel";

interface IScheduleSpeakerBanner {
      speakers: IScheduleContentBriefDetailResponse["speakers"];
}
function ScheduleSpeakerBanner({ speakers }: IScheduleSpeakerBanner) {
      const [_, setIsOpen] = useState<boolean>(false);

      return (
            <>
                  <span>
                        <h5>Speakers</h5>

                        {!speakers.length && (
                              <p className="text-error font-medium">Speaker detail Not Found.</p>
                        )}

                        {speakers.length > 0 && (
                              //TODO: do it after filter fetch api is complete.
                              <span className="w-full flex flex-col min-w-full max-w-fit mt-2">
                                    <span className="min-w-full max-w-[10rem] overflow-scroll pb-2">
                                          <section className="flex gap-4 w-full min-w-fit max-w-4xl items-center mt-4">
                                                {speakers.map(({ id, fullName }) => (
                                                      // {speakers.map(({ id, fullName, photo }) => (
                                                      <ScheduleSpeakerCard
                                                            key={id}
                                                            img={"photo"}
                                                            speakerName={fullName}
                                                            designation={"designation"}
                                                            company={"company"}
                                                            openDetailModalHandler={function (): void {
                                                                  setIsOpen(true);
                                                            }}
                                                      />
                                                ))}
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
