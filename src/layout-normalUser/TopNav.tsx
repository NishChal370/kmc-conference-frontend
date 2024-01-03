import AppMainLogo from "@/shared/logo/AppMainLogo";
import NavMenuButton from "@/shared-normalUser/navMenu/NavMenuButton";
import RegisterButton from "@/shared-normalUser/buttons/RegisterButton";
import kmcLogo from "@/assets/image/KMCLogo.png";
import nepalGovLogo from "@/assets/image/nepalgovermentlogo.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TopNav() {
      const location = useLocation();
      useEffect(() => {
            const handleScroll = () => {
                  const nav = document.getElementById("top-nav");
                  const extraLogoContainer = document.getElementById("extra-logo-container");
                  const appLogo = document.getElementById("top-nav--app-log");
                  let logoInitialSize = "";

                  if (!nav) return;

                  // Check if the page is scrolled down from the top
                  if (window.scrollY > 0) {
                        nav.style.backgroundColor = "white"; // New color when scrolled down
                        if (extraLogoContainer) {
                              extraLogoContainer.style.visibility = "hidden"; // or use extraLogoContainer.style.display = "none !important";
                              extraLogoContainer.style.height = "0"; // Optionally set height to 0
                        }
                        if (appLogo) {
                              logoInitialSize = appLogo.style.width;
                              // appLogo.style.width.transform = "scale(0.5)"; // Example: scale down to 90%
                              appLogo.style.width = "10rem"; // Example: scale down to 90%
                        }
                  } else {
                        nav.style.backgroundColor = ""; // Original color when scrolled to the top
                        if (extraLogoContainer) {
                              extraLogoContainer.style.visibility = "visible"; // or use extraLogoContainer.style.display = "flex !important";
                              extraLogoContainer.style.height = "auto"; // Reset height
                        }
                        if (appLogo) {
                              appLogo.style.width = logoInitialSize;
                        }
                  }
            };

            // Attach the scroll event listener
            window.addEventListener("scroll", handleScroll);

            // Clean up the event listener
            return () => {
                  window.removeEventListener("scroll", handleScroll);
            };
      }, []);

      return (
            <nav
                  id="top-nav"
                  className="fixed z-10 top-0 flex justify-between items-center gap-2 w-full py-4 px-4 
                        sm:px-10
                  "
            >
                  <AppMainLogo id="top-nav--app-log" />

                  <aside className="flex  flex-col justify-center items-end gap-2.5">
                        {location.pathname === "/" && (
                              <section
                                    id="extra-logo-container"
                                    className="flex gap-4 justify-center items-center [&>img]:w-[4rem]  [&>img]:h-fit [&>img]:object-contain"
                              >
                                    <img src={kmcLogo} alt="" />
                                    <img src={nepalGovLogo} alt="" />
                                    <img
                                          className="!w-[2.5rem] object-contain"
                                          src="https://kathmandu.gov.np/wp-content/themes/kmc-theme/images/flag-nepal.gif"
                                          alt=""
                                    />
                              </section>
                        )}

                        <section className="flex gap-4 justify-center items-center max-w-fit">
                              <RegisterButton
                                    extraClassName="hidden 
                                          sm:flex
                                    "
                              />

                              <NavMenuButton />
                        </section>
                  </aside>
            </nav>
      );
}

export default TopNav;
