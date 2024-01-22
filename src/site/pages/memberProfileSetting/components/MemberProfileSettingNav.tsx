import { useLocation, useNavigate } from "react-router-dom";
import AppIcon from "@/shared/icon/AppIcon";
import { MEMBER_PROFILE_NAV_BAR } from "../data/memberProfileNavList";
import { TIconType } from "@/models/icon/iconModel";

function MemberProfileSettingNav() {
      const location = useLocation();
      const navigate = useNavigate();

      const navigationHandler = (pathName: string) => () => {
            navigate(pathName);
      };

      return (
            <div className="flex flex-col items-start justify-start gap-10 min-w-full sm:min-w-[20rem] min-h-[24rem] max-h-96 border rounded-2xl py-6 px-4 text-sm">
                  {MEMBER_PROFILE_NAV_BAR.map((nav) => (
                        <section key={nav.id} className="flex flex-col items-start gap-6 w-full">
                              <p className="text-gray-700 font-semibold border-b w-full">{nav.title}</p>

                              <span className="flex flex-col items-start gap-3.5">
                                    {nav.navItems.map((navItem) => (
                                          <button
                                                type="button"
                                                key={navItem.id}
                                                className={`flex gap-1 
                                                      hover:text-primary active:text-rose-400
                                                      ${
                                                            location.pathname === navItem.path
                                                                  ? "text-primary"
                                                                  : ""
                                                      }
                                                `}
                                                onClick={navigationHandler(navItem.path)}
                                          >
                                                {navItem.icon ? (
                                                      <AppIcon name={navItem.icon as TIconType} />
                                                ) : (
                                                      <></>
                                                )}
                                                {navItem.label}
                                          </button>
                                    ))}
                              </span>
                        </section>
                  ))}
            </div>
      );
}

export default MemberProfileSettingNav;
