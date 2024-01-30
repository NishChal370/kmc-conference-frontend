import { useEffect } from "react";
import {
      IAppliedSpeakerSessionDetailSearch,
      IAppliedSpeakerSessionModel,
      IAppliedSpeakerScheduleDeleteReq,
} from "@/admin/model/appliedHistory/appliedHistoryModel";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { appliedHistorySliceAction, appliedHistorySliceState } from "../feature/appliedHistorySlice";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import AdminAppliedHistory from "../components/AdminAppliedHistory";
import AdminViewAppliedSpeakerSessionModalContainer from "./AdminViewAppliedSpeakerSessionModalContainer";

function AppliedSpeakingSessionContainer() {
      const dispatch = useAppDispatch();

      const [viewModal, openViewModal, closeViewModal] =
            useExtraModal<IAppliedSpeakerSessionDetailSearch["sessionId"]>();

      const { status, error, data, isToRefetch } =
            useAppSelector(appliedHistorySliceState).appliedSpeakerSession;

      const { getApplicationSpeakerSession, deleteApplicationSpeakerSchedule } = useAppliedHistoryApi();

      const viewDetailHandler = (sessionId: IAppliedSpeakerSessionModel["sessionId"]) => () => {
            openViewModal(sessionId);
      };

      const deleteScheduleHandler = (sessionId: IAppliedSpeakerScheduleDeleteReq["sessionId"]) => () => {
            deleteApplicationSpeakerSchedule({ sessionId });
      };

      useEffect(() => {
            getApplicationSpeakerSession();
      }, [isToRefetch]);

      useEffect(() => {
            return () => {
                  dispatch(appliedHistorySliceAction.resetAppliedSpeakerSessionSlice());
            };
      }, []);

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
                        <AdminViewAppliedSpeakerSessionModalContainer
                              closeModalHandler={closeViewModal}
                              selectedSessionId={viewModal.data}
                        />
                  )}
            </>
      );
}

export default AppliedSpeakingSessionContainer;
