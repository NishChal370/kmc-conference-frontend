import { useEffect } from "react";
import AdminAppliedHistory from "./components/AdminAppliedHistory";
import AdminViewAppliedParticipationModalContainer from "./containers/AdminViewAppliedParticipationModalContainer";
import { useAppSelector } from "@/app/hooks";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { appliedHistorySliceState } from "./feature/appliedHistorySlice";
import {
      IAppliedParticipationDetailSearch,
      IAppliedParticipationModel,
} from "@/admin/model/appliedHistory/appliedHistoryModel";

function AppliedParticipation() {
      const [viewModal, openViewModal, closeViewModal] =
            useExtraModal<IAppliedParticipationDetailSearch["sessionId"]>();

      const { status, error, data } = useAppSelector(appliedHistorySliceState).appliedParticipation;

      const { getApplicationParticipation } = useAppliedHistoryApi();

      const viewDetailHandler = (sessionId: IAppliedParticipationModel["sessionId"]) => () => {
            openViewModal(sessionId);
      };

      useEffect(() => {
            getApplicationParticipation();
      }, []);

      return (
            <>
                  <AdminAppliedHistory
                        pageTitle="Participation History"
                        status={status}
                        error={error}
                        data={data}
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

export default AppliedParticipation;
