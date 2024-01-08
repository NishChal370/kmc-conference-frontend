import { ICON } from "@/constants/icon";
import AppIcon from "@/shared/icon/AppIcon";

interface IViewMoreButton {
      name?: string;
      clickHandler: () => void;
}

function ViewMoreButton({ name, clickHandler }: IViewMoreButton) {
      return (
            <button
                  type="button"
                  onClick={clickHandler}
                  className="group self-start flex justify-center items-center text-red text-sm font-semibold tracking-wider uppercase"
            >
                  {name ? name : "learn more"}
                  <AppIcon
                        name="arrow-right"
                        size={ICON.size + 8}
                        className="text-red transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                  />
            </button>
      );
}

export default ViewMoreButton;
