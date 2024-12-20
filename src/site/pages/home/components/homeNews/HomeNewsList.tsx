import NewsCard from "@/site/pages/news/components/NewsCard";
import ScaleRaiseUpAnimationWrapper from "@/template/animation/ScaleRaiseUpAnimationWrapper";
import { INewsBasicResponse } from "@/admin/model/news/newsModel";

interface IHomeNewsList {
      newsList: INewsBasicResponse["news"];
}
function HomeNewsList({ newsList }: IHomeNewsList) {
      return (
            <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 w-fit h-full justify-center">
                  {newsList.map((news) => (
                        <ScaleRaiseUpAnimationWrapper key={news.id}>
                              <NewsCard
                                    containerClassName="flex flex-col gap-4 h-fit  hover:grayscale
                                          w-72 min-w-[18rem]
                                          xl:w-[20rem] xl:min-w-[20rem] 
                                          2xl:w-[22rem] 2xl:min-w-[22rem] 
                                    "
                                    imageClassName=" w-full  h-72  min-h-[18rem] object-cover
                                          xl:h-[20rem] xl:min-h-[20rem]
                                          2xl:h-[22rem] 2xl:min-h-[22rem]
                                    "
                                    news={news}
                              />
                        </ScaleRaiseUpAnimationWrapper>
                  ))}
            </section>
      );
}

export default HomeNewsList;
