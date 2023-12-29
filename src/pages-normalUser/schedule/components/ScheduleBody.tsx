import ScheduleDayFilter from "./ScheduleDayFilter";

function ScheduleBody() {
      return (
            <div
                  className="flex flex-col justify-center items-start gap-10 w-full px-6 
                        sm:flex-row
                        xl:px-0 xl:w-[84%]
                        2xl:w-3/5 2xl:max-w-7xl
                  "
            >
                  <ScheduleDayFilter />

                  <section className="flex flex-col justify-start items-start gap-16 w-full h-full">
                        <div className="flex flex-col gap-4 w-full h-full px-6 py-4 border border-l-2 border-l-primary border-default ">
                              <section className="flex justify-between items-start w-full h-full">
                                    <article className="flex flex-col items-start justify-center gap-1 w-full h-full">
                                          <h1 className="text-xl font-bold">Marketing Workshop #1</h1>
                                          <span
                                                className="flex flex-col gap-2
                                                      sm:flex-row sm:gap-4
                                                "
                                          >
                                                <p className="text-sm">16:00 -19:00</p>
                                                <p className="text-sm">The British College, Kathmandu</p>
                                          </span>
                                    </article>

                                    <span className="flex flex-col items-center text-sm">
                                          <h5 className="text-3xl font-semibold text-primary">26</h5>
                                          <h6 className="font-semibold text-primary">JANUARY</h6>
                                    </span>
                              </section>

                              <section className="flex flex-col items-start gap-0.5">
                                    <p className="text-sm">
                                          This is the article.this is the article. this is the article. this
                                          is the article.this is the article.this is the article.this is the
                                          article.this is the article.this is the article.this is the
                                          article.this is the article.this is the article....
                                    </p>
                              </section>

                              <section></section>

                              <section className="flex gap-3">
                                    <img
                                          className="w-12 h-12 object-cover rounded-md"
                                          src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                          alt=""
                                    />
                                    <img
                                          className="w-12 h-12 object-cover rounded-md"
                                          src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                          alt=""
                                    />
                                    <img
                                          className="w-12 h-12 object-cover rounded-md"
                                          src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                          alt=""
                                    />
                                    <div className="w-12 h-12 flex items-center justify-center rounded-md font-bold text-white bg-primary">
                                          <p>+10</p>
                                    </div>
                              </section>
                              <button type="button" className="text-sm font-bold text-primary self-end">
                                    Mark my place
                              </button>
                        </div>
                        <div className="flex flex-col gap-4 w-full h-full px-6 py-4 border border-l-2 border-l-primary border-default ">
                              <section className="flex justify-between items-start w-full h-full">
                                    <article className="flex flex-col items-start justify-center gap-1 w-full h-full">
                                          <h1 className="text-xl font-bold">Marketing Workshop #2</h1>
                                          <span
                                                className="flex flex-col gap-4
                                                      sm:flex-row
                                                "
                                          >
                                                <p className="text-sm">16:00 -19:00</p>
                                                <p className="text-sm">The British College, Kathmandu</p>
                                          </span>

                                          <section className="w-full flex flex-col min-w-[80%] max-w-fit mt-2">
                                                <span className="min-w-[80%] max-w-[10rem] overflow-scroll no-scrollbar">
                                                      <div className="flex gap-1.5 w-full text-xs">
                                                            {[
                                                                  { status: "Registration closed" },
                                                                  { status: "i don't know" },
                                                                  { status: "i don't know" },
                                                                  { status: "i don't know" },
                                                                  { status: "i don't know" },
                                                            ].map(({ status }, index) => (
                                                                  <p
                                                                        key={index}
                                                                        className="px-1.5 py-0.5 select-none bg-primary/20 text-primary rounded-sm min-w-fit"
                                                                  >
                                                                        {status}
                                                                  </p>
                                                            ))}
                                                      </div>
                                                </span>
                                          </section>
                                    </article>

                                    <span className="flex flex-col items-center text-sm">
                                          <h5 className="text-3xl font-semibold text-primary">26</h5>
                                          <h6 className="font-semibold text-primary">JANUARY</h6>
                                    </span>
                              </section>

                              <section>
                                    <p className="text-sm">
                                          This is the article.this is the article. this is the article. this
                                          is the article.this is the article.this is the article.this is the
                                          article.this is the article.this is the article.this is the
                                          article.this is the article.this is the article....
                                    </p>
                              </section>

                              <section className="flex gap-3">
                                    <img
                                          className="w-12 h-12 object-cover rounded-md"
                                          src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                          alt=""
                                    />
                                    <img
                                          className="w-12 h-12 object-cover rounded-md"
                                          src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                          alt=""
                                    />
                                    <img
                                          className="w-12 h-12 object-cover rounded-md"
                                          src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                          alt=""
                                    />
                                    <div className="w-12 h-12 flex items-center justify-center rounded-md font-bold text-white bg-primary">
                                          <p>+10</p>
                                    </div>
                              </section>
                              <button type="button" className="text-sm font-bold text-primary self-end">
                                    Mark my place
                              </button>
                        </div>
                        <div className="flex flex-col gap-4 w-full h-full px-6 py-4 border border-l-2 border-l-primary border-default ">
                              <section className="flex justify-between items-start w-full h-full">
                                    <article className="flex flex-col items-start justify-center gap-1 w-full h-full">
                                          <h1 className="text-xl font-bold">Marketing Workshop #3</h1>
                                          <span
                                                className="flex flex-col gap-2
                                                      sm:flex-row sm:gap-4
                                                "
                                          >
                                                <p className="text-sm">16:00 -19:00</p>
                                                <p className="text-sm">The British College, Kathmandu</p>
                                          </span>
                                    </article>

                                    <span className="flex flex-col items-center text-sm">
                                          <h5 className="text-3xl font-semibold text-primary">26</h5>
                                          <h6 className="font-semibold text-primary">JANUARY</h6>
                                    </span>
                              </section>

                              <section>
                                    <p className="text-sm">
                                          This is the article.this is the article. this is the article. this
                                          is the article.this is the article.this is the article.this is the
                                          article.this is the article.this is the article.this is the
                                          article.this is the article.this is the article....
                                    </p>
                              </section>

                              <section className="flex gap-3">
                                    <img
                                          className="w-12 h-12 object-cover rounded-md"
                                          src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                          alt=""
                                    />
                                    <img
                                          className="w-12 h-12 object-cover rounded-md"
                                          src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                          alt=""
                                    />
                                    <img
                                          className="w-12 h-12 object-cover rounded-md"
                                          src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                          alt=""
                                    />
                                    <div className="w-12 h-12 flex items-center justify-center rounded-md font-bold text-white bg-primary">
                                          <p>+10</p>
                                    </div>
                              </section>

                              <button type="button" className="text-sm font-bold text-primary self-end">
                                    Mark my place
                              </button>
                        </div>
                        <div className="flex flex-col gap-4 w-full h-full px-6 py-4 border border-l-2 border-l-primary border-default ">
                              <section className="flex justify-between items-start w-full h-full">
                                    <article className="flex flex-col items-start justify-center gap-1 w-full h-full">
                                          <h1 className="text-xl font-bold">Marketing Workshop #4</h1>
                                          <span
                                                className="flex flex-col gap-2
                                                      sm:flex-row sm:gap-4
                                                "
                                          >
                                                <p className="text-sm">16:00 -19:00</p>
                                                <p className="text-sm">The British College, Kathmandu</p>
                                          </span>
                                    </article>

                                    <span className="flex flex-col items-center text-sm">
                                          <h5 className="text-3xl font-semibold text-primary">26</h5>
                                          <h6 className="font-semibold text-primary">JANUARY</h6>
                                    </span>
                              </section>

                              <section>
                                    <p className="text-sm">
                                          This is the article.this is the article. this is the article. this
                                          is the article.this is the article.this is the article.this is the
                                          article.this is the article.this is the article.this is the
                                          article.this is the article.this is the article....
                                    </p>
                              </section>

                              <section className="flex gap-3">
                                    <img
                                          className="w-12 h-12 object-cover rounded-md"
                                          src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                          alt=""
                                    />
                                    <img
                                          className="w-12 h-12 object-cover rounded-md"
                                          src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                          alt=""
                                    />
                                    <img
                                          className="w-12 h-12 object-cover rounded-md"
                                          src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                          alt=""
                                    />
                                    <div className="w-12 h-12 flex items-center justify-center rounded-md font-bold text-white bg-primary">
                                          <p>+10</p>
                                    </div>
                              </section>

                              <button type="button" className="text-sm font-bold text-primary self-end">
                                    Mark my place
                              </button>
                        </div>
                  </section>
            </div>
      );
}

export default ScheduleBody;
