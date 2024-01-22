import { SPEAKERS_DETAILS } from "../seed.tsx/speakersDetailList";

function SpeakerDetail() {
      return (
            <div
                  className="speaker-detail--width flex flex-col gap-10 justify-center items-center leading-loose
                        md:flex-row md:items-start
                  "
            >
                  <div
                        className="self-start flex flex-col gap-2 justify-start items-start text-start w-full max-w-[20rem] h-[20rem] 
                              sm:w-[26rem] sm:h-fit
                        "
                  >
                        <img
                              loading="lazy"
                              className="w-full h-[20rem] object-cover"
                              src={SPEAKERS_DETAILS.at(0)?.image}
                              alt="speaker"
                        />
                  </div>
                  <article className="flex flex-col gap-6 w-full">
                        <span>
                              <p className="font-bold text-2xl">About {SPEAKERS_DETAILS.at(0)?.name}</p>
                              <p>
                                    {SPEAKERS_DETAILS.at(0)?.designation}; {SPEAKERS_DETAILS.at(0)?.company}
                              </p>
                        </span>
                        <p className=" line-clamp-2 hover:line-clamp-none">
                              {SPEAKERS_DETAILS.at(0)?.description}
                        </p>

                        <dl>
                              <dt className="font-bold">View Angela schedules</dt>
                              <dd className="w-fit cursor-pointer hover:underline">
                                    - Marketing Workshop #1
                              </dd>
                              <dd className="w-fit cursor-pointer hover:underline">
                                    - Marketing Workshop #2
                              </dd>
                              <dd className="w-fit cursor-pointer hover:underline">
                                    - Marketing Workshop #3
                              </dd>
                        </dl>
                  </article>
            </div>
      );
}

export default SpeakerDetail;
