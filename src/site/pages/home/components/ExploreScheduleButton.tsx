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
                  title="Explore"
                  extraClassName="button-appear border border-white text-base !px-10 !py-1 font-medium text-white !w-fit !rounded-sm
                        sm:text-xl
                        active:text-primary active:border-primary
                  "
            ></Button>
      );
}

export default ExploreScheduleButton;
