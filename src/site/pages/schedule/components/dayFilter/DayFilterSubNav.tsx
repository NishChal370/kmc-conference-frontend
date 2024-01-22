import NavItemButton from "./NavItemButton";
import { IDayThemeMinResponse } from "@/admin/model/dayTheme/dayThemeModel";

interface IDayFilterSubNav {
      isOpen: boolean;
      selectedDayId: string | undefined;
      selectedThemeId: string | undefined;
      themeDetail: IDayThemeMinResponse;
      navigateHandler: (datId: number, themeId: number) => () => void;
}
function DayFilterSubNav({
      isOpen,
      selectedDayId,
      selectedThemeId,
      themeDetail,
      navigateHandler,
}: IDayFilterSubNav) {
      return (
            <section
                  className={`flex w-full h-full duration-700 ease-in-out px-2
                        ${isOpen ? "h-[10rem] pt-4 pb-2 md:pt-7" : "max-h-[10rem]"}
                  `}
            >
                  <div
                        className={`flex-col gap-5 w-full h-fit duration-1000 ease-in-out
                              ${isOpen ? "flex" : "hidden"}
                        `}
                  >
                        {themeDetail.map(({ id, title, day }) => (
                              <NavItemButton
                                    key={id}
                                    isActive={
                                          selectedDayId && selectedThemeId
                                                ? day.dayId === +selectedDayId && id === +selectedThemeId
                                                : false
                                    }
                                    label={title}
                                    clickHandler={navigateHandler(day.dayId, id)}
                              />
                        ))}
                  </div>
            </section>
      );
}

export default DayFilterSubNav;
