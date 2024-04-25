import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideNavItem from "../components/SideNavItem";
import { ISideNavDetail } from "@/admin/model/sideNav/sideNavModel";
import getTokenDetail from "@/utils/token/getTokenDetail";

interface ISideNavItem extends ISideNavDetail {
      isSubNav?: boolean;
}

function SideNavItemContainer(sideNavItemsProps: ISideNavItem) {
      const { pathname } = useLocation();
      const [showSubNav, setShowSubNav] = useState<boolean>(false);

      const currentRoles = getTokenDetail.loggedInUserRole();

      const subNavHandler = () => {
            setShowSubNav((prev) => !prev);
      };

      useEffect(() => {
            const isActive = pathname.split("/")[2]
                  ? sideNavItemsProps.pathName.includes(pathname.split("/")[2])
                  : false;

            setShowSubNav(isActive);
      }, [pathname]);

      if (
            sideNavItemsProps.allowedRole === undefined ||
            (currentRoles && sideNavItemsProps.allowedRole.includes(currentRoles))
      )
            return (
                  <SideNavItem {...sideNavItemsProps} subNavHandler={subNavHandler} showSubNav={showSubNav} />
            );

      return undefined;
}

export default SideNavItemContainer;
