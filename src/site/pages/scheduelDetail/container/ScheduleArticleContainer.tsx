import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "@/shared/errorMessage";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import ScheduleArticle from "../components/scheduleArticle/ScheduleArticle";
import { scheduleContentBriefDetailSliceState } from "@/admin/pages/schedule/feature/scheduleSlice";
import { Status } from "@/enum/commonEnum";
import { useAppSelector } from "@/app/hooks";
import useScheduleApi from "@/admin/hooks/schedule/useScheduleApi";

function ScheduleArticleContainer() {
      const { sessionId } = useParams();
      const { getScheduleContentBriefDetail } = useScheduleApi();

      const { status, error, data } = useAppSelector(scheduleContentBriefDetailSliceState);

      useEffect(() => {
            if (!sessionId) return;

            getScheduleContentBriefDetail({ sessionId: +sessionId });
      }, []);

      return (
            <>
                  {status === Status.SUCCEEDED && data && <ScheduleArticle scheduleDetail={data} />}

                  {status === Status.LOADING && <LoadingMessage />}

                  {status === Status.FAILED && <ErrorMessage title={error?.type} detail={error?.detail} />}
            </>
      );
}

export default ScheduleArticleContainer;
