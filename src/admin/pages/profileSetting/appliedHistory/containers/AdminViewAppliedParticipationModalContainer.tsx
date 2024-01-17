import { useEffect } from "react";
import AdminViewAppliedParticipationModal from "../components/AdminViewAppliedParticipationModal";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { Status } from "@/enum/commonEnum";
import { IAppliedParticipationDetailSearch } from "@/admin/model/appliedHistory/appliedHistoryModel";
import { appliedHistorySliceAction, appliedHistorySliceState } from "../feature/appliedHistorySlice";

interface IAdminViewAppliedParticipationModalContainer {
      selectedSessionId: IAppliedParticipationDetailSearch["sessionId"];
      closeModalHandler: () => void;
}

function AdminViewAppliedParticipationModalContainer({
      selectedSessionId,
      closeModalHandler,
}: IAdminViewAppliedParticipationModalContainer) {
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(appliedHistorySliceState).appliedParticipationDetailed;

      const { getApplicationParticipationDetailed } = useAppliedHistoryApi();

      const fetchData = () => {
            getApplicationParticipationDetailed({ sessionId: selectedSessionId });
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
                  <AdminViewAppliedParticipationModal
                        participationDetail={data}
                        closeModalHandler={closeModalHandler}
                  />
            )
      );
}

export default AdminViewAppliedParticipationModalContainer;
