import { useEffect } from "react";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import CallForPaperScheduleTable from "../component/CallForPaperScheduleTable";
import {
      callForPaperScheduleAction,
      callForPaperScheduleSliceState,
} from "../feature/callForPaperScheduleSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useCallForPaperScheduleApi from "@/admin/hooks/callForPaperSchedule/useCallForPaperScheduleApi";
import { Status } from "@/enum/commonEnum";
import {
      ICallForPaperDeleteRequest,
      ICallForPaperScheduleApprovalStatusChangeModal,
      ICallForPaperScheduleModel,
      ICallForPaperScheduleViewModal,
} from "@/admin/model/callForPaperSchedule/callForPaperScheduleModel";

interface ICallForPaperScheduleTableContainer {
      isVisible: boolean;
      callForPaperId: ICallForPaperScheduleModel["callForPaperId"];
      openViewModal: (data: ICallForPaperScheduleViewModal) => void;
      openApprovalModal: (data: ICallForPaperScheduleApprovalStatusChangeModal) => void;
}

function CallForPaperScheduleTableContainer({
      isVisible,
      callForPaperId,
      openViewModal,
      openApprovalModal,
}: ICallForPaperScheduleTableContainer) {
      const dispatch = useAppDispatch();

      const { status, data, error, isToRefetch } = useAppSelector(callForPaperScheduleSliceState);

      const { getCallForPaperSchedule, deleteCallForPaperSchedule } = useCallForPaperScheduleApi();

      const fetchData = () => {
            getCallForPaperSchedule({ callId: callForPaperId });
      };

      const openViewModalHandler = (viewingData: ICallForPaperScheduleViewModal) => () => {
            openViewModal(viewingData);
      };

      const openApprovalModalHandler =
            (approvalDetail: ICallForPaperScheduleApprovalStatusChangeModal) => () => {
                  openApprovalModal(approvalDetail);
            };

      const deleteCallForPaperScheduleHandler = (detail: ICallForPaperDeleteRequest) => () => {
            deleteCallForPaperSchedule(detail);
      };

      useEffect(() => {
            if (!isVisible) return;

            fetchData();
      }, [isToRefetch, isVisible]);

      useEffect(() => {
            return () => {
                  dispatch(callForPaperScheduleAction.resetCallForPaperScheduleSlice());
            };
      }, []);

      return (
            <>
                  <CallForPaperScheduleTable
                        status={status}
                        callForPaperSchedules={data}
                        openApprovalModalHandler={openApprovalModalHandler}
                        openViewModalHandler={openViewModalHandler}
                        deleteCallForPaperScheduleHandler={deleteCallForPaperScheduleHandler}
                  />

                  {status === Status.FAILED && (
                        <ErrorMessage needTopPadding={false} title={error?.title} detail={error?.detail} />
                  )}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage needTopPadding={false} />}

                  {(status === Status.IDEL || status === Status.LOADING) && (
                        <LoadingMessage needHeader={false} />
                  )}
            </>
      );
}

export default CallForPaperScheduleTableContainer;
