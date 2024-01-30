import { useEffect } from "react";
import AdminViewAppliedParticipationModal from "../appliedParticipant-components/AdminViewAppliedParticipationModal";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { Status } from "@/enum/commonEnum";
import { IAppliedParticipationSessionDetailSearch } from "@/admin/model/appliedHistory/appliedHistoryModel";
import { appliedHistorySliceAction, appliedHistorySliceState } from "../feature/appliedHistorySlice";

interface IAdminViewAppliedParticipationModalContainer {
      selectedSessionId: IAppliedParticipationSessionDetailSearch["sessionId"];
      closeModalHandler: () => void;
}

function AdminViewAppliedParticipationModalContainer({
      selectedSessionId,
      closeModalHandler,
}: IAdminViewAppliedParticipationModalContainer) {
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(appliedHistorySliceState).appliedParticipationSessionDetailed;

      const { getApplicationParticipationSessionDetailed } = useAppliedHistoryApi();

      const fetchData = () => {
            getApplicationParticipationSessionDetailed({ sessionId: selectedSessionId });
      };

      useEffect(() => {
            fetchData();

            return () => {
                  dispatch(appliedHistorySliceAction.resetAppliedParticipationSessionDetailedSlice());
            };
      }, []);

      return (
            status === Status.SUCCEEDED &&
            data && (
                  <AdminViewAppliedParticipationModal
                        participationDetail={data}
                        closeModalHandler={closeModalHandler}
                  />
            )
      );
}

export default AdminViewAppliedParticipationModalContainer;
