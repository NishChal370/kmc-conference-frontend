import { useEffect } from "react";
import {
      IAppliedSpeakerDetailSearch,
      IAppliedSpeakerSessionModel,
      IAppliedSpeakerScheduleDeleteReq,
} from "@/admin/model/appliedHistory/appliedHistoryModel";
import { useAppSelector } from "@/app/hooks";
import { appliedHistorySliceState } from "../feature/appliedHistorySlice";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import AdminAppliedHistory from "../components/AdminAppliedHistory";
import AdminViewAppliedSpeakerModalContainer from "./AdminViewAppliedSpeakerModalContainer";

function AppliedSpeakingSessionContainer() {
      const [viewModal, openViewModal, closeViewModal] =
            useExtraModal<IAppliedSpeakerDetailSearch["sessionId"]>();

      const { status, error, data, isToRefetch } = useAppSelector(appliedHistorySliceState).appliedSpeaker;

      const { getApplicationSpeaker, deleteApplicationSpeakerSchedule } = useAppliedHistoryApi();

      const viewDetailHandler = (sessionId: IAppliedSpeakerSessionModel["sessionId"]) => () => {
            openViewModal(sessionId);
      };

      const deleteScheduleHandler = (sessionId: IAppliedSpeakerScheduleDeleteReq["sessionId"]) => () => {
            deleteApplicationSpeakerSchedule({ sessionId });
      };

      useEffect(() => {
            getApplicationSpeaker();
      }, [isToRefetch]);

      return (
            <>
                  <AdminAppliedHistory
                        pageTitle="Session History"
                        status={status}
                        error={error}
                        data={data}
                        deleteButtonHandler={deleteScheduleHandler}
                        viewDetail={viewDetailHandler}
                  />

                  {viewModal?.isOpen && viewModal.data && (
                        <AdminViewAppliedSpeakerModalContainer
                              closeModalHandler={closeViewModal}
                              selectedSessionId={viewModal.data}
                        />
                  )}
            </>
      );
}

export default AppliedSpeakingSessionContainer;
