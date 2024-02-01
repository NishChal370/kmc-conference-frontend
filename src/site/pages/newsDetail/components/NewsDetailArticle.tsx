import { INewsDetailResponse } from "@/admin/model/news/newsModel";
import ServerImage from "@/shared/serverImage/ServerImage";
import SanitizedContent from "@/shared/sanitizedContent/SanitizedContent";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";

interface INewsDetailArticle {
      newsDetail: INewsDetailResponse;
}

function NewsDetailArticle({ newsDetail }: INewsDetailArticle) {
      return (
            <section
                  className="flex flex-col gap-20 mt-[6rem] items-center w-[90%] 
                        lg:w-[56%] lg:max-w-[66rem]
                  "
            >
                  <header className="w-full h-fit flex flex-col items-center gap-10">
                        <span className="flex flex-col w-full gap-4">
                              <h1 title="Title" className="text-4xl font-black">
                                    {newsDetail.title}
                              </h1>

                              <p title="Create Date" className="text-base font-semibold ">
                                    {changeDateFormat(newsDetail.createdDate, "medium")}
                              </p>
                        </span>

                        <figure
                              className="flex w-full h-fit 
                                    lg:h-[30rem]
                              "
                        >
                              <ServerImage
                                    title={"Banner image of " + newsDetail.title}
                                    className="bg-mute-1 w-[100%] h-full object-contain object-center"
                                    image={newsDetail.bannerImage}
                                    alt="news-and-updates"
                              />
                        </figure>
                  </header>

                  <article>
                        <SanitizedContent
                              extraClassName="rich-text--loose"
                              htmlContent={newsDetail.content}
                        />
                  </article>
            </section>
      );
}

export default NewsDetailArticle;
