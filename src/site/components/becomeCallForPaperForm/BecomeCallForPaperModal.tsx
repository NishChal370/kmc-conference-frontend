import { Modal } from "@/shared/modal";
import BecomeCallForPaperFormContainer from "./container/BecomeCallForPaperFormContainer";
import { ICallForPaperAddModal } from "@/admin/model/callForPaper/callForPaperApplyModel";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";

interface IBecomeCallForPaperModal {
      closeModal: () => void;
      selectedSessionDetail: ICallForPaperAddModal;
}
function BecomeCallForPaperModal({ closeModal, selectedSessionDetail }: IBecomeCallForPaperModal) {
      return (
            <Modal
                  title="Proposal Application"
                  size="w-full lg:!max-w-[66rem] !gap-2"
                  closeHandler={closeModal}
            >
                  <>
                        <header className="flex flex-col gap-0.5 text-center border-b border-mute-1 pb-1 text-sm text-gray-900">
                              <h5 className="text-xl font-medium text-default line-clamp-1">
                                    {selectedSessionDetail.sessionChoice.title}
                              </h5>

                              <p>
                                    {changeDateFormat(selectedSessionDetail.dayDate, "long")} ·{" "}
                                    {selectedSessionDetail.startTime} - {selectedSessionDetail.endTime}
                              </p>

                              <p>
                                    {selectedSessionDetail.dayLocation},{" "}
                                    {selectedSessionDetail.sessionLocation}
                              </p>
                        </header>

                        <BecomeCallForPaperFormContainer
                              closeModalHandler={closeModal}
                              selectedSessionId={selectedSessionDetail.sessionChoice.sessionId}
                        />
                  </>
            </Modal>
      );
}

export default BecomeCallForPaperModal;
