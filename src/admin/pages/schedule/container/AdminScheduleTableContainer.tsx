import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import ErrorMessage from "@/shared/errorMessage/ErrorMessage";
import AdminScheduleTable from "../components/AdminScheduleTable";
import NotFoundMessage from "@/shared/errorMessage/NotFoundMessage";
import { scheduleSliceAction, schedulesSliceState } from "../feature/scheduleSlice";
import { useURLQueryHandler } from "@/hooks/urlQueryHandler";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useScheduleApi from "@/admin/hooks/schedule/useScheduleApi";
import { Status } from "@/enum/commonEnum";
import { IScheduleModel } from "@/admin/model/schedule/scheduleModel";
import { ADMIN_SCHEDULE_SORT_VALUE } from "../data/adminScheduleSortValue";

interface IAdminScheduleTableContainer {
      openEditModal: (editingData: { editingData: IScheduleModel }) => void;
      openTopicAddModal: (data: IScheduleModel["id"]) => void;
}

function AdminScheduleTableContainer({ openEditModal, openTopicAddModal }: IAdminScheduleTableContainer) {
      const params = useParams();
      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(schedulesSliceState);

      const { getSchedules, deleteAdminSchedule } = useScheduleApi();

      const { getSearchParmaValues, clearAllSearchParam, changeQuerySortBy } = useURLQueryHandler();

      const { currentPageNumber, getCurrentOrderBy, getSearchParamSortBy } = getSearchParmaValues({
            sortingValueList: ADMIN_SCHEDULE_SORT_VALUE,
      });

      const themeId = params["themeId"] ? parseInt(params["themeId"]) : undefined;

      const fetchData = () => {
            getSchedules({
                  themeId: themeId,
                  pageNumber: currentPageNumber,
                  order: getCurrentOrderBy(),
                  sortBy: getSearchParamSortBy(),
            });
      };

      const editButtonHandler = (data: { editingData: IScheduleModel }) => () => {
            openEditModal(data);
      };

      const openTopicAddModalHandler = (data: IScheduleModel["id"]) => () => {
            openTopicAddModal(data);
      };

      const sortHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            const currentSortValue = e.currentTarget.dataset.value;

            if (currentSortValue) changeQuerySortBy({ sortBy: currentSortValue });
      };

      useEffect(() => {
            fetchData();
      }, [search, themeId]);

      useEffect(() => {
            return () => {
                  dispatch(scheduleSliceAction.resetScheduleSlice());
            };
      }, []);

      return (
            <>
                  <AdminScheduleTable
                        status={status}
                        sortHandler={sortHandler}
                        sortDetail={{ getOrderBy: getCurrentOrderBy, getSort: getSearchParamSortBy }}
                        currentPageNumber={currentPageNumber}
                        schedules={data.sessions}
                        editButtonHandler={editButtonHandler}
                        deleteScheduleHandler={deleteAdminSchedule}
                        openTopicAddModalHandler={openTopicAddModalHandler}
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

export default AdminScheduleTableContainer;
