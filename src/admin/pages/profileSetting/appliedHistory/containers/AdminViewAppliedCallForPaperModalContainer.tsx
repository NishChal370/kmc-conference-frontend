import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { appliedHistorySliceAction, appliedHistorySliceState } from "../feature/appliedHistorySlice";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { useEffect } from "react";
import { Status } from "@/enum/commonEnum";
import AdminViewAppliedCallForPaperModal from "../components/AdminViewAppliedCallForPaperModal";
import { IAppliedCallForPaperDetailSearch } from "@/admin/model/appliedHistory/appliedHistoryModel";

interface IAdminViewAppliedCallForPaperModalContainer {
      selectedSessionId: IAppliedCallForPaperDetailSearch["sessionId"];
      closeModalHandler: () => void;
}

function AdminViewAppliedCallForPaperModalContainer({
      selectedSessionId,
      closeModalHandler,
}: IAdminViewAppliedCallForPaperModalContainer) {
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(appliedHistorySliceState).appliedCallForPaperDetailed;

      const { getApplicationCallForPaperDetailed } = useAppliedHistoryApi();

      const fetchData = () => {
            getApplicationCallForPaperDetailed({ sessionId: selectedSessionId });
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
                  <AdminViewAppliedCallForPaperModal
                        callForPaperDetail={data}
                        closeModalHandler={closeModalHandler}
                  />
            )
      );
}

export default AdminViewAppliedCallForPaperModalContainer;
