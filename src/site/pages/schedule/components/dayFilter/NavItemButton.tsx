import AppIcon from "@/shared/icon/AppIcon";

interface INavItemButton {
      isActive: boolean;
      label: string;
      clickHandler: () => void;
}
function NavItemButton({ isActive, label, clickHandler }: INavItemButton) {
      return (
            <button
                  type="button"
                  className={`w-full flex items-center justify-between text-base
                        ${isActive ? "text-primary font-medium" : "text-default"}
                  `}
                  onClick={clickHandler}
            >
                  <span className="flex items-center w-full text-start gap-2">
                        <div
                              className={`h-3 w-3 rounded-full border-2   
                                    ${isActive ? "border-primary" : "border-gray-600"}
                              `}
                        ></div>
                        <p className="max-w-full line-clamp-1 w-full">{label}</p>
                  </span>

                  <AppIcon name="down-arrow" className=" -rotate-90 w-fit" />
            </button>
      );
}

export default NavItemButton;
