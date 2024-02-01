import { useNavigate } from "react-router-dom";
import { INewsBasicModel } from "@/admin/model/news/newsModel";
import ServerImage from "@/shared/serverImage/ServerImage";
import { NEWS_PATH } from "@/site/constants/routePath";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";

interface INewCard {
      news: INewsBasicModel;
      containerClassName: string;
      imageClassName: string;
}
function NewsCard({ news, containerClassName, imageClassName }: INewCard) {
      const navigate = useNavigate();

      const navigateHandler = () => {
            navigate(NEWS_PATH.newsDetail.full(news.id));
      };

      return (
            <div className={" cursor-pointer " + containerClassName} onClick={navigateHandler}>
                  <ServerImage image={news.bannerImage} className={imageClassName} alt="news-and-updates" />
                  <article className="flex flex-col gap-3 w-fit h-full">
                        <p className="text-primary font-medium text-sm">
                              {changeDateFormat(news.createdDate, "medium") || ""}
                        </p>
                        <h6 className="font-bold line-clamp-2 text-base">{news.title}</h6>
                  </article>
            </div>
      );
}

export default NewsCard;
