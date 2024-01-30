import AppliedParticipationDetailContainer from "./appliedParticipant-container/AppliedParticipationDetailContainer";
import AppliedParticipationSessionContainer from "./appliedParticipant-container/AppliedParticipationSessionContainer";

function AppliedParticipation() {
      return (
            <div className="flex flex-col gap-10">
                  <AppliedParticipationDetailContainer />

                  <AppliedParticipationSessionContainer />
            </div>
      );
}

export default AppliedParticipation;
