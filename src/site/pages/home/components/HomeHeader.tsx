import heroVideo from "@/assets/video/hero-video.mp4";
import ExploreScheduleButton from "./ExploreScheduleButton";
import HeaderAnimatedText from "@/template/animation/HeadingAnimatedText";
import ScaleRaiseUpAnimationWrapper from "@/template/animation/ScaleRaiseUpAnimationWrapper";
import "../style/homeHeader.css";

function HomeHeader() {
      return (
            <header
                  className="relative flex w-full px-0
                        h-[40rem]
                        lg:h-[36rem]
                        xl:h-[50rem]
                        [@media(min-width:2088px)]:h-[60rem]
                  "
            >
                  <video
                        src={heroVideo}
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="absolute top-0 left-0 w-full h-full min-w-full min-h-full object-cover"
                  >
                        Your browser does not support the video tag.
                  </video>

                  <span className="header absolute flex flex-col justify-center items-start w-full  px-4 h-full [&>*:first-child]:lg:w-[70%] [&>*:first-child]:max-w-[76rem]">
                        <ScaleRaiseUpAnimationWrapper>
                              <article className="translate-y-40 sm:translate-y-32 xl:translate-y-40 3xl:translate-y-32 lg:translate-x-48 text-white font-bold text-2xl sm:text-5xl flex flex-col items-start justify-center gap-10">
                                    <span className="drop-shadow-2xl">
                                          <HeaderAnimatedText
                                                el="h1"
                                                className="uppercase leading-snug "
                                                animation={{
                                                      hidden: {
                                                            opacity: 0,
                                                            transition: {
                                                                  delay: 1,
                                                            },
                                                      },
                                                      visible: {
                                                            opacity: 1,
                                                            transition: {
                                                                  duration: 1,
                                                            },
                                                      },
                                                }}
                                                repeatDelay={20}
                                                text="JOIN Premium Kathmandu"
                                          />
                                          <HeaderAnimatedText
                                                el="h1"
                                                animation={{
                                                      hidden: {
                                                            opacity: 0,
                                                            transition: {
                                                                  delay: 1,
                                                            },
                                                      },
                                                      visible: {
                                                            opacity: 1,
                                                            transition: {
                                                                  duration: 1,
                                                            },
                                                      },
                                                }}
                                                repeatDelay={20}
                                                className="uppercase"
                                                text="IT Conference"
                                          />
                                          <HeaderAnimatedText
                                                el="h1"
                                                animation={{
                                                      hidden: {
                                                            opacity: 0,
                                                            transition: {
                                                                  delay: 1,
                                                            },
                                                      },
                                                      visible: {
                                                            opacity: 1,
                                                            transition: {
                                                                  duration: 1,
                                                            },
                                                      },
                                                }}
                                                repeatDelay={20}
                                                className=" text-sm  w-[80%] pt-4 font-semibold
                                                      sm:text-base
                                                "
                                                text="Mark your calendars for an unparalleled tech gathering at Civil Mall this April."
                                          />
                                    </span>

                                    <ExploreScheduleButton />
                              </article>
                        </ScaleRaiseUpAnimationWrapper>
                  </span>
            </header>
      );
}

export default HomeHeader;
