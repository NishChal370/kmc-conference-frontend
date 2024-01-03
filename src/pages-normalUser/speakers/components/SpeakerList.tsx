import { SPEAKERS_DETAILS } from "../seed.tsx/speakersDetailList";

function SpeakerList() {
      return (
            <section
                  className="speaker-detail--width  grid grid-cols-1 gap-x-12 gap-y-20 justify-center items-center place-items-center
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        xl:grid-cols-4
                  "
            >
                  {SPEAKERS_DETAILS.map(({ image, name, company, designation }, index) => (
                        <div
                              key={index}
                              className="w-full h-full flex flex-col gap-2.5 text-center justify-center items-center
                                    [&>article>h4]:font-bold
                              "
                        >
                              <img
                                    className=" w-72 h-72 min-w-[18rem] min-h-[18rem] object-cover  hover:grayscale
                                          xl:w-64 xl:h-64 xl:min-w-[256px] xl:min-h-[256px]
                                          2xl:w-72 2xl:h-72 2xl:min-w-[18rem] 2xl:min-h-[18rem] 
                                    "
                                    src={image}
                                    alt="speaker"
                              />
                              <article className="flex flex-col gap-0.5  w-full h-full [&>p]:leading-4 text-base">
                                    <h4>{name}</h4>
                                    <p>{designation}</p>
                                    <p>{company}</p>
                              </article>
                        </div>
                  ))}
            </section>
      );
}

export default SpeakerList;
