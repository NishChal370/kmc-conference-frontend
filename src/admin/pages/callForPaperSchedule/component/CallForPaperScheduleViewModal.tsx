import FileViewer from "@/admin/shared/file/FileViewer";
import { Modal, ModalSanitizedText, ModalSectionHeader, ModalText } from "@/shared/modal";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";
import { ICallForPaperScheduleViewModal } from "@/admin/model/callForPaperSchedule/callForPaperScheduleModel";

interface ICallForPaperScheduleViewModalProps {
      callForPaperSchedule: ICallForPaperScheduleViewModal;
      closeViewModal: () => void;
}

function CallForPaperScheduleViewModal({
      callForPaperSchedule,
      closeViewModal,
}: ICallForPaperScheduleViewModalProps) {
      return (
            <Modal
                  title="View Call For Paper Session Detail"
                  size="min-w-full sm:min-w-[95%] xl:min-w-[55%] max-w-[55rem]"
                  closeHandler={closeViewModal}
            >
                  <span
                        className="mb-6 w-full flex flex-col gap-y-20 tracking-wide
                              sm:px-2
                        "
                  >
                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Session Information" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText title="Session Title" data={callForPaperSchedule.title} />

                                    <ModalText
                                          title="Session Location"
                                          data={callForPaperSchedule.location}
                                    />
                                    <ModalText
                                          title="Approval Status"
                                          data={
                                                CallForPaperApprovalStatus[
                                                      callForPaperSchedule.approvalStatus
                                                ]
                                          }
                                    />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Proposed Paper Information" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText
                                          title="Proposed Paper Title"
                                          data={callForPaperSchedule.proposedPaperSessionTitle}
                                    />

                                    <ModalText title="Keywords" data={callForPaperSchedule.keywords} />

                                    <ModalText
                                          title="Primary Field Category"
                                          data={callForPaperSchedule.primaryFieldCategory}
                                    />

                                    <ModalText
                                          title="Research Methodology"
                                          data={callForPaperSchedule.researchMethodology}
                                    />

                                    <span className="sm:col-span-2">
                                          <ModalSanitizedText
                                                title="Abstract Summary"
                                                htmlContent={callForPaperSchedule.abstractSummary}
                                          />
                                    </span>
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Presentation Information" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText
                                          title="Preferred Presentation Format"
                                          data={callForPaperSchedule.preferredPresentationFormat}
                                    />

                                    <ModalText
                                          title="Key Objectives"
                                          data={callForPaperSchedule.keyObjectives}
                                    />

                                    <ModalText
                                          title="Contributions"
                                          data={callForPaperSchedule.contributions}
                                    />

                                    <ModalText
                                          title="Significance / Relevance"
                                          data={callForPaperSchedule.significanceRelevance}
                                    />

                                    <ModalText
                                          title="Reference / Citation"
                                          data={callForPaperSchedule.referencesOrCitations}
                                    />

                                    <ModalText
                                          title="Audio Visual Requirements"
                                          data={callForPaperSchedule.audioVisualRequirements}
                                    />

                                    <span className="sm:col-span-2">
                                          <FileViewer
                                                label="Full Paper / Extended Abstract"
                                                files={
                                                      callForPaperSchedule.fullPaperOrExtendedAbstract
                                                            ? [
                                                                    callForPaperSchedule.fullPaperOrExtendedAbstract,
                                                              ]
                                                            : null
                                                }
                                          />
                                    </span>
                              </article>
                        </section>
                  </span>
            </Modal>
      );
}

export default CallForPaperScheduleViewModal;
