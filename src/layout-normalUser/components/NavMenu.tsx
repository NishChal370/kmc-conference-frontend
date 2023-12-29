import AppIcon from "@/shared/icon/AppIcon";
import NavMenuItemButton from "./NavMenuItemButton";
import AppMainLogo from "@/shared/logo/AppMainLogo";
import LoginButton from "@/shared-normalUser/buttons/LoginButton";
import EventParticipationButton from "@/shared-normalUser/buttons/EventParticipationButton";
import { ICON } from "@/constants/icon";
import "../styles/navMenu.css";

interface INavMenu {
      visibility: boolean;
      closeMenuHandler: () => void;
}

function NavMenu({ visibility, closeMenuHandler }: INavMenu) {
      return (
            <nav
                  id="nav-menu"
                  className={`fixed z-50 text-white top-0 left-0 h-full w-full transition-max-height overflow-y-scroll
                        ${visibility ? "max-h-[100vh]" : "max-h-0"} 
                  `}
            >
                  <span className="flex flex-col justify-start items-start w-full h-full bg-black/90 p-4">
                        <section
                              className="flex justify-between items-center gap-4 w-full py-2
                                    sm:px-10
                              "
                        >
                              <AppMainLogo />

                              <button
                                    type="button"
                                    className="text-red w-fit active:text-white"
                                    onClick={closeMenuHandler}
                              >
                                    <AppIcon name="clear" size={ICON.size + 8} />
                              </button>
                        </section>

                        <section className="flex justify-center items-center w-full h-full">
                              <span
                                    className="grid grid-cols-1 gap-x-2 gap-y-6 justify-between w-full h-fit text-2xl
                                          sm:w-[60%]
                                          lg:w-[70%]  lg:grid-cols-2 lg:h-3/5 lg:gap-y-1
                                          xl:w-[50%] xl:max-w-[50rem]
                                    "
                              >
                                    <section
                                          className="flex flex-col gap-6 w-fit
                                                [&>*]:text-start [&>*]:tracking-widest
                                          "
                                    >
                                          {[
                                                { name: "Speakers" },
                                                { name: "Organizers" },
                                                { name: "Exhibitors" },
                                          ].map(({ name }, index) => (
                                                <NavMenuItemButton key={index} name={name} />
                                          ))}
                                    </section>

                                    <section
                                          className="flex flex-col gap-6 w-fit
                                                [&>*]:text-start [&>*]:tracking-widest
                                          "
                                    >
                                          {[{ name: "Schedule" }].map(({ name }, index) => (
                                                <NavMenuItemButton key={index} name={name} />
                                          ))}
                                    </section>

                                    <section
                                          className="flex flex-col gap-6 w-fit
                                                [&>*]:text-start [&>*]:tracking-widest
                                          "
                                    >
                                          {[
                                                { name: "About us" },
                                                { name: "Gallery" },
                                                { name: "News and Updates" },
                                                { name: "Privacy Policy" },
                                          ].map(({ name }, index) => (
                                                <NavMenuItemButton key={index} name={name} />
                                          ))}
                                    </section>

                                    <section className="text-lg flex flex-col gap-4 item-center justify-start">
                                          <EventParticipationButton />

                                          <LoginButton />
                                    </section>
                              </span>
                        </section>
                  </span>
            </nav>
      );
}

export default NavMenu;
