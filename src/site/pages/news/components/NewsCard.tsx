import { IAttachment } from "@/models/file/fileModel";
import ServerImage from "@/shared/serverImage/ServerImage";

interface INewCard {
      image: IAttachment | null;
      date: string;
      title: string;
      containerClassName: string;
      imageClassName: string;
}
function NewsCard({ image, date, title, containerClassName, imageClassName }: INewCard) {
      return (
            <div className={" cursor-pointer " + containerClassName}>
                  <ServerImage image={image} className={imageClassName} alt="news-and-updates" />
                  <article className="flex flex-col gap-3 w-fit h-full">
                        <p className="text-primary font-medium text-sm">{date}</p>
                        <h6 className="font-bold line-clamp-2 text-base">{title}</h6>
                  </article>
            </div>
      );
}

export default NewsCard;
