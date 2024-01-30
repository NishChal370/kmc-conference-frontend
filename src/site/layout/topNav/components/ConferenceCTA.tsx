import { useAppSelector } from "@/app/hooks";
import { Status } from "@/enum/commonEnum";
import { verifyLoginState } from "@/protectedRoute/feature/verifyLoginSlice";
import { HOME_PATH } from "@/site/constants/routePath";
import EventParticipationButton from "@/site/shared/buttons/EventParticipationButton";
import LoginButton from "@/site/shared/buttons/LoginButton";
import LogoutButton from "@/site/shared/buttons/LogoutButton";
import RaiseUpAnimationWrapper from "@/template/animation/RaiseUpAnimationWrapper";
import { useNavigate } from "react-router-dom";

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
                  <RaiseUpAnimationWrapper>
                        <EventParticipationButton />
                  </RaiseUpAnimationWrapper>

                  <RaiseUpAnimationWrapper>
                        <LoginButton />
                  </RaiseUpAnimationWrapper>
            </>
      ) : (
            <RaiseUpAnimationWrapper>
                  <LogoutButton extraHandler={logoutButtonSuccessHandler} />
            </RaiseUpAnimationWrapper>
      );
}

export default ConferenceCTA;
