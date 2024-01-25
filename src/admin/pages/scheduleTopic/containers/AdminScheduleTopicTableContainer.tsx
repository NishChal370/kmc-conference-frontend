import { useEffect } from "react";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import ErrorMessage from "@/shared/errorMessage/ErrorMessage";
import NotFoundMessage from "@/shared/errorMessage/NotFoundMessage";
import AdminScheduleTopicTable from "../components/AdminScheduleTopicTable";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useScheduleTopicApi from "@/admin/hooks/scheduleTopic/useScheduleTopicApi";
import { Status } from "@/enum/commonEnum";
import {
      IScheduleTopicDeleteRequest,
      IScheduleTopicModel,
} from "@/admin/model/scheduleTopic/scheduleTopicModel";
import { scheduleTopicSliceAction, scheduleTopicsSliceState } from "../feature/scheduleTopicSlice";

interface IAdminScheduleTopicTableContainer {
      isVisible: boolean;
      scheduleId: IScheduleTopicModel["id"];
      openEditModal: ({ editingData }: { editingData: IScheduleTopicModel }) => void;
      openViewModal: ({ viewingData }: { viewingData: IScheduleTopicModel }) => void;
}
function AdminScheduleTopicTableContainer({
      isVisible,
      scheduleId,
      openEditModal,
      openViewModal,
}: IAdminScheduleTopicTableContainer) {
      const dispatch = useAppDispatch();

      const { status, scheduleTopics, error, isToRefetch } = useAppSelector(scheduleTopicsSliceState);

      const { getScheduleTopics, deleteAdminScheduleTopic } = useScheduleTopicApi();

      const fetchData = () => {
            getScheduleTopics({ sessionId: scheduleId });
      };

      const editButtonHandler = (data: { editingData: IScheduleTopicModel }) => () => {
            openEditModal(data);
      };

      const deleteButtonHandler = (conferenceDayDetail: IScheduleTopicDeleteRequest) => () => {
            deleteAdminScheduleTopic(conferenceDayDetail);
      };

      const viewButtonHandler = (viewingData: IScheduleTopicModel) => () => {
            openViewModal({ viewingData });
      };

      useEffect(() => {
            if (!isVisible) return;

            fetchData();
      }, [isToRefetch, isVisible]);

      useEffect(() => {
            return () => {
                  dispatch(scheduleTopicSliceAction.resetScheduleTopicsSlice());
            };
      }, []);

      return (
            <>
                  <AdminScheduleTopicTable
                        status={status}
                        scheduleTopics={scheduleTopics.sessionTopics}
                        editButtonHandler={editButtonHandler}
                        viewButtonHandler={viewButtonHandler}
                        deleteButtonHandler={deleteButtonHandler}
                  />

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && (
                        <LoadingMessage needHeader={false} />
                  )}
            </>
      );
}

export default AdminScheduleTopicTableContainer;
