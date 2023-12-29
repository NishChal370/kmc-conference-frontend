import { useState } from "react";
import { ICON } from "@/constants/icon";
import AppIcon from "@/shared/icon/AppIcon";
import NavMenu from "@/layout-normalUser/components/NavMenu";

function NavMenuButton() {
      const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

      const menuButtonHandler = () => {
            setIsMenuOpen((prev) => !prev);
      };

      return (
            <>
                  <button
                        type="button"
                        className="text-red w-fit active:text-white"
                        onClick={menuButtonHandler}
                  >
                        <AppIcon name="menu" size={ICON.size + 8} />
                  </button>

                  <NavMenu visibility={isMenuOpen} closeMenuHandler={menuButtonHandler} />
            </>
      );
}

export default NavMenuButton;
