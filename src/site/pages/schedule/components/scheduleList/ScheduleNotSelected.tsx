import { APP_SUB_TITLE } from "@/constants/appDetail";
import appLogo from "@/assets/image/organizers/appLogo.webp";

function ScheduleNotSelected() {
      return (
            <div className="h-full min-w-full max-w-full   flex flex-col justify-center items-center  text-default ">
                  <span className="flex flex-col items-center gap-10 py-10 sm:min-w-[20rem]">
                        <header className="w-[100%] self-center text-center flex justify-center items-center flex-col gap-3 opacity-[1]">
                              <figure className="w-40">
                                    <img
                                          loading="lazy"
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

                        <span className="flex flex-col gap-3 w-full text-center">
                              <p className=" font-semibold text-sm">Explore you conference by Day</p>
                              <p className=" font-semibold text-sm text-mute">
                                    Select your preferred day from the options on the left to view the
                                    detailed schedule
                              </p>
                        </span>
                  </span>
            </div>
      );
}

export default ScheduleNotSelected;
