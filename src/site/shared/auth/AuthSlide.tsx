import { useNavigate } from "react-router-dom";
import Button from "@/shared/button/Button";
import AppMainLogo from "@/shared/logo/AppMainLogo";
import { APP_SUB_TITLE, APP_TITLE } from "@/constants/appDetail";
import { ORGANIZERS_DETAIL } from "@/site/pages/organizer/seed/organizersDetails";

function AuthSlide() {
      const navigate = useNavigate();

      const backToWebsiteHandler = () => {
            navigate("/");
      };

      return (
            <aside
                  className="relative w-full flex min-w-0 
                        sm:justify-center sm:items-center
                        md:bg-mute
                        lg:max-w-[50rem]
                  "
            >
                  <nav className="absolute top-0 w-full py-4 px-4">
                        <Button
                              iconName="arrow-left"
                              type="button"
                              title="Back To Website"
                              variant="text"
                              onClickHandler={backToWebsiteHandler}
                        />
                  </nav>

                  <div
                        className="w-full h-full flex flex-col gap-4 pt-10 justify-start items-center max-h-[40rem]
                              md:pt-0 md:gap-10
                        "
                  >
                        <AppMainLogo />

                        <article
                              className="w-[96%] flex flex-col gap-2 text-xl text-center font-extrabold
                                    md:text-5xl md:gap-8
                                    xl:text-6xl
                              "
                        >
                              <h1 className="leading-snug">
                                    {APP_TITLE} <br />
                                    <span className="text-primary">IT Conference</span>
                              </h1>
                              <p className="text-sm font-semibold">&quot;{APP_SUB_TITLE}&quot;</p>
                        </article>

                        <footer
                              className="hidden gap-10 justify-center w-full mt-2 
                                    md:flex md:mt-10
                              "
                        >
                              {ORGANIZERS_DETAIL.map(({ image }, index) => (
                                    <img
                                          loading="lazy"
                                          className="w-[4rem] h-[4rem] 
                                                md:w-[8rem] md:h-[8rem]
                                          "
                                          key={index}
                                          src={image}
                                          alt="organizer"
                                    />
                              ))}
                        </footer>
                  </div>
            </aside>
      );
}
export { AuthSlide };
