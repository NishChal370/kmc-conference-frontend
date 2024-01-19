import { useAppSelector } from "@/app/hooks";
import { Status } from "@/enum/commonEnum";
import { verifyLoginState } from "@/protectedRoute/feature/verifyLoginSlice";

interface IScheduleCardActionButton {
      participationHandler: () => void;
      speakerButtonHandler: () => void;
      callForPaperButtonHandler: () => void;
}

function ScheduleCardActionButton({
      participationHandler,
      speakerButtonHandler,
      callForPaperButtonHandler,
}: IScheduleCardActionButton) {
      return (
            <span className="flex gap-2 lg:gap-8 justify-end">
                  <button
                        type="button"
                        className="text-sm font-bold text-primary self-end 
                              hover:text-rose-600 active:underline
                        "
                        onClick={callForPaperButtonHandler}
                  >
                        Submit Proposal
                  </button>

                  <button
                        type="button"
                        className="text-sm font-bold text-primary self-end 
                              hover:text-rose-600 active:underline
                        "
                        onClick={speakerButtonHandler}
                  >
                        Become a Speaker
                  </button>
                  <button
                        type="button"
                        className="text-sm font-bold text-primary self-end 
                              hover:text-rose-600 active:underline
                        "
                        onClick={participationHandler}
                  >
                        Reserve my Spot
                  </button>
            </span>
      );
}

export default ScheduleCardActionButton;
