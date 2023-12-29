import { useState } from "react";
import { ICON } from "@/constants/icon";
import AppIcon from "@/shared/icon/AppIcon";
import NavMenu from "@/layout-normalUser/components/NavMenu";

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
                        className="text-red w-fit active:text-white"
                        onClick={menuOpenButtonHandler}
                  >
                        <AppIcon name="menu" size={ICON.size + 8} />
                  </button>

                  <NavMenu visibility={isMenuOpen} closeMenuHandler={menuCloseButtonHandler} />
            </>
      );
}

export default NavMenuButton;
