import { ICON } from "@/constants/icon";
import AppIcon from "@/shared/icon/AppIcon";

interface INavDayButton {
      title: string;
      date: string;
      isSuNavOpen: boolean;
      subNavHandler: () => void;
}
function NavDayButton({ title, date, isSuNavOpen, subNavHandler }: INavDayButton) {
      return (
            <>
                  <button
                        type="button"
                        className={`flex items-center w-full min-w-[12rem] h-fit px-4 py-4  rounded-md
                              ${isSuNavOpen ? "bg-primary text-white" : "border bg-transparent text-primary"}
                        `}
                        onClick={subNavHandler}
                  >
                        <aside className="flex flex-col w-full items-start justify-center text-start">
                              <p className="text-2xl font-bold">{title}</p>
                              <p className="text-sm">{date}</p>
                        </aside>

                        <AppIcon
                              name="down-arrow"
                              size={ICON.size + 10}
                              className={`duration-700 ease-in-out ${
                                    isSuNavOpen ? "rotate-180" : "rotate-0"
                              }`}
                        />
                  </button>
            </>
      );
}

export default NavDayButton;
