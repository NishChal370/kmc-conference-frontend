import { useNavigate } from "react-router-dom";
import { SCHEDULE_PATH } from "@site/constants/routePath";

interface IScheduleCardTitle {
      title: string;
}

function ScheduleCardTitle({ title }: IScheduleCardTitle) {
      const navigate = useNavigate();

      const navigateToDetailPage = () => {
            navigate(SCHEDULE_PATH.detail.full(1));
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
