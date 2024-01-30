import { useEffect } from "react";
import { useAppSelector } from "@/app/hooks";
import AdminAppliedHistory from "../components/AdminAppliedHistory";
import { appliedHistorySliceState } from "../feature/appliedHistorySlice";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import {
      IAppliedCallForPaperSessionDetailSearch,
      IAppliedCallForPaperSessionModel,
      IAppliedCallForPaperScheduleDeleteReq,
} from "@/admin/model/appliedHistory/appliedHistoryModel";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import AdminViewAppliedCallForPaperModalContainer from "./AdminViewAppliedCallForPaperModalContainer";

function AppliedCallForPaperSessionContainer() {
      const [viewModal, openViewModal, closeViewModal] =
            useExtraModal<IAppliedCallForPaperSessionDetailSearch["sessionId"]>();

      const { status, error, data, isToRefetch } =
            useAppSelector(appliedHistorySliceState).appliedCallForPaperSession;

      const { getApplicationCallForPaperSession, deleteApplicationCallForPaperSchedule } =
            useAppliedHistoryApi();

      const viewDetailHandler = (sessionId: IAppliedCallForPaperSessionModel["sessionId"]) => () => {
            openViewModal(sessionId);
      };

      const deleteScheduleHandler = (sessionId: IAppliedCallForPaperScheduleDeleteReq["sessionId"]) => () => {
            deleteApplicationCallForPaperSchedule({ sessionId });
      };

      useEffect(() => {
            getApplicationCallForPaperSession();
      }, [isToRefetch]);

      return (
            <>
                  <AdminAppliedHistory
                        pageTitle="Call For Paper History"
                        status={status}
                        error={error}
                        data={data}
                        deleteButtonHandler={deleteScheduleHandler}
                        viewDetail={viewDetailHandler}
                  />

                  {viewModal?.isOpen && viewModal.data && (
                        <AdminViewAppliedCallForPaperModalContainer
                              closeModalHandler={closeViewModal}
                              selectedSessionId={viewModal.data}
                        />
                  )}
            </>
      );
}

export default AppliedCallForPaperSessionContainer;
