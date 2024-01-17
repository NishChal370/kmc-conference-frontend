import { useState } from "react";
import AppIcon from "@/shared/icon/AppIcon";
import NavMenu from "@/site/layout/topNav/components/NavMenu";
import { ICON } from "@/constants/icon";

function NavMenuButton() {
      const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

      const menuOpenButtonHandler = () => {
            setIsMenuOpen(true);
      };

      const menuCloseButtonHandler = () => {
            setIsMenuOpen(false);
      };

      return (
            <>
                  <button
                        type="button"
                        className="w-fit flex items-center gap-1"
                        onClick={menuOpenButtonHandler}
                  >
                        <AppIcon name="menu" className="" size={ICON.size + 8} />
                  </button>

                  <NavMenu visibility={isMenuOpen} closeMenuHandler={menuCloseButtonHandler} />
            </>
      );
}

export default NavMenuButton;
