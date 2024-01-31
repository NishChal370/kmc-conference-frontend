import { useNavigate } from "react-router-dom";
import AppIcon from "@/shared/icon/AppIcon";
import HeaderAnimatedText from "@/template/animation/HeadingAnimatedText";
import HOME_KNOW_ABOUT_CONFERENCE_DETAIL from "../data/homeKnowAboutConferenceDetail";
import "../style/homeKnowAboutConference.css";

function HomeKnowAboutConference() {
      const navigate = useNavigate();

      const clickHandler = (path: string) => () => {
            navigate(path);
      };

      return (
            <section className="home-section--width  flex flex-col items-center justify-center gap-20 w-full h-full">
                  <HeaderAnimatedText
                        el="h1"
                        text="KNOW ABOUT THE CONFERENCE"
                        className="font-bold text-4xl"
                  />

                  <span className="grid lg:grid-cols-2 gap-14 w-full">
                        {HOME_KNOW_ABOUT_CONFERENCE_DETAIL.map((data) => (
                              <div key={data.id} id={data.id} className="w-full h-[18rem] object-cover flex">
                                    <span className="relative group trapezoid-wrapper cursor-pointer bg-black/70 w-full h-full text-white flex flex-col justify-between">
                                          <div className="trapezoid-top"></div>
                                          <div className="trapezoid-bottom"></div>
                                          <article className="absolute flex flex-col translate-x-[12%] w-[50%] bottom-0 h-[24%] pb-4 group-hover:h-fit  ">
                                                <p className="text-3xl font-semibold">{data.title}</p>
                                                <p className="hidden group-hover:flex">{data.description}</p>

                                                <button
                                                      type="button"
                                                      className="group w-fit hidden group-hover:flex items-center pt-2 font-semibold transition-transform duration-300 ease-in-out hover:gap-2"
                                                      onClick={clickHandler(data.pathName)}
                                                >
                                                      Explore
                                                      <AppIcon name="arrow-right" />
                                                </button>
                                          </article>
                                    </span>
                              </div>
                        ))}
                  </span>
            </section>
      );
}

export default HomeKnowAboutConference;
