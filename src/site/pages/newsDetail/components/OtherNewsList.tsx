import NewsCard from "../../news/components/NewsCard";
import { INewsBasicResponse } from "@/admin/model/news/newsModel";

interface IOtherNewsList {
      newsList: INewsBasicResponse;
}
function OtherNewsList({ newsList }: IOtherNewsList) {
      return (
            <div
                  className="grid grid-cols-1 gap-x-12 gap-y-10 sm:gap-y-20 justify-center items-center place-items-center h-full
                        sm:grid-cols-2 
                        lg:grid-cols-3
                        xl:grid-cols-4
                  "
            >
                  {newsList.news.map((news) => (
                        <NewsCard
                              key={news.id}
                              containerClassName="flex flex-col gap-3 h-full cursor-pointer
                                    w-60 min-w-[240px]  
                                    xl:w-60 xl:min-w-[240px] 
                              "
                              imageClassName="w-full h-60 min-h-[240px] object-contain 
                                    xl:min-h-[240px] xl:h-60
                              "
                              news={news}
                        />
                  ))}
            </div>
      );
}

export default OtherNewsList;
