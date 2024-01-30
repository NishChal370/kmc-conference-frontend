import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect } from "react";
import { appliedHistorySliceAction, appliedHistorySliceState } from "../feature/appliedHistorySlice";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { Status } from "@/enum/commonEnum";
import AdminViewAppliedSpeakerModal from "../appliedSpeaking-components/AdminViewAppliedSpeakerModal";
import { IAppliedSpeakerSessionDetailSearch } from "@/admin/model/appliedHistory/appliedHistoryModel";

interface IAdminViewAppliedSpeakerModalContainer {
      selectedSessionId: IAppliedSpeakerSessionDetailSearch["sessionId"];
      closeModalHandler: () => void;
}

function AdminViewAppliedSpeakerModalContainer({
      selectedSessionId,
      closeModalHandler,
}: IAdminViewAppliedSpeakerModalContainer) {
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
                  <AdminViewAppliedSpeakerModal speakerDetail={data} closeModalHandler={closeModalHandler} />
            )
      );
}

export default AdminViewAppliedSpeakerModalContainer;
