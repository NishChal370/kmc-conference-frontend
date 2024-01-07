import EventParticipationButton from "@/shared-normalUser/buttons/EventParticipationButton";
import LoginButton from "@/shared-normalUser/buttons/LoginButton";
import RaiseUpAnimationWrapper from "@/template/animation/RaiseUpAnimationWrapper";

function ConferenceCTA() {
      return (
            <>
                  <RaiseUpAnimationWrapper>
                        <EventParticipationButton />
                  </RaiseUpAnimationWrapper>

                  <RaiseUpAnimationWrapper>
                        <LoginButton />
                  </RaiseUpAnimationWrapper>
            </>
      );
}

export default ConferenceCTA;
