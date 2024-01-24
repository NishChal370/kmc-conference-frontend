import { Modal } from "@/shared/modal";
import UpdateBecomeCallForPaperFormContainer from "./container/UpdateBecomeCallForPaperFormContainer";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";
import { ICallForPaperAddModal } from "@/admin/model/callForPaper/callForPaperApplyModel";

interface IUpdateBecomeCallForPaperModal {
      closeModal: () => void;
      selectedSession: ICallForPaperAddModal;
}

function UpdateBecomeCallForPaperModal({ closeModal, selectedSession }: IUpdateBecomeCallForPaperModal) {
      return (
            <Modal
                  title="Proposal New Session Application"
                  size="w-full lg:!max-w-[66rem] !gap-4"
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

                        <UpdateBecomeCallForPaperFormContainer
                              closeModal={closeModal}
                              sessionId={selectedSession.sessionChoice.sessionId}
                        />
                  </div>
            </Modal>
      );
}

export default UpdateBecomeCallForPaperModal;
