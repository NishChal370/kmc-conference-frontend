import { useEffect } from "react";
import AppMainLogo from "@/shared/logo/AppMainLogo";
import NavActionButtons from "./components/NavActionButtons";
import TopNavOrganizers from "@/site/layout/topNav/components/TopNavOrganizers";

function TopNav() {
      const handleScroll = () => {
            const topNavContainer = document.getElementById("top-nav");
            const topNavAppLogo = document.getElementById("top-nav--app-log");
            const topNavActionButtons = document.getElementById("top-nav--action-buttons");

            if (!topNavContainer || !topNavAppLogo) return;

            let topNavInitialColor = "";
            let topNavAppLogoInitialColor = "";

            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                  topNavInitialColor = topNavContainer.style.backgroundColor;
                  topNavContainer.style.backgroundColor = "white";

                  topNavAppLogoInitialColor = topNavAppLogo.style.width;
                  topNavAppLogo.style.width = "10rem";

                  if (topNavActionButtons) {
                        topNavActionButtons.style.setProperty("color", "#bd1701", "important");
                  }
            } else {
                  topNavContainer.style.backgroundColor = topNavInitialColor;
                  topNavAppLogo.style.width = topNavAppLogoInitialColor;

                  if (topNavActionButtons) {
                        topNavActionButtons.style.setProperty("color", "white", "important");
                  }
            }
      };

      useEffect(() => {
            window.addEventListener("scroll", handleScroll);

            return () => {
                  window.removeEventListener("scroll", handleScroll);
            };
      }, []);

      return (
            <nav
                  id="top-nav"
                  className="fixed z-10 top-0 flex justify-between items-center gap-2 w-full py-2 px-4 
                        lg:px-10
                  "
            >
                  <aside className="flex justify-start items-end gap-2.5">
                        <AppMainLogo id="top-nav--app-log" />
                  </aside>

                  <span className="flex flex-col w-fit gap-1.5 items-end">
                        <TopNavOrganizers />
                        <NavActionButtons />
                  </span>
            </nav>
      );
}

export default TopNav;
