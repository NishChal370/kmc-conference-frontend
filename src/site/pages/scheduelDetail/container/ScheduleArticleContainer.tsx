import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "@/shared/errorMessage";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import ScheduleArticle from "../components/scheduleArticle/ScheduleArticle";
import { scheduleContentBriefDetailSliceState } from "@/admin/pages/schedule/feature/scheduleSlice";
import { Status } from "@/enum/commonEnum";
import { useAppSelector } from "@/app/hooks";
import useScheduleApi from "@/admin/hooks/schedule/useScheduleApi";
import { verifyLoginState } from "@/protectedRoute/feature/verifyLoginSlice";

function ScheduleArticleContainer() {
      const { sessionId } = useParams();

      const { status: loggedInStatus } = useAppSelector(verifyLoginState);

      const { status, error, data, isToRefetch } = useAppSelector(scheduleContentBriefDetailSliceState);

      const { getScheduleContentBriefDetail, getScheduleContentBriefPrivateDetail } = useScheduleApi();

      const fetchData = () => {
            if (!sessionId) return;

            if (loggedInStatus === Status.SUCCEEDED) {
                  getScheduleContentBriefPrivateDetail({ sessionId: +sessionId });
            } else if (loggedInStatus === Status.FAILED) {
                  getScheduleContentBriefDetail({ sessionId: +sessionId });
            }
      };

      useEffect(() => {
            fetchData();
      }, [isToRefetch, loggedInStatus]);

      return (
            <>
                  {status === Status.SUCCEEDED && data && (
                        <ScheduleArticle scheduleDetail={data.sessionContent} />
                  )}

                  {status === Status.LOADING && <LoadingMessage />}

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.type} detail={error?.detail} traceId={error?.traceId} />
                  )}
            </>
      );
}

export default ScheduleArticleContainer;
