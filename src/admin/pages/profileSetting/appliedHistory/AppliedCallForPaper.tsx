import { useEffect } from "react";
import { useAppSelector } from "@/app/hooks";
import AdminAppliedHistory from "./components/AdminAppliedHistory";
import { appliedHistorySliceState } from "./feature/appliedHistorySlice";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { IAppliedParticipationModel } from "@/admin/model/appliedHistory/appliedHistoryModel";

function AppliedCallForPaper() {
      const { status, error, data } = useAppSelector(appliedHistorySliceState).appliedCallForPaper;

      const { getApplicationCallForPaper } = useAppliedHistoryApi();

      const viewSessionDetailHandler = (sessionId: IAppliedParticipationModel["sessionId"]) => () => {
            console.log(sessionId);
      };

      useEffect(() => {
            getApplicationCallForPaper();
      }, []);

      return (
            <AdminAppliedHistory
                  pageTitle="Call For Paper History"
                  status={status}
                  error={error}
                  data={data}
                  viewButtonHandler={viewSessionDetailHandler}
            />
      );
}

export default AppliedCallForPaper;
