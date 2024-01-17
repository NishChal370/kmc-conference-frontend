import Button from "../button/Button";
import { IApiErrorDetail } from "@/models/commonModel";
import noResultImg from "@/assets/image/webp/no-results.webp";

interface INotFoundMessage {
      title?: IApiErrorDetail["title"];
      detail?: IApiErrorDetail["detail"];
      viewAllHandler?: () => void;
      showViewAllButton?: boolean;
      buttonTitle?: string;
}

function NotFoundMessage({
      title,
      detail,
      viewAllHandler,
      showViewAllButton = true,
      buttonTitle,
}: INotFoundMessage) {
      return (
            <div className="w-full h-full pt-20 flex flex-col justify-center items-center text-center gap-6">
                  <figure className="bg-gray-100 rounded-full w-[8rem] h-[8rem] flex justify-center items-center">
                        <img className="w-[50%] h-[50%]" src={noResultImg} alt="no-result" />
                  </figure>

                  <article className="flex flex-col gap-4 max-w-md">
                        <h1 className="font-semibold text-lg text-gray-600">
                              {title || "Request data does not exits."}
                        </h1>
                        <p className="text-sm">{detail}</p>
                  </article>

                  {showViewAllButton && viewAllHandler && (
                        <footer>
                              <Button
                                    variant="text"
                                    type="button"
                                    title={buttonTitle ?? "View all"}
                                    onClickHandler={viewAllHandler}
                              />
                        </footer>
                  )}
            </div>
      );
}

export default NotFoundMessage;
