import LoginButton from "@/shared-normalUser/buttons/LoginButton";
import PageHeader from "@/shared-normalUser/pageHeader/PageHeader";
import EventParticipationButton from "@/shared-normalUser/buttons/EventParticipationButton";
import "../style/homeHeader.css";

function HomeHeader() {
      return (
            <PageHeader
                  id="home-header"
                  heightClasses="h-[56rem] pt-12 
                        sm:h-[40rem] sm:pt-0 
                        md:h-[32rem] 
                        lg:px-0
                  "
            >
                  <article
                        className="text-white flex flex-col justify-center gap-8
                              lg:w-[80%] max-w-[76rem]
                        "
                  >
                        <h1
                              className="text-4xl font-bold w-full
                                    lg:w-[78%]
                              "
                        >
                              Join Kathmandu&apos;s Premier IT Conference: A Hub for Tech Innovation and
                              Networking
                        </h1>

                        <section
                              className="flex flex-col justify-start items-center gap-16
                                    lg:flex-row lg:gap-32
                              "
                        >
                              <span
                                    className="flex flex-col justify-center gap-4 w-full text-lg
                                          lg:w-[52%]
                                    "
                              >
                                    <h3>
                                          Kathmandu Metropolitan City presents a landmark event, uniting over
                                          70,000 tech enthusiasts and industry leaders
                                    </h3>
                                    <h3>
                                          Mark your calendars for an unparalleled tech gathering at Civil Mall
                                          this January.
                                    </h3>
                              </span>

                              <aside
                                    className="flex flex-col self-end gap-4 font-bold w-full
                                          [&>button]:md:px-20 [&>button]:md:py-4
                                          sm:flex-row 
                                          md:w-fit
                                          lg:self-auto lg:flex-col
                                    "
                              >
                                    <EventParticipationButton />

                                    <LoginButton />
                              </aside>
                        </section>
                  </article>
            </PageHeader>
      );
}

export default HomeHeader;
