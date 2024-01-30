import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { appliedHistorySliceAction, appliedHistorySliceState } from "../feature/appliedHistorySlice";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { Status } from "@/enum/commonEnum";
import AdminViewAppliedCallForPaperModal from "../appliedCallForPaper-components/AdminViewAppliedCallForPaperModal";
import { IAppliedCallForPaperSessionDetailSearch } from "@/admin/model/appliedHistory/appliedHistoryModel";

interface IAdminViewAppliedCallForPaperModalContainer {
      selectedSessionId: IAppliedCallForPaperSessionDetailSearch["sessionId"];
      closeModalHandler: () => void;
}

function AdminViewAppliedCallForPaperModalContainer({
      selectedSessionId,
      closeModalHandler,
}: IAdminViewAppliedCallForPaperModalContainer) {
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(appliedHistorySliceState).appliedCallForPaperSessionDetailed;

      const { getApplicationCallForPaperSessionDetailed } = useAppliedHistoryApi();

      const fetchData = () => {
            getApplicationCallForPaperSessionDetailed({ sessionId: selectedSessionId });
      };

      useEffect(() => {
            fetchData();

            return () => {
                  dispatch(appliedHistorySliceAction.resetAppliedCallForPaperDetailedSlice());
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
