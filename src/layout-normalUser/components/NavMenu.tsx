import { useNavigate } from "react-router-dom";
import AppIcon from "@/shared/icon/AppIcon";
import NavMenuItemButton from "./NavMenuItemButton";
import AppMainLogo from "@/shared/logo/AppMainLogo";
import LoginButton from "@/shared-normalUser/buttons/LoginButton";
import EventParticipationButton from "@/shared-normalUser/buttons/EventParticipationButton";
import { ICON } from "@/constants/icon";
import {
      ABOUT_US_PATH,
      ORGANIZERS_PATH,
      SCHEDULE_PATH,
      SPEAKER_PATH,
} from "@/constants/routePath/path-normalUser";
import "../styles/navMenu.css";

interface INavMenu {
      visibility: boolean;
      closeMenuHandler: () => void;
}

function NavMenu({ visibility, closeMenuHandler }: INavMenu) {
      const navigate = useNavigate();

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
                              <AppMainLogo onClick={closeMenuHandler} />

                              <button
                                    type="button"
                                    className="text-primary w-fit active:text-white"
                                    onClick={closeMenuHandler}
                              >
                                    <AppIcon name="clear" size={ICON.size + 8} />
                              </button>
                        </section>

                        <section className="flex justify-center items-center w-full h-full">
                              <span
                                    className="grid grid-cols-1 gap-x-2 gap-y-6 justify-between w-full h-[40rem] max-h-screen text-2xl
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
                                                { name: "Speakers", path: SPEAKER_PATH.speaker.full },
                                                { name: "Organizers", path: ORGANIZERS_PATH.organizer.full },
                                                { name: "Exhibitors", path: "" },
                                          ].map(({ name, path }, index) => (
                                                <NavMenuItemButton
                                                      key={index}
                                                      name={name}
                                                      onClick={() => {
                                                            navigate(path);
                                                            closeMenuHandler();
                                                      }}
                                                />
                                          ))}
                                    </section>

                                    <section
                                          className="flex flex-col gap-6 w-fit
                                                [&>*]:text-start [&>*]:tracking-widest
                                          "
                                    >
                                          {[{ name: "Schedule", path: SCHEDULE_PATH.schedule.full }].map(
                                                ({ name, path }, index) => (
                                                      <NavMenuItemButton
                                                            key={index}
                                                            name={name}
                                                            onClick={() => {
                                                                  navigate(path);
                                                                  closeMenuHandler();
                                                            }}
                                                      />
                                                )
                                          )}
                                    </section>

                                    <section
                                          className="flex flex-col gap-6 w-fit
                                                [&>*]:text-start [&>*]:tracking-widest
                                          "
                                    >
                                          {[
                                                { name: "About us", path: ABOUT_US_PATH.aboutUs.full },
                                                { name: "Gallery", path: "" },
                                                { name: "News and Updates", path: "" },
                                                { name: "Privacy Policy", path: "" },
                                          ].map(({ name, path }, index) => (
                                                <NavMenuItemButton
                                                      key={index}
                                                      name={name}
                                                      onClick={() => {
                                                            navigate(path);
                                                            closeMenuHandler();
                                                      }}
                                                />
                                          ))}
                                    </section>

                                    <section className="text-lg flex flex-col gap-4 item-center justify-start">
                                          <EventParticipationButton />

                                          <LoginButton />

                                          <span className="flex gap-2 items-center justify-start [&>a]:active:text-whited">
                                                {[
                                                      { name: "facebook", link: "http://www.facebook.com" },
                                                      {
                                                            name: "instagram",
                                                            link: "http://www.instagram.com",
                                                      },
                                                      {
                                                            name: "linkedin",
                                                            link: "http://www.linkedin.com",
                                                      },
                                                ].map(({ name, link }, index) => (
                                                      <a
                                                            key={index}
                                                            className="transition ease-in-out duration-300
                                                                  hover:-translate-y-1 hover:scale-110 hover:text-primary
                                                            "
                                                            href={link}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                      >
                                                            <AppIcon name={name} size={ICON.size + 16} />
                                                      </a>
                                                ))}
                                          </span>
                                    </section>
                              </span>
                        </section>
                  </span>
            </nav>
      );
}

export default NavMenu;
