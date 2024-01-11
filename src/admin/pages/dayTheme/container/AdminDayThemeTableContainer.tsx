import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import ErrorMessage from "@/shared/errorMessage/ErrorMessage";
import AdminDayThemeTable from "../components/AdminDayThemeTable";
import NotFoundMessage from "@/shared/errorMessage/NotFoundMessage";
import { dayThemeSliceAction, dayThemesState } from "../feature/dayThemeSlice";
import { Status } from "@/enum/commonEnum";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useDayThemeApi from "@/admin/hooks/dayTheme/useDayThemeApi";

function AdminDayThemeTableContainer() {
      const params = useParams();

      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(dayThemesState);

      const { getDayThemes } = useDayThemeApi();

      const { getSearchParmaValues, clearAllSearchParam } = useURLQueryHandler();

      const { currentPageNumber } = getSearchParmaValues();

      const fetchData = () => {
            const selectedDay = params["dayId"];
            getDayThemes({
                  dayId: selectedDay ? parseInt(selectedDay) : undefined,
                  pageNumber: currentPageNumber,
            });
      };

      useEffect(() => {
            fetchData();
      }, [search]);

      useEffect(() => {
            return () => {
                  dispatch(dayThemeSliceAction.resetDayThemesSlice());
            };
      }, []);

      return (
            <>
                  <AdminDayThemeTable status={status} dayThemes={data.themes} />

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && (
                        <NotFoundMessage viewAllHandler={clearAllSearchParam} buttonTitle="Reload" />
                  )}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminDayThemeTableContainer;
