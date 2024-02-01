import NewsCard from "@/site/pages/news/components/NewsCard";
import ViewMoreButton from "@/site/shared/buttons/ViewMoreButton";
import HeaderAnimatedText from "@/template/animation/HeadingAnimatedText";
import ScaleRaiseUpAnimationWrapper from "@/template/animation/ScaleRaiseUpAnimationWrapper";

function HomeNews() {
      return (
            <div className="home-section--width  flex flex-col items-start justify-center gap-20 w-full h-full">
                  <HeaderAnimatedText
                        el="h1"
                        text="Latest News And Updates"
                        className="font-bold text-4xl uppercase self-start"
                  />

                  <span className="w-fit h-full flex flex-col items-center justify-center gap-10">
                        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 w-fit h-full justify-center">
                              <ScaleRaiseUpAnimationWrapper>
                                    <NewsCard
                                          containerClassName="flex flex-col gap-4 h-fit
                                                w-72 min-w-[18rem]
                                                xl:w-[20rem] xl:min-w-[20rem] 
                                                2xl:w-[24rem] 2xl:min-w-[24rem] 
                                          "
                                          imageClassName=" w-full  h-72  min-h-[18rem] object-cover  hover:grayscale
                                                xl:h-[20rem] xl:min-h-[20rem]
                                                2xl:h-[24rem] 2xl:min-h-[24rem]
                                          "
                                          image={null}
                                          date="June 29, 2023"
                                          title="Leverage The Digital Thread For Better Human and Sustainability Outcomes"
                                    />
                              </ScaleRaiseUpAnimationWrapper>

                              <ScaleRaiseUpAnimationWrapper>
                                    <NewsCard
                                          containerClassName="flex flex-col gap-4 h-fit
                                                w-72 min-w-[18rem]
                                                xl:w-[20rem] xl:min-w-[20rem] 
                                                2xl:w-[24rem] 2xl:min-w-[24rem] 
                                          "
                                          imageClassName=" w-full  h-72  min-h-[18rem] object-cover  hover:grayscale
                                                xl:h-[20rem] xl:min-h-[20rem]
                                                2xl:h-[24rem] 2xl:min-h-[24rem]
                                          "
                                          image={null}
                                          date="June 29, 2023"
                                          title="9 Reasons you should add bill payments to your remittance app"
                                    />
                              </ScaleRaiseUpAnimationWrapper>

                              <ScaleRaiseUpAnimationWrapper>
                                    <NewsCard
                                          containerClassName="flex flex-col gap-4 h-fit
                                                w-72 min-w-[18rem]
                                                xl:w-[20rem] xl:min-w-[20rem] 
                                                2xl:w-[24rem] 2xl:min-w-[24rem] 
                                          "
                                          imageClassName=" w-full  h-72  min-h-[18rem] object-cover  hover:grayscale
                                                xl:h-[20rem] xl:min-h-[20rem]
                                                2xl:h-[24rem] 2xl:min-h-[24rem]
                                          "
                                          image={null}
                                          date="June 29, 2023"
                                          title="Tangible Strategies for Digital Transformation from Industry Leaders at LiveWorx 2023 Tangible Strategies for Digital Transformation from Industry Leaders at LiveWorx 2023"
                                    />
                              </ScaleRaiseUpAnimationWrapper>

                              <ScaleRaiseUpAnimationWrapper>
                                    <NewsCard
                                          containerClassName="flex flex-col gap-4 h-fit
                                                w-72 min-w-[18rem]
                                                xl:w-[20rem] xl:min-w-[20rem] 
                                                2xl:w-[24rem] 2xl:min-w-[24rem] 
                                          "
                                          imageClassName=" w-full  h-72  min-h-[18rem] object-cover  hover:grayscale
                                                xl:h-[20rem] xl:min-h-[20rem]
                                                2xl:h-[24rem] 2xl:min-h-[24rem]
                                          "
                                          image={null}
                                          date="June 29, 2023"
                                          title="Leverage The Digital Thread For Better Human and Sustainability Outcomes"
                                    />
                              </ScaleRaiseUpAnimationWrapper>
                        </section>

                        <ViewMoreButton name="Read more" clickHandler={() => {}} />
                  </span>
            </div>
      );
}

export default HomeNews;
