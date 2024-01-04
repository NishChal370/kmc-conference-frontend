import AppIcon from "../icon/AppIcon";
import { ICON } from "@/constants/icon";

interface IBackButton {
      containerClassName?: string;
      name?: string;
}

function BackButton({ containerClassName, name = "Go Back" }: IBackButton) {
      return (
            <section
                  className={`absolute top-0 w-full bg-[rgb(234,241,250 text-[#2f82f7bb]  py-4 px-2 ${containerClassName}`}
            >
                  <button
                        type="button"
                        className="group px-4 rounded-md py-1 text-md font-semibold tracking-wide flex gap-1.5 "
                  >
                        <AppIcon
                              name="arrow-right"
                              className="rotate-180 transition-transform duration-300 ease-in-out group-hover:-translate-x-2"
                              size={ICON.size + 2}
                        />
                        {name}
                  </button>
            </section>
      );
}

export default BackButton;
