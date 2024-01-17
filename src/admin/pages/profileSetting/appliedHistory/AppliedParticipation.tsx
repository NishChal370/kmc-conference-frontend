import { useEffect } from "react";
import AdminAppliedHistory from "./components/AdminAppliedHistory";
import { useAppSelector } from "@/app/hooks";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { appliedHistorySliceState } from "./feature/appliedHistorySlice";
import { IAppliedParticipationModel } from "@/admin/model/appliedHistory/appliedHistoryModel";

function AppliedParticipation() {
      const { status, error, data } = useAppSelector(appliedHistorySliceState).appliedParticipation;

      const { getApplicationParticipation } = useAppliedHistoryApi();

      const viewSessionDetailHandler = (sessionId: IAppliedParticipationModel["sessionId"]) => () => {
            console.log(sessionId);
      };

      useEffect(() => {
            getApplicationParticipation();
      }, []);

      return (
            <AdminAppliedHistory
                  pageTitle="Participation History"
                  status={status}
                  error={error}
                  data={data}
                  viewButtonHandler={viewSessionDetailHandler}
            />
      );
}

export default AppliedParticipation;
