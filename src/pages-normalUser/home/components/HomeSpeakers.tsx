import { useNavigate } from "react-router-dom";
import HomeSpeakerCard from "./HomeSpeakerCard";
import ViewMoreButton from "@/shared-normalUser/buttons/ViewMoreButton";
import HeaderAnimatedText from "@/template/animation/HeadingAnimatedText";
import { SPEAKER_PATH } from "@/constants/routePath/path-normalUser";

function HomeSpeakers() {
      const navigate = useNavigate();

      return (
            <div className="w-[94%] sm:w-[80%] xl:max-w-[90%] 2xl:w-[60%] text-start flex flex-col justify-center items-center gap-10">
                  <HeaderAnimatedText
                        el="h1"
                        text="Meet our 2028 speakers"
                        className="text-4xl font-bold self-start"
                  />

                  <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20 auto-cols-auto  [&>*]:w-fit text-xl items-center">
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
                              <HomeSpeakerCard
                                    key={index}
                                    img={img}
                                    name={name}
                                    designation={designation}
                                    company={company}
                              />
                        ))}
                  </section>

                  <ViewMoreButton
                        name="view speakers"
                        clickHandler={() => navigate(SPEAKER_PATH.speaker.full)}
                  />
            </div>
      );
}

export default HomeSpeakers;
