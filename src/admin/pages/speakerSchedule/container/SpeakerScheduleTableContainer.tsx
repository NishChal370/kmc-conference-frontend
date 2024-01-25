import { useEffect } from "react";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import SpeakerScheduleTable from "../component/SpeakerScheduleTable";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useSpeakerScheduleApi from "@/admin/hooks/speakerSchedule/useSpeakerScheduleApi";
import { Status } from "@/enum/commonEnum";
import { ISpeakerBasicModel } from "@/admin/model/speaker/speakerModel";
import { speakerScheduleSliceAction, speakerScheduleSliceState } from "../feature/speakerScheduleSlice";
import { ISpeakerScheduleApprovalStatusChangeModal } from "@/admin/model/speakerSchedule/speakerScheduleModel";

interface ISpeakerScheduleTableContainer {
      isVisible: boolean;
      speakerId: ISpeakerBasicModel["id"];
      openApprovalStatusModal: (data: ISpeakerScheduleApprovalStatusChangeModal) => void;
}

function SpeakerScheduleTableContainer({
      isVisible,
      speakerId,
      openApprovalStatusModal,
}: ISpeakerScheduleTableContainer) {
      const dispatch = useAppDispatch();

      const { status, data, error, isToRefetch } = useAppSelector(speakerScheduleSliceState);

      const { getSpeakerScheduleBasic } = useSpeakerScheduleApi();

      const fetchData = () => {
            getSpeakerScheduleBasic({ speakerId });
      };

      const openApprovalStatusModalHandler = (data: ISpeakerScheduleApprovalStatusChangeModal) => () => {
            openApprovalStatusModal(data);
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
