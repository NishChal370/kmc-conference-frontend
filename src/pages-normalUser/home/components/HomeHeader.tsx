import "../style/homeHeader.css";

function HomeHeader() {
      return (
            <header id="home-header" className="w-full flex flex-col justify-center items-center">
                  <span
                        className="flex flex-col justify-center items-center bg-black/90 w-full h-[56rem] px-4 pt-12
                              sm:h-[40rem] sm:pt-0
                              md:h-[34rem]
                              lg:px-0 lg:h-[31rem]
                        "
                  >
                        <article
                              className="text-white flex flex-col justify-center gap-8
                                    lg:w-[80%]
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
                                                Kathmandu Metropolitan City presents a landmark event, uniting
                                                over 70,000 tech enthusiasts and industry leaders
                                          </h3>
                                          <h3>
                                                Mark your calendars for an unparalleled tech gathering at
                                                Civil Mall this January.
                                          </h3>
                                    </span>

                                    <aside
                                          className="flex flex-col self-end gap-4 font-bold
                                                sm:flex-row 
                                                lg:self-auto lg:flex-col
                                          "
                                    >
                                          <button type="button" className="bg-red px-20 py-4 rounded-md">
                                                BE PART OF THE CONFERENCE
                                          </button>
                                          <button
                                                type="button"
                                                className=" text-white px-20 py-4 border border-white rounded-md
                                                      active:border-red active:text-red
                                                "
                                          >
                                                LOGIN
                                          </button>
                                    </aside>
                              </section>
                        </article>
                  </span>
            </header>
      );
}

export default HomeHeader;
