import { scheduleContentBriefDetailSliceState } from "@/admin/pages/schedule/feature/scheduleSlice";
import { useAppSelector } from "@/app/hooks";
import { Status } from "@/enum/commonEnum";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";

function ScheduleActionHeaderArticle() {
      const { status, data } = useAppSelector(scheduleContentBriefDetailSliceState);

      return (
            status === Status.SUCCEEDED &&
            data && (
                  <article className="flex flex-col items-start w-full">
                        <h3 className=" text-sm uppercase">{changeDateFormat(data?.date, "long")}</h3>
                        <h1 className="text-lg font-bold">{data.title}</h1>
                  </article>
            )
      );
}

export default ScheduleActionHeaderArticle;
