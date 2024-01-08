import NavHeaderContainer from "../container/NavHeaderContainer";
import SideNavItemContainer from "../container/SideNavItemContainer";
import { ISideNavDetail } from "@/admin/model/sideNav/sideNavModel";
import "../style/sideNav.css";

interface ISideNavItem extends ISideNavDetail {
      isSubNav?: boolean;
      showSubNav: boolean;
      subNavHandler: () => void;
}

function SideNavItem({
      title,
      Icon,
      subNav,
      isSubNav = false,
      pathName,
      showSubNav,
      subNavHandler,
}: ISideNavItem) {
      return (
            <li className="w-full flex flex-col gap-2 justify-center items-center">
                  <NavHeaderContainer
                        mainIcon={Icon}
                        title={title}
                        haveSubNav={{ have: !!subNav, isOpen: showSubNav }}
                        isSubNav={isSubNav}
                        pathName={pathName}
                        subNavHandler={subNavHandler}
                  />

                  {/* haveSubNav = !!subNav */}
                  {!!subNav && showSubNav && (
                        <ul
                              id="admin-subNav-container"
                              className="min-w-[98%] max-w-[98%] self-end flex flex-col gap-2 
                                    md:hidden md:group-hover:flex
                              "
                        >
                              {subNav.map((navDetail: ISideNavDetail) => (
                                    <SideNavItemContainer key={navDetail.id} {...navDetail} isSubNav={true} />
                              ))}
                        </ul>
                  )}
            </li>
      );
}

export default SideNavItem;
