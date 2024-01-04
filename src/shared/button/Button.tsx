import { IButton } from "@/models/button/buttonModel";

function Button({ title, type = "button", onClickHandler, variant = "filled", extraClassName }: IButton) {
      const defaultClassName = {
            filled: "tracking-wider bg-primary text-white py-2.5 px-6 rounded-md uppercase tracking-wider w-full active:shadow-button",
            lightFilled:
                  "bg-primary/10 text-primary py-2.5 px-6 rounded-md uppercase tracking-wider w-full active:shadow-button",
            outlined: "bg-transparent text-primary border border-primary py-2 px-6 rounded-md uppercase tracking-wider w-full active:shadow-button",
            text: `text-primary w-fit active:text-primary/60  ${!extraClassName ? "underline " : ""}`,
      };

      return (
            <button
                  type={type}
                  className={defaultClassName[variant] + extraClassName}
                  onClick={onClickHandler}
            >
                  {title}
            </button>
      );
}

export default Button;
