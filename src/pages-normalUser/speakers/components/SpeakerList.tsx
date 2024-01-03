import { SPEAKERS_DETAILS } from "../seed.tsx/speakersDetailList";

function SpeakerList() {
      return (
            <section
                  className="grid grid-cols-1 gap-x-12 gap-y-24 justify-center items-center place-items-center w-fit h-full
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        xl:grid-cols-4
                  "
            >
                  {SPEAKERS_DETAILS.map(({ image, name, company, designation }, index) => (
                        <div
                              key={index}
                              className="w-56 h-fit flex flex-col gap-2.5 text-center
                                    [&>article>h4]:font-bold
                              "
                        >
                              <img className="w-56 h-56  object-cover" src={image} alt="speaker" />
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
