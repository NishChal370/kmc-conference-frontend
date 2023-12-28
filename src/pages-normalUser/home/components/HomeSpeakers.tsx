function HomeSpeakers() {
      return (
            <div className="w-[94%] sm:w-[80%] xl:max-w-[90%] 2xl:w-[60%] text-start flex flex-col justify-center items-center gap-8 ">
                  <h2 className="text-3xl font-extrabold self-start tracking-wide px-4 font-secondary">
                        Meet our 2024 speakers
                  </h2>

                  <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-cols-auto  [&>*]:w-fit text-xl items-center">
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
                                    img: "https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300",
                                    name: "Meredith Whittaker",
                                    designation: "President",
                                    company: "Signal",
                              },
                              {
                                    img: "https://web-summit-avenger.imgix.net/production/avatars/original/6e4a10c482240e5e7b7fcc5b27db64688f8ea51d.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300",
                                    name: "Meredith Whittaker",
                                    designation: "President",
                                    company: "Signal",
                              },
                              {
                                    img: "https://web-summit-avenger.imgix.net/production/avatars/original/ca38c4c1fb1be5db2f370ae0110d0cb75cb2bdd9.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300",
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
                              {
                                    img: "https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300",
                                    name: "Meredith Whittaker",
                                    designation: "President",
                                    company: "Signal",
                              },
                              {
                                    img: "https://web-summit-avenger.imgix.net/production/avatars/original/6e4a10c482240e5e7b7fcc5b27db64688f8ea51d.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300",
                                    name: "Meredith Whittaker",
                                    designation: "President",
                                    company: "Signal",
                              },
                        ].map(({ img, name, designation, company }, index) => (
                              <div className="relative w-56 h-fit" key={index}>
                                    <img className="w-full h-full hover:grayscale" src={img} alt="" />
                                    <article className=" absolute bottom-0 leading-5 text-white font-semibold text-base [&>*]:text-shadow px-7 py-3">
                                          <p>{name}</p>
                                          <p>{designation}</p>
                                          <p>{company}</p>
                                    </article>
                              </div>
                        ))}
                  </section>
            </div>
      );
}

export default HomeSpeakers;
