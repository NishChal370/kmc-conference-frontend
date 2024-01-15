import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { FilterNotFoundMessage, FilterErrorMessage } from "@/shared/errorMessage";
import LoadingAnimation from "@/shared/loading/LoadingAnimation";
import AdminScheduleThemeFilter from "../components/AdminScheduleThemeFilter";
import useDayThemeApi from "@/admin/hooks/dayTheme/useDayThemeApi";
import { Status } from "@/enum/commonEnum";
import { IRadioButtonGroupOptions } from "@/admin/model/button/radioButtonGroupModel";
import { dayThemeSliceAction, dayThemesMinState } from "../../dayTheme/feature/dayThemeSlice";

function AdminScheduleThemeFilterContainer() {
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(dayThemesMinState);

      const { getDayThemesMin } = useDayThemeApi();

      const options: IRadioButtonGroupOptions<number> = useMemo(() => {
            let baseDate = "";
            let dayNumber = 0;
            let themeNumber = 0;

            const manipulatedOptions: IRadioButtonGroupOptions<number> = data.map((item) => {
                  if (baseDate !== item.day.date) {
                        dayNumber += 1;
                        themeNumber = 1;

                        baseDate = item.day.date;
                  } else {
                        themeNumber += 1;
                  }

                  return {
                        id: item.id.toString(),
                        value: item.id,
                        label: `D${dayNumber} Theme ${themeNumber} ${item.title}`,
                        title: `Day ${dayNumber} theme: ${item.title}`,
                  };
            });

            manipulatedOptions.unshift({ id: "all", value: undefined, label: "All", title: "All" });

            return manipulatedOptions;
      }, [data]);

      useEffect(() => {
            getDayThemesMin();

            return () => {
                  dispatch(dayThemeSliceAction.resetDayThemesMin());
            };
      }, []);

      return (
            <>
                  {status === Status.SUCCEEDED && <AdminScheduleThemeFilter options={options} />}

                  {status !== Status.SUCCEEDED && (
                        <span className="flex self-start w-[22%]">
                              {status === Status.FAILED && <FilterErrorMessage />}

                              {status === Status.DATA_NOT_FOUND && <FilterNotFoundMessage />}

                              {(status === Status.IDEL || status === Status.LOADING) && <LoadingAnimation />}
                        </span>
                  )}
            </>
      );
}

export default AdminScheduleThemeFilterContainer;
