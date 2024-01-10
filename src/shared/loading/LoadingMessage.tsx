import { APP_SUB_TITLE } from "@/constants/appDetail";
import "./style/loading.css";
import appLogo from "@/assets/image/appLogo.png";

interface ILoadingMessage {
      needHeader?: boolean;
}

function LoadingMessage({ needHeader = true }: ILoadingMessage) {
      return (
            <div className="h-full min-w-full max-w-full   flex flex-col justify-center items-center  text-default ">
                  <span className="flex flex-col items-center gap-10 py-10 sm:min-w-[20rem]">
                        {needHeader && (
                              <header className="w-[100%] self-center text-center flex justify-center items-center flex-col gap-2 opacity-[0.6]">
                                    <figure className="w-40">
                                          <img
                                                className="w-full h-full object-cover"
                                                src={appLogo}
                                                alt="app-logo"
                                          />
                                    </figure>
                                    <span className="flex items-center gap-2 w-full text-mute">
                                          <hr className="w-full text-mute/25" />
                                          <h4 className="min-w-fit text-xs font-thin">{APP_SUB_TITLE}</h4>
                                          <hr className="w-full text-mute/25" />
                                    </span>
                              </header>
                        )}
                        <span className="flex flex-col gap-4 w-full text-center">
                              <p className=" font-semibold text-sm">Preparing your request</p>
                              <div className="loader-line"></div>
                        </span>
                  </span>
            </div>
      );
}

export default LoadingMessage;
