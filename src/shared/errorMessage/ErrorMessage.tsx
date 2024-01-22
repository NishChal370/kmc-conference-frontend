import { IApiErrorDetail } from "@/models/commonModel";
import errorImage from "@/assets/image/webp/warning.webp";

interface IErrorMessage {
      title?: IApiErrorDetail["title"];
      detail?: IApiErrorDetail["detail"];
      needTopPadding?: boolean;
}
function ErrorMessage({ title, detail, needTopPadding = true }: IErrorMessage) {
      return (
            <div
                  className={`w-full h-full flex flex-col justify-center items-center text-center gap-6 ${
                        needTopPadding ? "pt-20" : "p-0"
                  }`}
            >
                  <figure className=" bg-red-50 rounded-full w-[8rem] h-[8rem] flex justify-center items-center">
                        <img loading="lazy" className="w-[50%] h-[50%]" src={errorImage} alt="error" />
                  </figure>

                  <article className="flex flex-col gap-4 max-w-md">
                        <h1 className=" font-semibold text-lg text-red-600">
                              {title || "Something went wrong"}
                        </h1>
                        <p className="text-sm">{detail}</p>
                  </article>
            </div>
      );
}

export default ErrorMessage;
