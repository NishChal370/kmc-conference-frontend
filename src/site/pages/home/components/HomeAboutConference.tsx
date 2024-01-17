import { useNavigate } from "react-router-dom";
import ViewMoreButton from "@/site/shared/buttons/ViewMoreButton";
import { ABOUT_US_PATH } from "@/site/constants/routePath";
import HeaderAnimatedText from "@/template/animation/HeadingAnimatedText";

function HomeAboutConference() {
      const navigate = useNavigate();

      return (
            <article className="bg-mute py-24 flex  justify-center text-black">
                  <span
                        className="home-section--width flex flex-col justify-between gap-6
                              md:flex-row
                        "
                  >
                        <HeaderAnimatedText
                              el="h1"
                              text="What is Kathmandu IT Conference?"
                              className="text-4xl font-bold"
                        />

                        <p
                              className="w-full flex flex-col gap-2 leading-loose
                                    md:w-[80%] 
                                    xl:w-[60%]
                              "
                        >
                              <span>
                                    We are an innovative event organization based in Kathmandu, Nepal,
                                    orchestrating premier tech conferences across the region. Our flagship
                                    event, Kathmandu IT Summit, is a convergence point for tech enthusiasts,
                                    industry leaders, and visionaries.
                              </span>
                              <span>
                                    Renowned for hosting the most influential technology conference in the
                                    region, our events have been recognized by leading media outlets. Politico
                                    has described our conferences as &apos;a pivotal tech gathering,&apos; the
                                    Atlantic has remarked that our summit is &apos;a cradle for
                                    tomorrow&apos;s tech innovations,&apos; and the New York Times has noted
                                    our ability to bring together &apos;the tech elite and visionary
                                    leaders.&apos;
                              </span>

                              <ViewMoreButton clickHandler={() => navigate(ABOUT_US_PATH.aboutUs.full)} />
                        </p>
                  </span>
            </article>
      );
}

export default HomeAboutConference;
