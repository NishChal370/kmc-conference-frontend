import ScheduleCardTitle from "./ScheduleCardTitle";

interface IScheduleCard {
      status?: { status: string }[];
}

function ScheduleCard({ status }: IScheduleCard) {
      return (
            <div className="flex flex-col gap-10 w-full h-full px-6 py-4 border border-l-2 border-l-primary border-default">
                  <section className="flex justify-between items-start gap-1 w-full h-full">
                        <article className="flex flex-col items-start justify-center gap-y-10 w-full h-full">
                              <section className="flex flex-col gap-y-2 w-full h-full">
                                    <ScheduleCardTitle title="Marketing Workshop #2" />

                                    <span
                                          className="flex flex-col gap-2
                                                md:flex-row md:gap-4
                                          "
                                    >
                                          <p className="text-sm">16:00 -19:00</p>
                                          <p className="text-sm">The British College, Kathmandu</p>
                                    </span>
                              </section>

                              {status ? (
                                    <section className="w-full flex flex-col min-w-[90%] max-w-fit">
                                          <span className="min-w-[90%] max-w-[10rem] md:max-w-[20rem] overflow-scroll no-scrollbar">
                                                <div className="flex gap-1.5 w-full text-xs">
                                                      {status.map(({ status }, index) => (
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
                              ) : null}
                        </article>

                        <span className="flex flex-col items-center text-sm w-fit">
                              <h5 className="text-3xl font-semibold text-primary">26</h5>
                              <h6 className="font-semibold text-primary">JANUARY</h6>
                        </span>
                  </section>

                  <section>
                        <p className="text-sm line-clamp-2">
                              Manaslu circuit trek is a 2 weeks long tea house mode trek around the mount
                              Manaslu scaling 8163m above sea level. You will get the highest elevation gain
                              of 5105m at the Larke Pass. Since this is also one of the restricted regions you
                              will need a group of at least two people to obtain the trekking permit. The 177
                              Km long trail follows an ancient salt trading route along the Budhi Gandaki
                              river. On this trek, you will see 10 peaks over 6500m and a few over 7000m
                              including the eighteenth-highest Himalchuli with an elevation of 7,893m. The
                              major attractions of the area are high glacial lakes, Gurung villages, and rich
                              biodiversity. Manaslu circuit trek starts by taking a jeep drive to Machha Khola
                              in Gorkha district. From there the trail leads through the villages inhabited
                              mostly by the Gurung communities. Through the misty alpine meadows accompanied
                              by several river streams, you will cross the Larke Pass and descend to Bhimtang
                              in the Marsyangdi valley. From Bhimtang you will follow an easy trekking trail
                              to Dharmashala where you will catch a jeep drive back to Kathmandu.
                        </p>
                  </section>

                  <section className="flex flex-col gap-4 w-full h-full">
                        <div
                              className="flex gap-3
                                    [&>*]:w-12 [&>*]:h-12 [&>img]:object-cover [&>img]:rounded-md
                              "
                        >
                              <img
                                    src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                    alt="speaker"
                              />
                              <img
                                    src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                    alt="speaker"
                              />
                              <img
                                    src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                    alt="speaker"
                              />
                              <div className="flex items-center justify-center rounded-md font-bold text-white bg-primary">
                                    <p>+10</p>
                              </div>
                        </div>

                        <button type="button" className="text-sm font-bold text-primary self-end">
                              Mark my place
                        </button>
                  </section>
            </div>
      );
}

export default ScheduleCard;
