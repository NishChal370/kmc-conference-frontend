import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import ErrorMessage from "@/shared/errorMessage/ErrorMessage";
import AdminDayThemeTable from "../components/AdminDayThemeTable";
import NotFoundMessage from "@/shared/errorMessage/NotFoundMessage";
import { dayThemeSliceAction, dayThemesState } from "../feature/dayThemeSlice";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useDayThemeApi from "@/admin/hooks/dayTheme/useDayThemeApi";
import { ADMIN_SCHEDULE_PATH } from "@/admin/constants/routePath/adminSchedulePath";
import { Status } from "@/enum/commonEnum";
import { IDayThemeDeleteRequest, IDayThemeModel } from "@/admin/model/dayTheme/dayThemeModel";
import { dayThemeSortValue } from "../data/dayThemeSortInfo";

interface IAdminDayThemeTableContainer {
      openViewModal: ({ viewingData }: { viewingData: IDayThemeModel }) => void;
      openEditModal: ({ editingData }: { editingData: IDayThemeModel }) => void;
}

function AdminDayThemeTableContainer({ openEditModal, openViewModal }: IAdminDayThemeTableContainer) {
      const params = useParams();

      const navigate = useNavigate();

      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(dayThemesState);

      const { getDayThemes, deleteAdminDayTheme } = useDayThemeApi();

      const { getSearchParmaValues, clearAllSearchParam, changeQuerySortBy } = useURLQueryHandler();

      const { currentPageNumber, getSearchParamSortBy, getCurrentOrderBy } = getSearchParmaValues({
            sortingValueList: dayThemeSortValue,
      });

      const selectedDay = params["dayId"];

      const fetchData = () => {
            getDayThemes({
                  dayId: selectedDay ? parseInt(selectedDay) : undefined,
                  pageNumber: currentPageNumber,
                  sortBy: getSearchParamSortBy(),
                  order: getCurrentOrderBy(),
            });
      };

      const openViewModalHandler = (viewingData: IDayThemeModel) => () => {
            openViewModal({ viewingData });
      };
      const openEditModalHandler = (editingData: IDayThemeModel) => () => {
            openEditModal({ editingData });
      };

      const deleteHandler = (deletingData: IDayThemeDeleteRequest) => () => {
            deleteAdminDayTheme(deletingData);
      };

      const viewScheduleHandler = (themeId: IDayThemeModel["id"]) => () => {
            navigate(ADMIN_SCHEDULE_PATH.schedule.full(themeId));
      };

      const sortHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            const currentSortValue = e.currentTarget.dataset.value;

            if (currentSortValue) changeQuerySortBy({ sortBy: currentSortValue });
      };

      useEffect(() => {
            fetchData();
      }, [search, params["dayId"]]);

      useEffect(() => {
            return () => {
                  dispatch(dayThemeSliceAction.resetDayThemesSlice());
            };
      }, []);

      return (
            <>
                  <AdminDayThemeTable
                        status={status}
                        currentPageNumber={currentPageNumber}
                        dayThemes={data.themes}
                        deleteHandler={deleteHandler}
                        sortHandler={sortHandler}
                        sortDetail={{ getOrderBy: getCurrentOrderBy, getSort: getSearchParamSortBy }}
                        openViewModalHandler={openViewModalHandler}
                        openEditModalHandler={openEditModalHandler}
                        viewScheduleHandler={viewScheduleHandler}
                  />

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.title} detail={error?.detail} traceId={error?.traceId} />
                  )}

                  {status === Status.DATA_NOT_FOUND && (
                        <NotFoundMessage viewAllHandler={clearAllSearchParam} buttonTitle="Reload" />
                  )}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminDayThemeTableContainer;
