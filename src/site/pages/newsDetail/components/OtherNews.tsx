import NewsCard from "../../news/components/NewsCard";

function OtherNews() {
      return (
            <section
                  className="mt-44 flex flex-col gap-10 w-full 
                        lg:w-[80%] lg:max-w-[80rem]
                        2xl:max-w-[70rem] 2xl:w-[70%] 
                  "
            >
                  <h2 className="text-4xl font-extrabold text-center">READ OTHER NEWS</h2>

                  <div
                        className="grid grid-cols-1 gap-x-12 gap-y-10 sm:gap-y-20 justify-center items-center place-items-center
                              sm:grid-cols-2 
                              lg:grid-cols-3
                              xl:grid-cols-4
                        "
                  >
                        <NewsCard
                              containerClassName="flex flex-col gap-3 h-fit cursor-pointer
                                    w-60 min-w-[240px]  
                                    xl:w-60 xl:min-w-[240px] 
                              "
                              imageClassName="w-full h-60 min-h-[240px] object-contain 
                                    xl:min-h-[240px] xl:h-60
                              "
                              image={null}
                              date="June 29, 2023"
                              title="Leverage The Digital Thread For Better Human and Sustainability Outcomes"
                        />

                        <NewsCard
                              containerClassName="flex flex-col gap-3 h-fit cursor-pointer
                                    w-60 min-w-[240px]  
                                    xl:w-60  xl:min-w-[240px] 
                              "
                              imageClassName="w-full h-60 min-h-[240px] object-contain 
                                    xl:min-h-[240px] xl:h-60
                              "
                              image={null}
                              date="June 29, 2023"
                              title="Leverage The Digital Thread For Better Human and Sustainability Outcomes"
                        />

                        <NewsCard
                              containerClassName="flex flex-col gap-3 h-fit cursor-pointer
                                    w-60 min-w-[240px]  
                                    xl:w-60  xl:min-w-[240px] 
                              "
                              imageClassName="w-full h-60 min-h-[240px] object-contain 
                                    xl:min-h-[240px] xl:h-60
                              "
                              image={null}
                              date="June 29, 2023"
                              title="Leverage The Digital Thread For Better Human and Sustainability Outcomes"
                        />

                        <NewsCard
                              containerClassName="flex flex-col gap-3 h-fit cursor-pointer
                                    w-60 min-w-[240px]  
                                    xl:w-60  xl:min-w-[240px] 
                              "
                              imageClassName="w-full h-60 min-h-[240px] object-contain 
                                    xl:min-h-[240px] xl:h-60
                              "
                              image={null}
                              date="June 29, 2023"
                              title="Leverage The Digital Thread For Better Human and Sustainability Outcomes"
                        />

                        <NewsCard
                              containerClassName="flex flex-col gap-3 h-fit cursor-pointer
                                    w-60 min-w-[240px]  
                                    xl:w-60  xl:min-w-[240px] 
                              "
                              imageClassName="w-full h-60 min-h-[240px] object-contain 
                                    xl:min-h-[240px] xl:h-60
                              "
                              image={null}
                              date="June 29, 2023"
                              title="Leverage The Digital Thread For Better Human and Sustainability Outcomes"
                        />
                  </div>
            </section>
      );
}

export default OtherNews;
