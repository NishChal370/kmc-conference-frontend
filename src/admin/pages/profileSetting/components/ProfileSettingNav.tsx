import { useLocation, useNavigate } from "react-router-dom";
import AppIcon from "@/shared/icon/AppIcon";
import { PROFILE_NAV_BAR } from "../data/profileNavList";
import { TIconType } from "@/models/icon/iconModel";

function ProfileSettingNav() {
      const location = useLocation();
      const navigate = useNavigate();

      const navigationHandler = (pathName: string) => () => {
            navigate(pathName);
      };

      return (
            <div className="flex flex-col items-start justify-start gap-10 min-w-full sm:min-w-[20rem] min-h-[24rem] max-h-96 border rounded-2xl py-6 px-4 text-sm">
                  {PROFILE_NAV_BAR.map((nav) => (
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

export default ProfileSettingNav;

{
      /* <section className="flex flex-col items-start gap-5 w-full">
                        <p className=" text-gray-700 font-semibold border-b w-full">Session Information</p>

                        <span className="flex flex-col items-start gap-3">
                              <button
                                    className="flex gap-1
                                          hover:text-primary active:text-rose-400
                                    "
                              >
                                    Speaker
                              </button>

                              <button
                                    className="flex gap-1
                                          hover:text-primary active:text-rose-400
                                    "
                              >
                                    Call For Paper
                              </button>

                              <button
                                    className="flex gap-1
                                          hover:text-primary active:text-rose-400
                                    "
                              >
                                    Participation
                              </button>
                        </span> */
}
{
      /* </section> */
}
// <nav
//       className="flex space-x-1 justify-between rounded-xl bg-rose-900/10 p-1
//             sm:space-x-10
//             [&>*]:transition-all
//             [&>*]:duration-700
//             [&>*]:ease-in-out
//       "
// >
//       {PROFILE_NAV_BAR.map((nav) => (
//             <button
//                   type="button"
//                   key={nav.id}
//                   className={`
//                         w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-0 ring-offset-rose-400/0 focus:outline-none focus:ring-0
//                         ${
//                               nav.path === location.pathname
//                                     ? "bg-white text-rose-700 shadow"
//                                     : "text-rose-300 hover:bg-white/[0.12] hover:text-primary"
//                         }
//                   `}
//                   onClick={navigationHandler(nav.path)}
//             >
//                   {nav.label}
//             </button>
//       ))}
// </nav>
