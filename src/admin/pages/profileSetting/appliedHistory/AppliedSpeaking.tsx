import { useEffect } from "react";
import AdminAppliedHistory from "./components/AdminAppliedHistory";
import { useAppSelector } from "@/app/hooks";
import { appliedHistorySliceState } from "./feature/appliedHistorySlice";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import {
      IAppliedSpeakerDetailSearch,
      IAppliedSpeakerModel,
} from "@/admin/model/appliedHistory/appliedHistoryModel";
import AdminViewAppliedSpeakerModalContainer from "./containers/AdminViewAppliedSpeakerModalContainer";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";

function AppliedSpeaking() {
      const [viewModal, openViewModal, closeViewModal] =
            useExtraModal<IAppliedSpeakerDetailSearch["sessionId"]>();

      const { status, error, data } = useAppSelector(appliedHistorySliceState).appliedSpeaker;

      const { getApplicationSpeaker } = useAppliedHistoryApi();

      const viewSessionDetailHandler = (sessionId: IAppliedSpeakerModel["sessionId"]) => () => {
            console.log(sessionId);
      };

      const viewDetailHandler = (sessionId: IAppliedSpeakerModel["sessionId"]) => () => {
            openViewModal(sessionId);
      };

      useEffect(() => {
            getApplicationSpeaker();
      }, []);

      return (
            <>
                  <AdminAppliedHistory
                        pageTitle="Speaking History"
                        status={status}
                        error={error}
                        data={data}
                        viewDetail={viewDetailHandler}
                        viewSessionDetailButtonHandler={viewSessionDetailHandler}
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
