import { APP_SUB_TITLE, APP_TITLE } from "@/constants/appDetail";
import appLogo from "@/assets/image/organizers/appLogo.webp";
import "./style/loading.css";

function Loading() {
      return (
            <div className="h-full w-full  min-h-screen min-w-screen flex justify-center items-center  text-default/50">
                  <span className="flex flex-col items-center gap-10 pb-40">
                        <header className="w-[100%] self-center text-center flex justify-center items-center flex-col gap-2">
                              <figure className="w-56">
                                    <img
                                          loading="lazy"
                                          className="w-full h-full object-cover"
                                          src={appLogo}
                                          alt="app-logo"
                                    />
                              </figure>

                              <h1 className="font-semibold text-2xl max-w-sm">{APP_TITLE}</h1>
                        </header>

                        <span className="flex flex-col gap-10 w-full">
                              <span className="flex items-center gap-2 w-full text-mute">
                                    <hr className="w-full text-mute/25" />
                                    <h4 className="min-w-fit text-base font-thin">{APP_SUB_TITLE}</h4>
                                    <hr className="w-full text-mute/25" />
                              </span>

                              <div className="loader-line"></div>
                        </span>
                  </span>
            </div>
      );
}

export default Loading;
