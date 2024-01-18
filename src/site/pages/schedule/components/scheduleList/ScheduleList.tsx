import useScheduleApi from "@/admin/hooks/schedule/useScheduleApi";
import ScheduleCard from "../ScheduleCard";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "@/app/hooks";
import { scheduleContentDetailSliceState } from "@/admin/pages/schedule/feature/scheduleSlice";
import { Status } from "@/enum/commonEnum";
import LoadingMessage from "@/shared/loading/LoadingMessage";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import ScheduleNotSelected from "./ScheduleNotSelected";

function ScheduleList() {
      const { themeId } = useParams();
      const { getScheduleContentDetail } = useScheduleApi();
      const { status, error, data } = useAppSelector(scheduleContentDetailSliceState);

      useEffect(() => {
            if (!themeId) return;

            getScheduleContentDetail({ themeId: +themeId });
      }, [themeId]);

      return (
            <section className="flex flex-col justify-start items-start gap-y-20 w-full h-full min-h-[60vh]">
                  {data.map((schedule) => (
                        <ScheduleCard key={schedule.sessionId} schedule={schedule} />
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
