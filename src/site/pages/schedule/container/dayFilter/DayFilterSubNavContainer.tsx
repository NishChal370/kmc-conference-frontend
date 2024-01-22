import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDayThemeApi from "@/admin/hooks/dayTheme/useDayThemeApi";
import { dayThemesMinState } from "@/admin/pages/dayTheme/feature/dayThemeSlice";
import { useAppSelector } from "@/app/hooks";
import { SCHEDULE_PATH } from "@/site/constants/routePath";
import DayFilterSubNav from "../../components/dayFilter/DayFilterSubNav";
import { Status } from "@/enum/commonEnum";
import LoadingAnimation from "@/shared/loading/LoadingAnimation";
import { ErrorMessage } from "@/shared/errorMessage";

interface IDayFilterSubNavContainer {
      isOpen: boolean;
      dateId?: number;
}

function DayFilterSubNavContainer({ isOpen, dateId }: IDayFilterSubNavContainer) {
      const navigate = useNavigate();
      const { getDayThemesMin } = useDayThemeApi();

      const { dayId: paramDayId, themeId: paramThemeId } = useParams();

      const { data, status } = useAppSelector(dayThemesMinState);

      const navigateHandler = (datId: number, themeId: number) => () => {
            navigate(SCHEDULE_PATH.schedule.full({ dayId: datId, themeId: themeId }));
      };

      useEffect(() => {
            if (!isOpen || !dateId) return;

            getDayThemesMin({ dayId: dateId });
      }, [isOpen, dateId]);

      return (
            <>
                  <DayFilterSubNav
                        isOpen={isOpen && status === Status.SUCCEEDED}
                        selectedDayId={paramDayId}
                        selectedThemeId={paramThemeId}
                        themeDetail={data}
                        navigateHandler={navigateHandler}
                  />

                  {isOpen && status === Status.FAILED && (
                        <span className="w-full flex flex-col gap-1 pt-4 justify-center items-center">
                              <ErrorMessage needTopPadding={false} />
                        </span>
                  )}

                  {isOpen && status === Status.LOADING && (
                        <span className="w-full flex flex-col gap-1 pt-4 justify-center items-center">
                              <p className=" font-medium">Getting themes</p>
                              <LoadingAnimation />
                        </span>
                  )}

                  {isOpen && status === Status.DATA_NOT_FOUND && (
                        <span className="w-full flex  gap-1 pt-4 justify-center items-center text-center">
                              <p className=" font-medium text-error">Could not find themes</p>
                        </span>
                  )}
            </>
      );
}

export default DayFilterSubNavContainer;
