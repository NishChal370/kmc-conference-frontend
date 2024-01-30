import AppliedSpeakingDetailContainer from "./appliedSpeaking-container/AppliedSpeakingDetailContainer";
import AppliedSpeakingSessionContainer from "./appliedSpeaking-container/AppliedSpeakingSessionContainer";

function AppliedSpeaking() {
      return (
            <div className="flex flex-col gap-10">
                  <AppliedSpeakingDetailContainer />

                  <AppliedSpeakingSessionContainer />
            </div>
      );
}

export default AppliedSpeaking;
