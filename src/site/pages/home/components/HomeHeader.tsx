// import PageHeader from "@/site/shared/pageHeader/PageHeader";
import ExploreScheduleButton from "@/site/pages/home/components/ExploreScheduleButton";
import EventParticipationButton from "@/site/shared/buttons/EventParticipationButton";
import "../style/homeHeader.css";
import homeVideo from "@/assets/home-video.webm";

function HomeHeader() {
      return (
            <header className="w-full">
                  <div className="relative w-full h-[40rem] sm:h-[40rem] lg:h-[36rem] xl:h-[50rem]">
                        {/* Video Background */}
                        <div className=" flex w-full h-full">
                              <video
                                    src={homeVideo}
                                    autoPlay
                                    // loop
                                    muted
                                    className="w-full  h-full object-cover md:object-fill"
                              ></video>
                        </div>

                        <span className="absolute z-0 bottom-0  left-0 flex justify-center py-16 xl:py-36  w-full h-full">
                              {/* Content */}
                              <article className=" text-default w-full flex flex-col justify-end h-full  bg-green-0 pt-20 gap-10 px-4  lg:w-[80%] max-w-[76rem]">
                                    {/* // */}
                                    {/* <h1
                                          className="text-4xl font-bold w-full
                            lg:w-[78%]
                        "
                                    >
                                          Join Kathmandu&apos;s Premier IT Conference that aims to Power
                                          Government with Tech
                                    </h1> */}

                                    <section
                                          className="flex flex-col justify-start items-center gap-16
                            lg:flex-row lg:gap-32
                        "
                                    >
                                          {/* <span
                                                className="flex flex-col justify-center gap-4 w-full text-lg
                                lg:w-[52%]
                            "
                                          >
                                                <h3>
                                                      Kathmandu Metropolitan City presents a landmark event,
                                                      uniting over 200 tech enthusiasts and industry leaders
                                                </h3>
                                                <h3>
                                                      Mark your calendars for an unparalleled tech gathering
                                                      this Chaitra/ April.
                                                </h3>
                                          </span> */}
                                          <span className="w-full flex justify-center">
                                                <aside
                                                      className=" self-end flex flex-col justify-en  gap-4 font-bold w-full
                                                [&>button]:md:px-20 [&>button]:md:py-4
                                                sm:flex-row 
                                                md:w-fit
                                                lg:self-end 
                                          "
                                                >
                                                      <EventParticipationButton />
                                                      <ExploreScheduleButton />
                                                </aside>
                                          </span>
                                          {/* 
                                          <aside
                                                className=" self-end flex flex-col justify-en  gap-4 font-bold w-full
                                                [&>button]:md:px-20 [&>button]:md:py-4
                                                sm:flex-row 
                                                md:w-fit
                                                lg:self-end 
                                          "
                                          >
                                                <EventParticipationButton />
                                                <ExploreScheduleButton />
                                          </aside> */}
                                    </section>
                              </article>
                        </span>
                  </div>
            </header>
      );
}

export default HomeHeader;
