import AppIcon from "@/shared/icon/AppIcon";
import { ISideNavDetail } from "@admin/model/sideNav/sideNavModel";

interface INavHeader {
      title: ISideNavDetail["title"];
      mainIcon: ISideNavDetail["Icon"];
      haveSubNav: { have?: boolean; isOpen?: boolean };
      isSubNav: boolean;
      isActive: boolean;
      buttonClickHandler: () => void;
}

function NavHeader({ title, mainIcon, haveSubNav, isSubNav, isActive, buttonClickHandler }: INavHeader) {
      return (
            <button
                  role="button"
                  className={`w-full h-7 px-4 flex gap-2 items-center
                        transition-transform duration-[4000ms] ease-in-out
                        hover:text-primary
                        md:justify-center md:px-0
                        md:group-hover:justify-between md:group-hover:px-4
                        ${isActive ? "text-primary border-primary font-semibold" : "border-white"}
                        ${!isSubNav && "border-l-[3.9px]"}
                  `}
                  onClick={buttonClickHandler}
            >
                  <AppIcon name={mainIcon} />

                  <span
                        className={`w-full flex gap-2 items-center text-start text-sm
                              md:group-hover:flex md:hidden 
                              ${isSubNav ? "justify-end text-end" : "justify-between"}
                        `}
                  >
                        <h4>{title}</h4>

                        {haveSubNav.have && (
                              <AppIcon
                                    name="down-arrow"
                                    className={`
                                          ${haveSubNav.isOpen ? "rotate-180" : "rotate-0"}
                                    `}
                              />
                        )}
                  </span>
            </button>
      );
}

export default NavHeader;
