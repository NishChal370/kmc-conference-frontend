import { useLocation, useNavigate } from "react-router-dom";
import AppIcon from "@/shared/icon/AppIcon";
import { MEMBER_PROFILE_NAV_BAR } from "../data/memberProfileNavList";
import { TIconType } from "@/models/icon/iconModel";
import GetQrButton from "@/shared/qrCodeModal/GetQrButton";

function MemberProfileSettingNav() {
      const location = useLocation();
      const navigate = useNavigate();

      const navigationHandler = (pathName: string) => () => {
            navigate(pathName);
      };

      return (
            <div className="relative flex flex-col gap-7 sm:min-w-[20rem] border py-4 rounded-lg min-h-[34rem] max-h-[34rem]">
                  <section className="flex flex-col gap-0.5 px-4">
                        <h4 className=" font-semibold text-2xl tracking-wide">Profile</h4>
                        <p className="text-sm tracking-wider text-mute"> View you profile details</p>
                  </section>

                  <span className="flex flex-col gap-10 w-full text-sm">
                        {MEMBER_PROFILE_NAV_BAR.map((nav, index) =>
                              index === 0 ? (
                                    <nav
                                          key={nav.id}
                                          className="flex flex-col gap-4 items-start w-full text-start px-2"
                                    >
                                          <>
                                                {nav.navItems.map((navItem) => (
                                                      <button
                                                            key={navItem.id}
                                                            type="button"
                                                            onClick={navigationHandler(navItem.path)}
                                                            className={`flex items-center gap-2 w-full text-start px-2 py-1 rounded-md font-medium hover:text-primary
                                                     ${
                                                           location.pathname === navItem.path
                                                                 ? "bg-primary/5 text-primary"
                                                                 : ""
                                                     }
                                                `}
                                                      >
                                                            <AppIcon name={navItem.icon as TIconType} />
                                                            <p>{navItem.label}</p>
                                                      </button>
                                                ))}
                                          </>
                                    </nav>
                              ) : (
                                    <span key={nav.id} className="flex flex-col gap-6 w-full">
                                          <span className="flex flex-col gap-2">
                                                <hr />
                                                <h4 className="px-4 text-mute font-medium tracking-wide">
                                                      {nav.title}
                                                </h4>
                                          </span>

                                          <nav className="flex flex-col gap-4 items-start w-full text-start px-2">
                                                <>
                                                      {nav.navItems.map((navItem) => (
                                                            <button
                                                                  key={navItem.id}
                                                                  type="button"
                                                                  onClick={navigationHandler(navItem.path)}
                                                                  className={`flex items-center gap-2 w-full text-start px-2 py-1 rounded-md font-medium hover:text-primary
                                                           ${
                                                                 location.pathname === navItem.path
                                                                       ? "bg-primary/5 text-primary"
                                                                       : ""
                                                           }
                                                     `}
                                                            >
                                                                  <AppIcon name={navItem.icon as TIconType} />
                                                                  <p>{navItem.label}</p>
                                                            </button>
                                                      ))}
                                                </>
                                          </nav>
                                    </span>
                              )
                        )}

                        <footer className=" absolute w-full bottom-0">
                              <hr />

                              <GetQrButton />
                        </footer>
                  </span>
            </div>
      );
}

export default MemberProfileSettingNav;
