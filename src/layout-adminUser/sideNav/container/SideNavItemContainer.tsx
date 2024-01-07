import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideNavItem from "../components/SideNavItem";
import { ISideNavDetail } from "@/model-adminUser/sideNav/sideNavModel";

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
            const isActive = pathname.split("/")[1]
                  ? sideNavItemsProps.pathName.includes(pathname.split("/")[1])
                  : false;

            setShowSubNav(isActive);
      }, [pathname]);

      return <SideNavItem {...sideNavItemsProps} subNavHandler={subNavHandler} showSubNav={showSubNav} />;
}

export default SideNavItemContainer;
