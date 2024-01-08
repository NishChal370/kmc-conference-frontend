import { ICON } from "@/constants/icon";
import { useAppDispatch } from "@/app/hooks";
import AppIcon from "@/shared/icon/AppIcon";
import { sideNavViewHandler } from "@/admin/layout/sideNav/feature/adminSideNavSlice";

function SideNavOpenButton() {
      const dispatch = useAppDispatch();

      const clickHandler = () => {
            dispatch(sideNavViewHandler());
      };

      return (
            <button className="md:hidden" onClick={clickHandler}>
                  <AppIcon name="menu" size={ICON.size + 4} />
            </button>
      );
}

export default SideNavOpenButton;
