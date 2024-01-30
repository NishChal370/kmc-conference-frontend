import FileViewerContainer from "@/admin/shared/file/FileViewer";
import { Modal, ModalSanitizedText, ModalSectionHeader, ModalText } from "@/shared/modal";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";
import { IAppliedCallForPaperSessionDetailedModel } from "@/admin/model/appliedHistory/appliedHistoryModel";

interface IAdminViewAppliedCallForPaperModal {
      callForPaperDetail: IAppliedCallForPaperSessionDetailedModel;
      closeModalHandler: () => void;
}

function AdminViewAppliedCallForPaperModal({
      callForPaperDetail,
      closeModalHandler,
}: IAdminViewAppliedCallForPaperModal) {
      return (
            <Modal
                  title="View Call For Paper Detail"
                  size="w-full lg:!max-w-[76rem]"
                  closeHandler={closeModalHandler}
            >
                  <span
                        className="mb-6 w-full flex flex-col gap-y-20 tracking-wide
                              sm:px-2
                        "
                  >
                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Session Detail" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText title="Session Title" data={callForPaperDetail.title} />

                                    <ModalText title="Session Location" data={callForPaperDetail.location} />

                                    <ModalText
                                          title="Session Time"
                                          data={
                                                callForPaperDetail.startTime +
                                                " -  " +
                                                callForPaperDetail.endTime
                                          }
                                    />

                                    <ModalText
                                          title="Approval Status"
                                          data={CallForPaperApprovalStatus[callForPaperDetail.approvalStatus]}
                                    />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Paper and Session Proposals" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText
                                          title="Proposed Paper Session Title"
                                          data={callForPaperDetail.proposedPaperSessionTitle}
                                    />

                                    <ModalText title="Keywords" data={callForPaperDetail.keywords} />

                                    <ModalText
                                          title="Primary Field Category"
                                          data={callForPaperDetail.primaryFieldCategory}
                                    />

                                    <ModalText
                                          title="Research Methodology"
                                          data={callForPaperDetail.researchMethodology}
                                    />

                                    <span className="sm:col-span-2">
                                          <ModalSanitizedText
                                                title="Abstract Summary"
                                                htmlContent={callForPaperDetail.abstractSummary}
                                          />
                                    </span>
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Presentation and Paper Details" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText
                                          title="Preferred Presentation Format"
                                          data={callForPaperDetail.preferredPresentationFormat}
                                    />

                                    <ModalText
                                          title="Key Objectives"
                                          data={callForPaperDetail.keyObjectives}
                                    />

                                    <ModalText
                                          title="Contributions"
                                          data={callForPaperDetail.contributions}
                                    />

                                    <ModalText
                                          title="Significance/Relevance"
                                          data={callForPaperDetail.significanceRelevance}
                                    />

                                    <ModalText
                                          title="Audio Visual Requirements"
                                          data={callForPaperDetail.audioVisualRequirements}
                                    />

                                    <ModalText
                                          title="References or Citations"
                                          data={callForPaperDetail.referencesOrCitations}
                                    />

                                    <span className="sm:col-span-2">
                                          <FileViewerContainer
                                                label="Full Paper / Extended Abstract"
                                                files={
                                                      callForPaperDetail.fullPaperORExtendedAbstract
                                                            ? [callForPaperDetail.fullPaperORExtendedAbstract]
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

export default AdminViewAppliedCallForPaperModal;
