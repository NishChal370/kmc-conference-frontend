import { useNavigate } from "react-router-dom";
import Button from "@/shared/button/Button";
import { SCHEDULE_PATH } from "@/site/constants/routePath";

function ExploreScheduleButton() {
      const navigate = useNavigate();

      const buttonHandler = () => {
            navigate(SCHEDULE_PATH.schedule.full());
      };

      return (
            <Button
                  onClickHandler={buttonHandler}
                  variant="outlined"
                  title="EXPLORE SCHEDULES"
                  extraClassName="text-white border-white py-2.5
                        active:text-primary active:border-primary
                  "
            ></Button>
      );
}

export default ExploreScheduleButton;
