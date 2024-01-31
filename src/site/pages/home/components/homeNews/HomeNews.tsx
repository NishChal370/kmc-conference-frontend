import ViewMoreButton from "@/site/shared/buttons/ViewMoreButton";
import HeaderAnimatedText from "@/template/animation/HeadingAnimatedText";
import HomeNewsCard from "./HomeNewsCard";
import ScaleRaiseUpAnimationWrapper from "@/template/animation/ScaleRaiseUpAnimationWrapper";

function HomeNews() {
      return (
            <section className="home-section--width  flex flex-col items-center justify-center gap-20 w-full h-full">
                  <HeaderAnimatedText
                        el="h1"
                        text="Latest News And Updates"
                        className="font-bold text-4xl uppercase self-start"
                  />

                  <span className="w-fit h-full flex flex-col items-center justify-center gap-10">
                        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 w-fit justify-center">
                              <ScaleRaiseUpAnimationWrapper>
                                    <HomeNewsCard
                                          image="https://liveworx-rebuild.transforms.svdcdn.com/production/blog/Blog-banner-1-w1200q80autoformatfitcropdm1686059386s562fdf771efb70d138955bb40ba0b749.jpg?w=400&h=250&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1701972957&s=a25a17ecfba71132f9341889e029a04b"
                                          date="June 29, 2023"
                                          title="Leverage The Digital Thread For Better Human and Sustainability Outcomes"
                                    />
                              </ScaleRaiseUpAnimationWrapper>

                              <ScaleRaiseUpAnimationWrapper>
                                    <HomeNewsCard
                                          image="https://islington.edu.np/images/blog-images/career-cyber/career_in_cybersecurity.png"
                                          date="June 29, 2023"
                                          title="9 Reasons you should add bill payments to your remittance app"
                                    />
                              </ScaleRaiseUpAnimationWrapper>

                              <ScaleRaiseUpAnimationWrapper>
                                    <HomeNewsCard
                                          image="https://uiuxtrend.com/wp-content/uploads/ray-reyes-3xwrg7Vv6Ts-unsplash.jpg"
                                          date="June 29, 2023"
                                          title="Tangible Strategies for Digital Transformation from Industry Leaders at LiveWorx 2023 Tangible Strategies for Digital Transformation from Industry Leaders at LiveWorx 2023"
                                    />
                              </ScaleRaiseUpAnimationWrapper>

                              <ScaleRaiseUpAnimationWrapper>
                                    <HomeNewsCard
                                          image="https://assets-global.website-files.com/60b74d1fcbe8868f9a0c9d11/65aa317075c31cd2a6c2e422_Global%20Bill%20Payments-p-500.webp"
                                          date="June 29, 2023"
                                          title="Leverage The Digital Thread For Better Human and Sustainability Outcomes"
                                    />
                              </ScaleRaiseUpAnimationWrapper>
                        </section>

                        <ViewMoreButton name="Read more" clickHandler={() => {}} />
                  </span>
            </section>
      );
}

export default HomeNews;
