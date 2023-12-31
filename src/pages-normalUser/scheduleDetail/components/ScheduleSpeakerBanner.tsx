function ScheduleSpeakerBanner() {
      return (
            <span>
                  <h5>Speakers</h5>

                  <span className="w-full flex flex-col min-w-full max-w-fit mt-2">
                        <span className="min-w-full max-w-[10rem] overflow-scroll pb-2">
                              <section className="flex gap-4 w-full min-w-fit max-w-4xl items-center mt-4">
                                    {[
                                          {
                                                img: "https://web-summit-avenger.imgix.net/production/avatars/original/45b25080a128d67b821094ef524ab226a17185f1.jpeg?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300",
                                                name: "Meredith Whittaker",
                                                designation: "President",
                                                company: "Signal",
                                          },
                                          {
                                                img: "https://web-summit-avenger.imgix.net/production/avatars/original/2d8df68dac81087272afeaf64168d8cdfb3ccfea.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300",
                                                name: "Meredith Whittaker",
                                                designation: "President",
                                                company: "Signal",
                                          },
                                          {
                                                img: "https://web-summit-avenger.imgix.net/production/avatars/original/0013e063074834266fb0d2186bf283cf4541df45.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300",
                                                name: "Meredith Whittaker",
                                                designation: "President",
                                                company: "Signal",
                                          },
                                          {
                                                img: "https://web-summit-avenger.imgix.net/production/avatars/original/0013e063074834266fb0d2186bf283cf4541df45.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300",
                                                name: "Meredith Whittaker",
                                                designation: "President",
                                                company: "Signal",
                                          },
                                          {
                                                img: "https://web-summit-avenger.imgix.net/production/avatars/original/45b25080a128d67b821094ef524ab226a17185f1.jpeg?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300",
                                                name: "Meredith Whittaker",
                                                designation: "President",
                                                company: "Signal",
                                          },
                                          {
                                                img: "https://web-summit-avenger.imgix.net/production/avatars/original/2d8df68dac81087272afeaf64168d8cdfb3ccfea.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300",
                                                name: "Meredith Whittaker",
                                                designation: "President",
                                                company: "Signal",
                                          },
                                          {
                                                img: "https://web-summit-avenger.imgix.net/production/avatars/original/0013e063074834266fb0d2186bf283cf4541df45.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300",
                                                name: "Meredith Whittaker",
                                                designation: "President",
                                                company: "Signal",
                                          },
                                    ].map(({ img, name, designation, company }, index) => (
                                          <div
                                                className="w-36 h-44 border border-default flex flex-col items-center justify-center text-center text-xs gap-6 py-4 rounded-md"
                                                key={index}
                                          >
                                                <img
                                                      className=" w-20 h-20 rounded-full hover:grayscale"
                                                      src={img}
                                                      alt="speaker-img"
                                                />

                                                <article>
                                                      <p className="font-semibold leading-relaxed">{name}</p>
                                                      <p>
                                                            {designation}; {company}
                                                      </p>
                                                </article>
                                          </div>
                                    ))}
                              </section>
                        </span>
                  </span>
            </span>
      );
}

export default ScheduleSpeakerBanner;
