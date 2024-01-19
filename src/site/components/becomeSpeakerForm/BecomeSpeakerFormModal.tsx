import { Modal } from "@/shared/modal";
import BecomeSpeakerFormContainer from "./container/BecomeSpeakerFormContainer";
import { ISpeakerAddModal } from "@/admin/model/speaker/adminSpeakerModel";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";

interface IBecomeSpeakerFormModal {
      selectedSession: ISpeakerAddModal;
      closeModalHandler: () => void;
}

function BecomeSpeakerFormModal({ selectedSession, closeModalHandler }: IBecomeSpeakerFormModal) {
      return (
            <Modal
                  title="Speaker Application"
                  size="w-full lg:!max-w-[66rem] !gap-2"
                  closeHandler={closeModalHandler}
            >
                  <>
                        <header className="flex flex-col gap-0.5 text-center border-b border-mute-1 pb-1 text-sm text-gray-900">
                              <h5 className="text-xl font-medium text-default line-clamp-1">
                                    {selectedSession.sessionChoice.title}
                              </h5>
                              <p>
                                    {changeDateFormat(selectedSession.dayDate, "long")} ·{" "}
                                    {selectedSession.startTime} - {selectedSession.endTime}
                              </p>
                              <p>
                                    {selectedSession.dayLocation}, {selectedSession.sessionLocation}
                              </p>
                        </header>

                        <BecomeSpeakerFormContainer
                              selectedSessionId={selectedSession.sessionChoice.sessionId}
                              closeModalHandler={closeModalHandler}
                        />
                  </>
            </Modal>
      );
}

export default BecomeSpeakerFormModal;
