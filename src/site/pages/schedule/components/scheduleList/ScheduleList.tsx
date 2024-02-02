import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ScheduleNotSelected from "./ScheduleNotSelected";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import ScheduleCardContainer from "../../container/scheduleList/ScheduleCardContainer";
import { Status } from "@/enum/commonEnum";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useScheduleApi from "@/admin/hooks/schedule/useScheduleApi";
import {
      scheduleSliceAction,
      scheduleContentDetailSliceState,
} from "@/admin/pages/schedule/feature/scheduleSlice";
import { verifyLoginState } from "@/protectedRoute/feature/verifyLoginSlice";

function ScheduleList() {
      const { themeId } = useParams();
      const dispatch = useAppDispatch();

      const { status: loggedInStatus } = useAppSelector(verifyLoginState);
      const { status, error, data, isToRefetch } = useAppSelector(scheduleContentDetailSliceState);

      const { getScheduleContentDetail, getScheduleContentPrivateDetail } = useScheduleApi();

      const fetchData = () => {
            if (!themeId) return;

            if (loggedInStatus === Status.SUCCEEDED) {
                  getScheduleContentPrivateDetail({ themeId: +themeId });
            } else if (loggedInStatus === Status.FAILED) {
                  getScheduleContentDetail({ themeId: +themeId });
            }
      };
      useEffect(() => {
            fetchData();
      }, [themeId, loggedInStatus, isToRefetch]);

      useEffect(() => {
            dispatch(scheduleSliceAction.resetScheduleContentDetailsSlice());
      }, []);

      return (
            <section className="flex flex-col justify-start items-start gap-y-20 w-full h-full min-h-[60vh]">
                  {data.themeContents.map((schedule) => (
                        <ScheduleCardContainer
                              key={schedule.sessionId}
                              hasAddedPreviously={data.hasAddedPreviously}
                              schedule={schedule}
                        />
                  ))}

                  {status === Status.IDEL && <ScheduleNotSelected />}

                  {status === Status.LOADING && <LoadingMessage />}

                  {status === Status.DATA_NOT_FOUND && (
                        <NotFoundMessage needTopPadding={false} title="Requested Session does not exists" />
                  )}

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.title} detail={error?.detail} traceId={error?.traceId} />
                  )}
            </section>
      );
}

export default ScheduleList;
