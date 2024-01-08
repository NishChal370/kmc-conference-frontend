import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideNavItem from "../components/SideNavItem";
import { ISideNavDetail } from "@/admin/model/sideNav/sideNavModel";

interface ISideNavItem extends ISideNavDetail {
      isSubNav?: boolean;
}

function SideNavItemContainer(sideNavItemsProps: ISideNavItem) {
      const { pathname } = useLocation();
      const [showSubNav, setShowSubNav] = useState<boolean>(false);

      const subNavHandler = () => {
            setShowSubNav((prev) => !prev);
      };

      useEffect(() => {
            const isActive = pathname.split("/")[2]
                  ? sideNavItemsProps.pathName.includes(pathname.split("/")[2])
                  : false;

            setShowSubNav(isActive);
      }, [pathname]);

      return <SideNavItem {...sideNavItemsProps} subNavHandler={subNavHandler} showSubNav={showSubNav} />;
}

export default SideNavItemContainer;
