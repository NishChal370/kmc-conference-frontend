import { useEffect } from "react";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import SpeakerScheduleTable from "../component/SpeakerScheduleTable";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useSpeakerScheduleApi from "@/admin/hooks/speakerSchedule/useSpeakerScheduleApi";
import { Status } from "@/enum/commonEnum";
import { ISpeakerBasicModel } from "@/admin/model/speaker/speakerModel";
import { speakerScheduleSliceAction, speakerScheduleSliceState } from "../feature/speakerScheduleSlice";
import {
      ISpeakerScheduleViewModal,
      ISpeakerScheduleDeleteAdminReq,
      ISpeakerScheduleApprovalStatusChangeModal,
} from "@/admin/model/speakerSchedule/speakerScheduleModel";

interface ISpeakerScheduleTableContainer {
      isVisible: boolean;
      speakerId: ISpeakerBasicModel["id"];
      openViewModal: (data: ISpeakerScheduleViewModal) => void;
      openApprovalStatusModal: (data: ISpeakerScheduleApprovalStatusChangeModal) => void;
}

function SpeakerScheduleTableContainer({
      isVisible,
      speakerId,
      openViewModal,
      openApprovalStatusModal,
}: ISpeakerScheduleTableContainer) {
      const dispatch = useAppDispatch();

      const { status, data, error, isToRefetch } = useAppSelector(speakerScheduleSliceState);

      const { getSpeakerSchedule, deleteSpeakerScheduleByAdmin } = useSpeakerScheduleApi();

      const fetchData = () => {
            getSpeakerSchedule({ speakerId });
      };

      const openViewModalHandler = (detail: ISpeakerScheduleViewModal) => () => {
            openViewModal(detail);
      };

      const openApprovalStatusModalHandler = (data: ISpeakerScheduleApprovalStatusChangeModal) => () => {
            openApprovalStatusModal(data);
      };

      const deleteSessionHandler = (sessionId: ISpeakerScheduleDeleteAdminReq["sessionId"]) => () => {
            deleteSpeakerScheduleByAdmin({ sessionId: sessionId, speakerId });
      };

      useEffect(() => {
            if (!isVisible) return;

            fetchData();
      }, [isToRefetch, isVisible]);

      useEffect(() => {
            return () => {
                  dispatch(speakerScheduleSliceAction.resetSpeakerScheduleSlice());
            };
      }, []);
      return (
            <>
                  <SpeakerScheduleTable
                        status={status}
                        speakerSchedules={data}
                        deleteSessionHandler={deleteSessionHandler}
                        openViewModalHandler={openViewModalHandler}
                        openApprovalStatusModalHandler={openApprovalStatusModalHandler}
                  />

                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                  {(status === Status.IDEL || status === Status.LOADING) && (
                        <LoadingMessage needHeader={false} />
                  )}
            </>
      );
}

export default SpeakerScheduleTableContainer;
