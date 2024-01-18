import { IScheduleContentDetailModel } from "@/admin/model/schedule/scheduleModel";
import Button from "@/shared/button/Button";
import { SCHEDULE_PATH } from "@/site/constants/routePath";
import { useNavigate } from "react-router-dom";

interface IScheduleViewMoreButton {
      scheduleId: IScheduleContentDetailModel["sessionId"];
}

function ScheduleViewMoreButton({ scheduleId }: IScheduleViewMoreButton) {
      const navigate = useNavigate();

      const navigateToDetailPage = () => {
            navigate(SCHEDULE_PATH.detail.full(scheduleId));
      };

      return (
            <span className="self-end text-sm mt-2">
                  <Button title="view more" variant="text" onClickHandler={navigateToDetailPage} />
            </span>
      );
}

export default ScheduleViewMoreButton;
