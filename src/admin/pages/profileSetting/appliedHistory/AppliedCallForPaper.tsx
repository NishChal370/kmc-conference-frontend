import AppliedCallForPaperDetailContainer from "./appliedCallForPaper-container/AppliedCallForPaperDetailContainer";
import AppliedCallForPaperSessionContainer from "./appliedCallForPaper-container/AppliedCallForPaperSessionContainer";

function AppliedCallForPaper() {
      return (
            <div className="flex flex-col gap-10">
                  <AppliedCallForPaperDetailContainer />

                  <AppliedCallForPaperSessionContainer />
            </div>
      );
}

export default AppliedCallForPaper;
