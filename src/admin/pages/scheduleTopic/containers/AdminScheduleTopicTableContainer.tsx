import { useEffect } from "react";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import ErrorMessage from "@/shared/errorMessage/ErrorMessage";
import NotFoundMessage from "@/shared/errorMessage/NotFoundMessage";
import AdminScheduleTopicTable from "../components/AdminScheduleTopicTable";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useScheduleTopicApi from "@/admin/hooks/scheduleTopic/useScheduleTopicApi";
import { Status } from "@/enum/commonEnum";
import { IScheduleTopicModel } from "@/admin/model/scheduleTopic/scheduleTopicModel";
import { scheduleTopicSliceAction, scheduleTopicsSliceState } from "../feature/scheduleTopicSlice";

interface IAdminScheduleTopicTableContainer {
      isVisible: boolean;
      scheduleId: IScheduleTopicModel["id"];
}
function AdminScheduleTopicTableContainer({ isVisible, scheduleId }: IAdminScheduleTopicTableContainer) {
      const dispatch = useAppDispatch();

      const { status, scheduleTopics, error } = useAppSelector(scheduleTopicsSliceState);

      const { getScheduleTopics } = useScheduleTopicApi();

      const fetchData = () => {
            getScheduleTopics({ sessionId: scheduleId });
      };

      useEffect(() => {
            if (isVisible) {
                  fetchData();
                  return;
            }

            dispatch(scheduleTopicSliceAction.resetScheduleTopicsSlice());
      }, [isVisible]);

      return (
            <>
                  <AdminScheduleTopicTable status={status} scheduleTopics={scheduleTopics.sessionTopics} />

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && (
                        <LoadingMessage needHeader={false} />
                  )}
            </>
      );
}

export default AdminScheduleTopicTableContainer;
