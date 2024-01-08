import { useAppSelector } from "@/app/hooks";
import { Status } from "@/enum/commonEnum";
import { verifyLoginState } from "@/protectedRoute/feature/verifyLoginSlice";
import EventParticipationButton from "@/site/shared/buttons/EventParticipationButton";
import LoginButton from "@/site/shared/buttons/LoginButton";
import LogoutButton from "@/site/shared/buttons/LogoutButton";
import RaiseUpAnimationWrapper from "@/template/animation/RaiseUpAnimationWrapper";

interface IConferenceCTA {
      closeMenuHandler: () => void;
}
function ConferenceCTA({ closeMenuHandler }: IConferenceCTA) {
      const { status } = useAppSelector(verifyLoginState);

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
                  <LogoutButton extraHandler={closeMenuHandler} />
            </RaiseUpAnimationWrapper>
      );
}

export default ConferenceCTA;
