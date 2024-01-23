import { Fragment } from "react";
import SpeakerCard from "./SpeakerCard";
import SpeakerListWrapper from "../container/SpeakerListWrapper";
import { ISpeakersContentResponse } from "@/admin/model/speaker/speakerContentModel";
import SpeakerDetailContainer from "../container/SpeakerDetailContainer";

interface ISpeakerList {
      speakers: ISpeakersContentResponse;
}
function SpeakerList({ speakers }: ISpeakerList) {
      return (
            <SpeakerListWrapper>
                  {({ handleClick, activeRowIndex, getColumnsCount }) => (
                        <section
                              className="speaker-detail--width  grid grid-cols-1 gap-x-12 gap-y-10 sm:gap-y-20 justify-center items-center place-items-center
                                    sm:grid-cols-2 
                                    lg:grid-cols-3 
                                    xl:grid-cols-4
                              "
                        >
                              {speakers.speakers.map((speaker, index) => (
                                    <Fragment key={speaker.id}>
                                          <SpeakerCard
                                                image={speaker.photo}
                                                name={speaker.name}
                                                affiliation={speaker.affiliation}
                                                jobTitle={speaker.jobTitle}
                                                linkedInProfile={speaker.linkedInProfile}
                                                twitterHandler={speaker.twitterHandler}
                                                professionalWebsite={speaker.professionalWebsite}
                                                clickHandler={handleClick(index)}
                                          />

                                          {/* Check if it's the last item in the row or the last item overall */}
                                          {((index + 1) % getColumnsCount === 0 ||
                                                index === speakers.speakers.length - 1) && (
                                                <div
                                                      className={`col-span-full w-full transition-max-height ${
                                                            Math.floor(index / getColumnsCount) ===
                                                            activeRowIndex
                                                                  ? "max-h-[50rem]"
                                                                  : "max-h-0"
                                                      }`}
                                                >
                                                      {Math.floor(index / getColumnsCount) ===
                                                      activeRowIndex ? (
                                                            <SpeakerDetailContainer speakerId={speaker.id} />
                                                      ) : undefined}
                                                </div>
                                          )}
                                    </Fragment>
                              ))}
                        </section>
                  )}
            </SpeakerListWrapper>
      );
}

export default SpeakerList;
