import { useNavigate } from "react-router-dom";
import { AUTH_PATH } from "@/site/constants/routePath";

function EventParticipationButton() {
      const navigate = useNavigate();

      const buttonHandler = () => {
            navigate(AUTH_PATH.registerUser.full);
      };

      return (
            <button
                  type="button"
                  className="bg-primary py-2.5 px-10 rounded-md min-w-fit w-full text-white
                        active:bg-white  active:text-primary
                  "
                  onClick={buttonHandler}
            >
                  BE PART OF THE CONFERENCE
            </button>
      );
}

export default EventParticipationButton;
