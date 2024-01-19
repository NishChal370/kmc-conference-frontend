import useScheduleApi from "@/admin/hooks/schedule/useScheduleApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
      scheduleContentDetailSliceState,
      scheduleSliceAction,
} from "@/admin/pages/schedule/feature/scheduleSlice";
import { Status } from "@/enum/commonEnum";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import ScheduleNotSelected from "./ScheduleNotSelected";
import ScheduleCardContainer from "../../container/scheduleList/ScheduleCardContainer";

function ScheduleList() {
      const dispatch = useAppDispatch();
      const { themeId } = useParams();
      const { getScheduleContentDetail } = useScheduleApi();
      const { status, error, data } = useAppSelector(scheduleContentDetailSliceState);

      useEffect(() => {
            if (!themeId) return;

            getScheduleContentDetail({ themeId: +themeId });
      }, [themeId]);

      useEffect(() => {
            dispatch(scheduleSliceAction.resetScheduleContentDetailsSlice());
      }, []);

      return (
            <section className="flex flex-col justify-start items-start gap-y-20 w-full h-full min-h-[60vh]">
                  {data.map((schedule) => (
                        <ScheduleCardContainer key={schedule.sessionId} schedule={schedule} />
                  ))}

                  {status === Status.IDEL && <ScheduleNotSelected />}

                  {status === Status.LOADING && <LoadingMessage />}

                  {status === Status.DATA_NOT_FOUND && (
                        <NotFoundMessage needTopPadding={false} title="Requested Session does not exists" />
                  )}
                  {status === Status.FAILED && <ErrorMessage title={error?.title} detail={error?.detail} />}
            </section>
      );
}

export default ScheduleList;
