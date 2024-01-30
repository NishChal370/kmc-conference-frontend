import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect } from "react";
import { appliedHistorySliceAction, appliedHistorySliceState } from "../feature/appliedHistorySlice";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { Status } from "@/enum/commonEnum";
import AdminViewAppliedSpeakerSessionModal from "../appliedSpeaking-components/AdminViewAppliedSpeakerSessionModal";
import { IAppliedSpeakerSessionDetailSearch } from "@/admin/model/appliedHistory/appliedHistoryModel";

interface IAdminViewAppliedSpeakerSessionModalContainer {
      selectedSessionId: IAppliedSpeakerSessionDetailSearch["sessionId"];
      closeModalHandler: () => void;
}

function AdminViewAppliedSpeakerSessionModalContainer({
      selectedSessionId,
      closeModalHandler,
}: IAdminViewAppliedSpeakerSessionModalContainer) {
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(appliedHistorySliceState).appliedSpeakerDetailed;

      const { getApplicationSpeakerSessionDetailed } = useAppliedHistoryApi();

      const fetchData = () => {
            getApplicationSpeakerSessionDetailed({ sessionId: selectedSessionId });
      };

      useEffect(() => {
            fetchData();

            return () => {
                  dispatch(appliedHistorySliceAction.resetAppliedSpeakerSessionDetailedSlice());
            };
      }, []);

      return (
            status === Status.SUCCEEDED &&
            data && (
                  <AdminViewAppliedSpeakerSessionModal
                        speakerDetail={data}
                        closeModalHandler={closeModalHandler}
                  />
            )
      );
}

export default AdminViewAppliedSpeakerSessionModalContainer;
