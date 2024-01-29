import FileViewerContainer from "@/admin/shared/file/FileViewer";
import { Modal, ModalSectionHeader, ModalText } from "@/shared/modal";
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";
import { ISpeakerScheduleViewModal } from "@/admin/model/speakerSchedule/speakerScheduleModel";

interface ISpeakerScheduleViewModalProps {
      closeViewModal: () => void;
      speakerSession: ISpeakerScheduleViewModal;
}

function SpeakerScheduleViewModal({ closeViewModal, speakerSession }: ISpeakerScheduleViewModalProps) {
      return (
            <Modal
                  title="View Speaker Session Detail"
                  size="min-w-full sm:min-w-[95%] xl:min-w-[55%] max-w-[55rem]"
                  closeHandler={closeViewModal}
            >
                  <>
                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Session Information" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText title="Session Title" data={speakerSession.title} />

                                    <ModalText
                                          title="Preferred Session Length (in minute)"
                                          data={speakerSession.preferredSessionLengthMinutes}
                                    />

                                    <ModalText
                                          title="Audio/view Requirement"
                                          data={speakerSession.avRequirements}
                                    />

                                    <ModalText
                                          title="Approval Status"
                                          data={SpeakerApprovalStatus[speakerSession.approvalStatus]}
                                    />

                                    <FileViewerContainer
                                          label="Session Proposal"
                                          files={
                                                speakerSession.sessionProposal
                                                      ? [speakerSession.sessionProposal]
                                                      : null
                                          }
                                    />
                              </article>
                        </section>
                  </>
            </Modal>
      );
}

export default SpeakerScheduleViewModal;
