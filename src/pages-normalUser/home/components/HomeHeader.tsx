import "../style/homeHeader.css";

function HomeHeader() {
      return (
            <header id="home-header" className="w-full h-[50vh] flex flex-col justify-center items-center">
                  <span className=" flex flex-col justify-center items-center bg-black/90 w-full h-full">
                        <article className=" text-white w-[60%] flex flex-col justify-center gap-8">
                              <h1 className="text-4xl font-bold w-[78%]">
                                    Join Kathmandu&apos;s Premier IT Conference: A Hub for Tech Innovation and
                                    Networking
                              </h1>

                              <section className="flex justify-start items-center gap-32">
                                    <span className="flex flex-col justify-center gap-4 w-[52%] text-lg">
                                          <h3>
                                                Kathmandu Metropolitan City presents a landmark event, uniting
                                                over 70,000 tech enthusiasts and industry leaders
                                          </h3>
                                          <h3>
                                                Mark your calendars for an unparalleled tech gathering at
                                                Civil Mall this January.
                                          </h3>
                                    </span>

                                    <aside className="flex flex-col gap-4 font-bold">
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
