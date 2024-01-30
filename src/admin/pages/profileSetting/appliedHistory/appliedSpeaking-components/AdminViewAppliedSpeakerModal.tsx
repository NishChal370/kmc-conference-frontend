import FileViewer from "@/admin/shared/file/FileViewer";
import { Modal, ModalSectionHeader, ModalText } from "@/shared/modal";
import { IAppliedSpeakerSessionDetailedModel } from "@/admin/model/appliedHistory/appliedHistoryModel";
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";

interface IAdminViewAppliedSpeakerModal {
      speakerDetail: IAppliedSpeakerSessionDetailedModel;
      closeModalHandler: () => void;
}
function AdminViewAppliedSpeakerModal({ speakerDetail, closeModalHandler }: IAdminViewAppliedSpeakerModal) {
      return (
            <Modal
                  title="View Speaker Detail"
                  size="min-w-full sm:min-w-[95%] xl:min-w-[80%] max-w-[84rem]"
                  closeHandler={closeModalHandler}
            >
                  <main
                        className="mb-6 w-full flex flex-col gap-y-20 tracking-wide
                                    sm:px-2
                              "
                  >
                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Selected Session Detail" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                                sm:grid-cols-2 sm:px-2
                                          "
                              >
                                    <ModalText title="Session Title" data={speakerDetail.title} />

                                    <ModalText title="Session Location" data={speakerDetail.location} />

                                    <ModalText
                                          title="Session Time"
                                          data={speakerDetail.startTime + " -  " + speakerDetail.endTime}
                                    />

                                    <ModalText
                                          title="Approval Status"
                                          data={SpeakerApprovalStatus[speakerDetail.approvalStatus]}
                                    />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="My Information" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                                sm:grid-cols-2 sm:px-2
                                          "
                              >
                                    <ModalText
                                          title="Audio/View Requirement"
                                          data={speakerDetail.avRequirements}
                                    />

                                    <ModalText
                                          title="Preferred Session Length (in minutes)"
                                          data={speakerDetail.preferredSessionLengthMinutes}
                                    />

                                    <FileViewer
                                          files={
                                                speakerDetail.sessionProposal
                                                      ? [speakerDetail.sessionProposal]
                                                      : null
                                          }
                                          containerClassName="sm:col-span-2"
                                    />
                              </article>
                        </section>
                  </main>
            </Modal>
      );
}

export default AdminViewAppliedSpeakerModal;
