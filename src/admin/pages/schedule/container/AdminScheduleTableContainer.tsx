import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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

interface IAdminScheduleTableContainer {
      openEditModal: (editingData: { editingData: IScheduleModel }) => void;
}

function AdminScheduleTableContainer({ openEditModal }: IAdminScheduleTableContainer) {
      const { search } = useLocation();

      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(schedulesSliceState);

      const { getSchedules, deleteAdminSchedule } = useScheduleApi();

      const { getSearchParmaValues, clearAllSearchParam } = useURLQueryHandler();

      const { currentPageNumber } = getSearchParmaValues();

      const fetchData = () => {
            getSchedules({ pageNumber: currentPageNumber });
      };

      const editButtonHandler = (data: { editingData: IScheduleModel }) => () => {
            openEditModal(data);
      };

      useEffect(() => {
            fetchData();
      }, [search]);

      useEffect(() => {
            return () => {
                  dispatch(scheduleSliceAction.resetScheduleSlice());
            };
      }, []);

      return (
            <>
                  <AdminScheduleTable
                        status={status}
                        schedules={data.sessions}
                        editButtonHandler={editButtonHandler}
                        deleteScheduleHandler={deleteAdminSchedule}
                  />

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && (
                        <NotFoundMessage viewAllHandler={clearAllSearchParam} buttonTitle="Reload" />
                  )}

                  {(status === Status.IDEL || status === Status.LOADING) && <LoadingMessage />}
            </>
      );
}

export default AdminScheduleTableContainer;
