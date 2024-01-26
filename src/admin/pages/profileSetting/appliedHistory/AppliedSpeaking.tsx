import { useEffect } from "react";
import AdminAppliedHistory from "./components/AdminAppliedHistory";
import { useAppSelector } from "@/app/hooks";
import { appliedHistorySliceState } from "./feature/appliedHistorySlice";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import {
      IAppliedSpeakerDetailSearch,
      IAppliedSpeakerModel,
      IAppliedSpeakerScheduleDeleteReq,
} from "@/admin/model/appliedHistory/appliedHistoryModel";
import AdminViewAppliedSpeakerModalContainer from "./containers/AdminViewAppliedSpeakerModalContainer";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";

function AppliedSpeaking() {
      const [viewModal, openViewModal, closeViewModal] =
            useExtraModal<IAppliedSpeakerDetailSearch["sessionId"]>();

      const { status, error, data, isToRefetch } = useAppSelector(appliedHistorySliceState).appliedSpeaker;

      const { getApplicationSpeaker, deleteApplicationSpeakerSchedule } = useAppliedHistoryApi();

      const viewDetailHandler = (sessionId: IAppliedSpeakerModel["sessionId"]) => () => {
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
                        pageTitle="Speaking History"
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

export default AppliedSpeaking;
