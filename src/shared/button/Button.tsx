import AppIcon from "../icon/AppIcon";
import { ICON } from "@/constants/icon";
import { IButton } from "@/models/button/buttonModel";

function Button({
      id = "app-button",
      title,
      suggestion,
      type = "button",
      onClickHandler,
      variant = "filled",
      extraClassName,
      iconName,
      disable = false,
}: IButton) {
      const defaultClassName = {
            filled: "group flex items-center gap-1.5 justify-center tracking-wider bg-primary px-6 py-1.5 text-white text-sm border border-primary uppercase font-semibold rounded-md w-full active:shadow-button",
            lightFilled:
                  "group flex items-center gap-1.5 justify-center tracking-wider bg-primary/10 px-6 py-1.5 text-primary text-sm border border-primary/5 uppercase font-semibold rounded-md w-full active:shadow-button",
            outlined: "group flex items-center gap-1.5 justify-center tracking-wider bg-transparent px-6 py-1.5 text-primary text-sm font-semibold border border-primary rounded-md w-full active:shadow-button",
            text: `group flex items-center gap-1.5 text-primary w-fit active:text-primary/60 ${
                  !iconName ? "hover:underline" : ""
            }`,
      };

      return (
            <button
                  id={id}
                  title={suggestion ?? ""}
                  type={type}
                  className={defaultClassName[variant] + " " + extraClassName}
                  onClick={onClickHandler}
                  disabled={disable}
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
