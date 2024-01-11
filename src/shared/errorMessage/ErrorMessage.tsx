import { IApiErrorDetail } from "@/models/commonModel";
import errorImage from "@/assets/image/webp/warning.webp";

interface IErrorMessage {
      title?: IApiErrorDetail["title"];
      detail?: IApiErrorDetail["detail"];
}
function ErrorMessage({ title, detail }: IErrorMessage) {
      return (
            <div className="w-full h-full pt-20 flex flex-col justify-center items-center text-center gap-6">
                  <figure className=" bg-red-50 rounded-full w-[8rem] h-[8rem] flex justify-center items-center">
                        <img className="w-[50%] h-[50%]" src={errorImage} alt="error" />
                  </figure>

                  <article className="flex flex-col gap-4 max-w-md">
                        <h1 className=" font-semibold text-lg text-red-600">
                              {title || "Something went wrong"}
                        </h1>
                        <p className="text-sm">{detail}</p>
                  </article>

                  <footer>
                        <a href={"mailto:" + "SERVICE_PROVIDER_EMAIL"} className="text-sm text-primary">
                              contact service provider
                        </a>
                  </footer>
            </div>
      );
}

export default ErrorMessage;