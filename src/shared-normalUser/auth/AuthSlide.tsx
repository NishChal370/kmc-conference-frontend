import BackButton from "@/shared/button/BackButton";
import AppMainLogo from "@/shared/logo/AppMainLogo";
import { ORGANIZERS_DETAIL } from "@/pages-normalUser/organizer/seed/organizersDetails";

function AuthSlide() {
      return (
            <aside
                  className="relative w-full flex min-w-0 
                        sm:justify-center sm:items-center
                        md:bg-mute
                        lg:max-w-[50rem]
                  "
            >
                  <BackButton containerClassName="absolute top-0" name="Back To Website" />

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
                                    Kathmandu Metropolitan City <br />
                                    <span className="text-primary">IT Conference</span>
                              </h1>
                              <p className="text-sm font-semibold">
                                    &quot;Powering Government Through Tech&quot;
                              </p>
                        </article>

                        <footer
                              className="hidden gap-10 justify-center w-full mt-2 
                                    md:flex md:mt-10
                              "
                        >
                              {ORGANIZERS_DETAIL.map(({ image }, index) => (
                                    <img
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
