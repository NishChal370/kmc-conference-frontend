import { Modal } from "@/shared/modal";
import AppIcon from "@/shared/icon/AppIcon";
import { ICON } from "@/constants/icon";
import { UserType } from "@/enum/commonEnum";

interface IScheduleAttendOptionModal {
      close: () => void;
      isSpeaker?: boolean;
      isParticipant?: boolean;
      isCallForPaper?: boolean;
      selectButtonHandler: (userType: UserType) => () => void;
}
function ScheduleAttendOptionModal({
      close,
      isSpeaker,
      isParticipant,
      isCallForPaper,
      selectButtonHandler,
}: IScheduleAttendOptionModal) {
      return (
            <Modal title="" size="w-full sm:!max-w-[36rem] !gap-0.5" closeHandler={close}>
                  <span className="flex flex-col gap-14 justify-center items-center pb-5">
                        <article className="flex flex-col gap-1 text-center">
                              <h4 className=" font-semibold text-xl">Advance your expertise and network.</h4>
                              <p>Get involved by selecting an option below</p>
                        </article>

                        <div
                              className="flex flex-col w-[84%] h-full gap-6 items-center justify-center
                                    [&>button]:border font-medium [&>button]:w-full [&>button]:flex [&>button]:items-center [&>button]:gap-2 [&>button]:px-4 [&>button]:py-2 [&>button]:rounded-sm [&>button]:text-center
                              "
                        >
                              {!isParticipant && (
                                    <button
                                          type="button"
                                          className="active:border-primary active:text-primary"
                                          onClick={selectButtonHandler(UserType.PARTICIPANT)}
                                    >
                                          <AppIcon name="participant" size={ICON.size + 4} />
                                          <p>Participate as Participant</p>
                                    </button>
                              )}

                              {!isSpeaker && (
                                    <button
                                          type="button"
                                          className="active:border-primary active:text-primary"
                                          onClick={selectButtonHandler(UserType.SPEAKER)}
                                    >
                                          <AppIcon name="speaker" size={ICON.size + 4} />
                                          <p>Participate as Speaker</p>
                                    </button>
                              )}

                              {!isCallForPaper && (
                                    <button
                                          type="button"
                                          className="active:border-primary active:text-primary"
                                          onClick={selectButtonHandler(UserType.CALL_FOR_PAPER)}
                                    >
                                          <AppIcon name="callForPaper" size={ICON.size + 4} />
                                          <p>Submit Proposal</p>
                                    </button>
                              )}
                        </div>
                  </span>
            </Modal>
      );
}

export default ScheduleAttendOptionModal;
