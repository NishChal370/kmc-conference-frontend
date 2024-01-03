import { useNavigate } from "react-router-dom";
import HomeSpeakerCard from "./HomeSpeakerCard";
import ViewMoreButton from "@/shared-normalUser/buttons/ViewMoreButton";
import HeaderAnimatedText from "@/template/animation/HeadingAnimatedText";
import { SPEAKER_PATH } from "@/constants/routePath/path-normalUser";
import { SPEAKERS_DETAILS } from "@/pages-normalUser/speakers/seed.tsx/speakersDetailList";

function HomeSpeakers() {
      const navigate = useNavigate();

      return (
            <div className="home-section--width text-start flex flex-col justify-center items-center gap-10">
                  <HeaderAnimatedText
                        el="h1"
                        text="Meet our 2080 speakers"
                        className="text-4xl font-bold self-start"
                  />

                  <section
                        className="grid place-items-center w-full h-full gap-x-12 gap-y-20 auto-cols-auto text-xl items-center
                              sm:grid-cols-2 
                              lg:grid-cols-3 
                              xl:grid-cols-4
                              [&>*]:w-fit 
                        "
                  >
                        {SPEAKERS_DETAILS.map(({ image, name, designation, company }, index) => (
                              <HomeSpeakerCard
                                    key={index}
                                    img={image}
                                    name={name}
                                    designation={designation}
                                    company={company}
                              />
                        ))}
                  </section>

                  <ViewMoreButton
                        name="view speakers"
                        clickHandler={() => navigate(SPEAKER_PATH.speaker.full)}
                  />
            </div>
      );
}

export default HomeSpeakers;
