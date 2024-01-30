import { useEffect } from "react";
import AdminAppliedHistory from "../components/AdminAppliedHistory";
import AdminViewAppliedParticipationModalContainer from "./AdminViewAppliedParticipationModalContainer";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { appliedHistorySliceAction, appliedHistorySliceState } from "../feature/appliedHistorySlice";
import {
      IAppliedParticipationSessionDetailSearch,
      IAppliedParticipationSessionModel,
      IAppliedParticipationScheduleDeleteReq,
} from "@/admin/model/appliedHistory/appliedHistoryModel";

function AppliedParticipationSessionContainer() {
      const dispatch = useAppDispatch();

      const [viewModal, openViewModal, closeViewModal] =
            useExtraModal<IAppliedParticipationSessionDetailSearch["sessionId"]>();

      const { status, error, data, isToRefetch } =
            useAppSelector(appliedHistorySliceState).appliedParticipationSessions;

      const { getApplicationParticipationSessions, deleteApplicationParticipationSchedule } =
            useAppliedHistoryApi();

      const viewDetailHandler = (sessionId: IAppliedParticipationSessionModel["sessionId"]) => () => {
            openViewModal(sessionId);
      };

      const deleteScheduleHandler =
            (sessionId: IAppliedParticipationScheduleDeleteReq["sessionId"]) => () => {
                  deleteApplicationParticipationSchedule({ sessionId });
            };

      useEffect(() => {
            getApplicationParticipationSessions();
      }, [isToRefetch]);

      useEffect(() => {
            return () => {
                  dispatch(appliedHistorySliceAction.resetAppliedParticipationSessionsSlice());
            };
      }, []);

      return (
            <>
                  <AdminAppliedHistory
                        pageTitle="Participation History"
                        status={status}
                        error={error}
                        data={data}
                        deleteButtonHandler={deleteScheduleHandler}
                        viewDetail={viewDetailHandler}
                  />

                  {viewModal?.isOpen && viewModal.data && (
                        <AdminViewAppliedParticipationModalContainer
                              closeModalHandler={closeViewModal}
                              selectedSessionId={viewModal.data}
                        />
                  )}
            </>
      );
}

export default AppliedParticipationSessionContainer;
