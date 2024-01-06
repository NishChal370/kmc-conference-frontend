import { useNavigate } from "react-router-dom";
import Button from "@/shared/button/Button";
import { SCHEDULE_PATH } from "@/constants/routePath/path-normalUser";

function ExploreScheduleButton() {
      const navigate = useNavigate();

      const buttonHandler = () => {
            navigate(SCHEDULE_PATH.schedule.full);
      };

      return (
            <Button
                  onClickHandler={buttonHandler}
                  variant="outlined"
                  title="EXPLORE SCHEDULES"
                  extraClassName="text-white border-white 
                        active:text-primary active:border-primary
                  "
            ></Button>
      );
}

export default ExploreScheduleButton;
