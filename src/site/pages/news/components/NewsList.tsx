import NewsCard from "./NewsCard";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";
import { INewsBasicResponse } from "@/admin/model/news/newsModel";

interface INewsList {
      newsList: INewsBasicResponse["news"];
}

function NewsList({ newsList }: INewsList) {
      return (
            <section
                  className="grid grid-cols-1 gap-x-12 gap-y-10 sm:gap-y-20 justify-center items-center place-items-center
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        xl:grid-cols-4
                  "
            >
                  {newsList.map((news) => (
                        <NewsCard
                              key={news.id}
                              containerClassName="flex flex-col gap-3 h-fit cursor-pointer
                                    w-72 min-w-[18rem]  
                                    xl:w-64  xl:min-w-[256px] 
                                    2xl:w-72 2xl:min-w-[18rem] 
                              "
                              imageClassName="w-full h-72 min-h-[18rem]
                                    xl:min-h-[256px] xl:h-64
                                    2xl:h-72  2xl:min-h-[18rem]
                                    object-contain 
                              "
                              image={news.bannerImage}
                              date={changeDateFormat(news.createdDate, "medium") || ""}
                              title={news.title}
                        />
                  ))}
            </section>
      );
}

export default NewsList;
