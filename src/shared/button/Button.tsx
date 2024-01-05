import AppIcon from "../icon/AppIcon";
import { ICON } from "@/constants/icon";
import { IButton } from "@/models/button/buttonModel";

function Button({
      title,
      type = "button",
      onClickHandler,
      variant = "filled",
      extraClassName,
      iconName,
}: IButton) {
      const defaultClassName = {
            filled: "group flex items-center gap-1.5 justify-center tracking-wider bg-primary px-5 py-2 text-white text-sm uppercase font-semibold rounded-md w-full active:shadow-button",
            lightFilled:
                  "group flex items-center gap-1.5 bg-primary/10  text-primary py-2.5 px-6 rounded-md uppercase tracking-wider w-full active:shadow-button",
            outlined: "group flex items-center justify-center font-semibold text-center gap-1.5 bg-transparent text-primary border border-primary py-2 px-6 rounded-md uppercase tracking-wider w-full active:shadow-button",
            text: `group flex items-center gap-1.5 text-primary w-fit active:text-primary/60 ${
                  !iconName ? "underline" : ""
            }`,
      };

      return (
            <button
                  type={type}
                  className={defaultClassName[variant] + " " + extraClassName}
                  onClick={onClickHandler}
            >
                  {iconName ? (
                        <AppIcon
                              name={iconName}
                              className="transition-transform duration-300 ease-in-out group-hover:-translate-x-2"
                              size={ICON.size + 2}
                        />
                  ) : undefined}

                  {title}
            </button>
      );
}

export default Button;
