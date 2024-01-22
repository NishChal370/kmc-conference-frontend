import { useNavigate } from "react-router-dom";
import { SCHEDULE_PATH } from "@/site/constants/routePath";
import { IScheduleContentDetailModel } from "@/admin/model/schedule/scheduleContentModel";

interface IScheduleCardTitle {
      title: IScheduleContentDetailModel["sessionTitle"];
      scheduleId: IScheduleContentDetailModel["sessionId"];
}

function ScheduleCardTitle({ scheduleId, title }: IScheduleCardTitle) {
      const navigate = useNavigate();

      const navigateToDetailPage = () => {
            navigate(SCHEDULE_PATH.detail.full(scheduleId));
      };

      return (
            <h1
                  onClick={navigateToDetailPage}
                  className="text-xl font-bold cursor-pointer
                        hover:underline
                  "
            >
                  {title}
            </h1>
      );
}

export default ScheduleCardTitle;
