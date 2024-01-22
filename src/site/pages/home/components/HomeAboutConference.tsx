import { useNavigate } from "react-router-dom";
import ViewMoreButton from "@/site/shared/buttons/ViewMoreButton";
import { ABOUT_US_PATH } from "@/site/constants/routePath";
import HeaderAnimatedText from "@/template/animation/HeadingAnimatedText";
import { ABOUT_CONFERENCE } from "../../aboutUs/data/aboutConference";

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
                              className="w-full flex flex-col gap-2 leading-loose text-justify
                                    md:w-[80%] 
                                    xl:w-[60%]
                              "
                        >
                              {ABOUT_CONFERENCE}

                              <ViewMoreButton clickHandler={() => navigate(ABOUT_US_PATH.aboutUs.full)} />
                        </p>
                  </span>
            </article>
      );
}

export default HomeAboutConference;
