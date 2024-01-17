import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/app/hooks";
import NavHeader from "../components/NavHeader";
import { sideNavViewHandler } from "../feature/adminSideNavSlice";
import { ADMIN_BASE_PATH, ADMIN_DASHBOARD_PATH } from "@/admin/constants/routePath";
import { ISideNavDetail } from "@/admin/model/sideNav/sideNavModel";

interface NavHeaderContainer {
      title: ISideNavDetail["title"];
      mainIcon: ISideNavDetail["Icon"];
      pathName: ISideNavDetail["pathName"];
      haveSubNav: { have?: boolean; isOpen?: boolean };
      isSubNav: boolean;
      subNavHandler: () => void;
}

function NavHeaderContainer({
      title,
      mainIcon,
      pathName,
      haveSubNav = { have: false, isOpen: false },
      isSubNav,
      subNavHandler,
}: NavHeaderContainer) {
      const navigate = useNavigate();
      const dispatch = useAppDispatch();
      const { pathname } = useLocation();

      const buttonClickHandler = () => {
            if (haveSubNav.have) {
                  subNavHandler();

                  return;
            }

            navigate(pathName);

            // disable state change in greater than md screen.
            if (window.innerWidth > 768) return;

            dispatch(sideNavViewHandler());
      };

      const isActive = () => {
            if (isSubNav) {
                  return pathname === pathName;
            }

            const firstPathSegment = pathname.split("/")[2];

            if (!firstPathSegment) {
                  // default page to open when pathname is not given
                  return pathName === ADMIN_DASHBOARD_PATH.dashboard.full;
            }

            return pathName.includes(firstPathSegment);
      };

      return (
            <NavHeader
                  title={title}
                  mainIcon={mainIcon}
                  isSubNav={isSubNav}
                  haveSubNav={haveSubNav}
                  isActive={isActive()}
                  buttonClickHandler={buttonClickHandler}
            />
      );
}

export default NavHeaderContainer;
