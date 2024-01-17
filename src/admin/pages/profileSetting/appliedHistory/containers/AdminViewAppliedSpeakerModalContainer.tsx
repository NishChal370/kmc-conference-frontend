import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect } from "react";
import { appliedHistorySliceAction, appliedHistorySliceState } from "../feature/appliedHistorySlice";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { Status } from "@/enum/commonEnum";
import AdminViewAppliedSpeakerModal from "../components/AdminViewAppliedSpeakerModal";
import { IAppliedSpeakerDetailSearch } from "@/admin/model/appliedHistory/appliedHistoryModel";

interface IAdminViewAppliedSpeakerModalContainer {
      selectedSessionId: IAppliedSpeakerDetailSearch["sessionId"];
      closeModalHandler: () => void;
}

function AdminViewAppliedSpeakerModalContainer({
      selectedSessionId,
      closeModalHandler,
}: IAdminViewAppliedSpeakerModalContainer) {
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(appliedHistorySliceState).appliedSpeakerDetailed;

      const { getApplicationSpeakerDetailed } = useAppliedHistoryApi();

      const fetchData = () => {
            getApplicationSpeakerDetailed({ sessionId: selectedSessionId });
      };

      useEffect(() => {
            fetchData();

            return () => {
                  dispatch(appliedHistorySliceAction.resetAppliedParticipationDetailedSlice());
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
