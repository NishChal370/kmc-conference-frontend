import { useState } from "react";
import ScheduleSpeakerCard from "./ScheduleSpeakerCard";
import SpeakerDetailModal from "@/pages-normalUser/speakers/components/SpeakerDetailModal";
import { SCHEDULE_SPEAKER_DETAILS } from "../seed/speakersDetail";

function ScheduleSpeakerBanner() {
      const [isOpen, setIsOpen] = useState<boolean>(false);

      return (
            <>
                  <span>
                        <h5>Speakers</h5>

                        <span className="w-full flex flex-col min-w-full max-w-fit mt-2">
                              <span className="min-w-full max-w-[10rem] overflow-scroll pb-2">
                                    <section className="flex gap-4 w-full min-w-fit max-w-4xl items-center mt-4">
                                          {SCHEDULE_SPEAKER_DETAILS.map(
                                                ({ img, name, designation, company }, index) => (
                                                      <ScheduleSpeakerCard
                                                            key={index}
                                                            img={img}
                                                            speakerName={name}
                                                            designation={designation}
                                                            company={company}
                                                            openDetailModalHandler={function (): void {
                                                                  setIsOpen(true);
                                                            }}
                                                      />
                                                )
                                          )}
                                    </section>
                              </span>
                        </span>
                  </span>

                  {isOpen && <SpeakerDetailModal closeModal={() => setIsOpen(false)} />}
            </>
      );
}

export default ScheduleSpeakerBanner;
