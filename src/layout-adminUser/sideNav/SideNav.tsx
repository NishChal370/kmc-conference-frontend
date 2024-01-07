import SideNavItemContainer from "./container/SideNavItemContainer";
import { SIDE_NAV_LIST } from "./data/sideNavList";
import { useAppSelector } from "@/app/hooks";
import { adminSideNavState } from "./feature/adminSideNavSlice";
import { ISideNavDetail } from "@/model-adminUser/sideNav/sideNavModel";

function SideNav() {
      const { isSideNavOpen } = useAppSelector(adminSideNavState);

      return (
            <div
                  id="side-nav"
                  className={`absolute group cursor-pointer
                        transition-all duration-700 ease-in-out
                        md:hover:min-w-[260px] md:hover:max-w-[260px] 
                        md:static md:min-w-[60px] md:max-w-[60px]
                        ${isSideNavOpen ? "min-w-[260px] max-w-[260px]" : "min-w-0 max-w-0"}
                  `}
            >
                  <span
                        className={`h-full min-h-full fixed border-r bg-white border-default pt-8 z-20
                              transition-all duration-700 ease-in-out
                              md:group-hover:w-[260px]
                              md:w-[60px]
                              ${isSideNavOpen ? "w-[260px]" : "w-0"}
                        `}
                  >
                        <nav className="h-[calc(100vh-9rem)] overflow-y-scroll">
                              <ul
                                    className={`w-full flex-col gap-4 justify-center items-center 
                                          ${!isSideNavOpen ? "hidden md:flex" : "flex"}
                                    `}
                              >
                                    {SIDE_NAV_LIST.map((navDetail: ISideNavDetail) => (
                                          <SideNavItemContainer key={navDetail.id} {...navDetail} />
                                    ))}
                              </ul>
                        </nav>
                  </span>
            </div>
      );
}

export default SideNav;
