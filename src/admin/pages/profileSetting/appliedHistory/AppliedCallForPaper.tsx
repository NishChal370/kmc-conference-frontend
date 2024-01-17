import { useEffect } from "react";
import { useAppSelector } from "@/app/hooks";
import AdminAppliedHistory from "./components/AdminAppliedHistory";
import { appliedHistorySliceState } from "./feature/appliedHistorySlice";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import {
      IAppliedCallForPaperDetailSearch,
      IAppliedCallForPaperModel,
} from "@/admin/model/appliedHistory/appliedHistoryModel";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import AdminViewAppliedCallForPaperModalContainer from "./containers/AdminViewAppliedCallForPaperModalContainer";

function AppliedCallForPaper() {
      const [viewModal, openViewModal, closeViewModal] =
            useExtraModal<IAppliedCallForPaperDetailSearch["sessionId"]>();

      const { status, error, data } = useAppSelector(appliedHistorySliceState).appliedCallForPaper;

      const { getApplicationCallForPaper } = useAppliedHistoryApi();

      const viewSessionDetailHandler = (sessionId: IAppliedCallForPaperModel["sessionId"]) => () => {
            console.log(sessionId);
      };

      const viewDetailHandler = (sessionId: IAppliedCallForPaperModel["sessionId"]) => () => {
            openViewModal(sessionId);
      };

      useEffect(() => {
            getApplicationCallForPaper();
      }, []);

      return (
            <>
                  <AdminAppliedHistory
                        pageTitle="Call For Paper History"
                        status={status}
                        error={error}
                        data={data}
                        viewDetail={viewDetailHandler}
                        viewSessionDetailButtonHandler={viewSessionDetailHandler}
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

export default AppliedCallForPaper;
