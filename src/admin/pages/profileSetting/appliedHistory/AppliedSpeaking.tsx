import { useEffect } from "react";
import AdminAppliedHistory from "./components/AdminAppliedHistory";
import { useAppSelector } from "@/app/hooks";
import { appliedHistorySliceState } from "./feature/appliedHistorySlice";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import { IAppliedParticipationModel } from "@/admin/model/appliedHistory/appliedHistoryModel";

function AppliedSpeaking() {
      const { status, error, data } = useAppSelector(appliedHistorySliceState).appliedSpeaker;

      const { getApplicationSpeaker } = useAppliedHistoryApi();

      const viewSessionDetailHandler = (sessionId: IAppliedParticipationModel["sessionId"]) => () => {
            console.log(sessionId);
      };

      useEffect(() => {
            getApplicationSpeaker();
      }, []);

      return (
            <AdminAppliedHistory
                  pageTitle="Speaking History"
                  status={status}
                  error={error}
                  data={data}
                  viewButtonHandler={viewSessionDetailHandler}
            />
      );
}

export default AppliedSpeaking;
