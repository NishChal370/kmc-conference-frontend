import LoginButton from "@/shared-normalUser/buttons/LoginButton";
import PageHeader from "@/shared-normalUser/pageHeader/PageHeader";
import EventParticipationButton from "@/shared-normalUser/buttons/EventParticipationButton";
import "../style/homeHeader.css";

function HomeHeader() {
      return (
            <PageHeader
                  id="home-header"
                  heightClasses="h-[54rem] pt-10
                        sm:h-[38rem] sm:pt-24
                        md:h-[38rem]
                        lg:h-[34rem] xl:px-0
                        xl:h-[30rem]
                  "
            >
                  <article className="text-white flex flex-col justify-center gap-8">
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
