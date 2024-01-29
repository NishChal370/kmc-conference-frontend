import { Modal } from "@/shared/modal";
import getTokenDetail from "@/utils/token/getTokenDetail";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";
import { ISpeakerAddModal } from "@/admin/model/speaker/becomeSpeakerModel";
import UpdateBecomeSpeakerFormContainer from "./container/UpdateBecomeSpeakerFormContainer";

interface IUpdateBecomeSpeakerModal {
      closeModal: () => void;
      selectedSession: ISpeakerAddModal;
}

function UpdateBecomeSpeakerModal({ closeModal, selectedSession }: IUpdateBecomeSpeakerModal) {
      return (
            <Modal
                  title="Speaker New Session Application"
                  size="w-full lg:!max-w-[46rem] !gap-4"
                  closeHandler={closeModal}
            >
                  <div className="flex flex-col gap-10">
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

                        <span className="flex flex-col gap-0.5">
                              <h5 className="text-2xl font-bold tracking-wide text-default">
                                    Register for new Session
                              </h5>

                              <p className="text-sm">Logged in {getTokenDetail.loggedInUserEmail()}</p>
                        </span>

                        <UpdateBecomeSpeakerFormContainer
                              closeModal={closeModal}
                              sessionId={selectedSession.sessionChoice.sessionId}
                        />
                  </div>
            </Modal>
      );
}

export default UpdateBecomeSpeakerModal;
