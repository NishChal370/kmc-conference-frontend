interface IScheduleCardActionButton {
      isParticipant?: boolean;
      isSpeaker?: boolean;
      isCallForPaper?: boolean;
      participationHandler: () => void;
      speakerButtonHandler: () => void;
      callForPaperButtonHandler: () => void;
}

function ScheduleCardActionButton({
      isParticipant,
      isSpeaker,
      isCallForPaper,
      participationHandler,
      speakerButtonHandler,
      callForPaperButtonHandler,
}: IScheduleCardActionButton) {
      return (
            <span className="flex gap-2 lg:gap-8 justify-end">
                  {!isCallForPaper && (
                        <button
                              type="button"
                              className="text-sm font-bold text-primary self-end 
                              hover:text-rose-600 active:underline
                        "
                              onClick={callForPaperButtonHandler}
                        >
                              Submit Proposal
                        </button>
                  )}

                  {!isSpeaker && (
                        <button
                              type="button"
                              className="text-sm font-bold text-primary self-end 
                                    hover:text-rose-600 active:underline
                              "
                              onClick={speakerButtonHandler}
                        >
                              Become a Speaker
                        </button>
                  )}

                  {!isParticipant && (
                        <button
                              type="button"
                              className="text-sm font-bold text-primary self-end 
                                    hover:text-rose-600 active:underline
                              "
                              onClick={participationHandler}
                        >
                              Reserve my Spot
                        </button>
                  )}
            </span>
      );
}

export default ScheduleCardActionButton;
