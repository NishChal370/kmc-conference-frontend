import { useNavigate } from "react-router-dom";
import { PROFILE_NAV_BAR } from "../data/profileNavList";

function ProfileSettingNav() {
      const navigate = useNavigate();

      const navigationHandler = (pathName: string) => () => {
            navigate(pathName);
      };

      return (
            <nav
                  className="flex space-x-1 justify-between rounded-xl bg-rose-900/10 p-1 
                        sm:space-x-10
                        [&>*]:transition-all 
                        [&>*]:duration-700 
                        [&>*]:ease-in-out
                  "
            >
                  {PROFILE_NAV_BAR.map((nav) => (
                        <button
                              type="button"
                              key={nav.id}
                              className={` 
                                    w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-0 ring-offset-rose-400/0 focus:outline-none focus:ring-0 
                                    ${
                                          nav.path === location.pathname
                                                ? "bg-white text-rose-700 shadow"
                                                : "text-rose-300 hover:bg-white/[0.12] hover:text-primary"
                                    }
                              `}
                              onClick={navigationHandler(nav.path)}
                        >
                              {nav.label}
                        </button>
                  ))}
            </nav>
      );
}

export default ProfileSettingNav;
