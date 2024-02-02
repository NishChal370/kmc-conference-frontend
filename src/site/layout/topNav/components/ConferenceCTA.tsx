import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/app/hooks";
import { Status } from "@/enum/commonEnum";
import { verifyLoginState } from "@/protectedRoute/feature/verifyLoginSlice";
import { HOME_PATH } from "@/site/constants/routePath";
import EventParticipationButton from "@/site/shared/buttons/EventParticipationButton";
import LoginButton from "@/site/shared/buttons/LoginButton";
import LogoutButton from "@/site/shared/buttons/LogoutButton";

interface IConferenceCTA {
      closeMenuHandler: () => void;
}
function ConferenceCTA({ closeMenuHandler }: IConferenceCTA) {
      const navigate = useNavigate();

      const { status } = useAppSelector(verifyLoginState);

      const logoutButtonSuccessHandler = () => {
            navigate(HOME_PATH.home.full);

            closeMenuHandler();
      };

      return status === Status.FAILED ? (
            <>
                  <EventParticipationButton />

                  <LoginButton />
            </>
      ) : (
            <LogoutButton extraHandler={logoutButtonSuccessHandler} />
      );
}

export default ConferenceCTA;
