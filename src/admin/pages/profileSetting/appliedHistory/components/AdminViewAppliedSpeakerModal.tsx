import FileViewer from "@/admin/shared/file/FileViewer";
import { Modal, ModalSanitizedText, ModalSectionHeader, ModalText } from "@/shared/modal";
import SpeakerProfileSection from "@/admin/pages/speaker/components/adminSpeakerViewModal/SpeakerProfileSection";
import { IAppliedSpeakerDetailedModel } from "@/admin/model/appliedHistory/appliedHistoryModel";

interface IAdminViewAppliedSpeakerModal {
      speakerDetail: IAppliedSpeakerDetailedModel;
      closeModalHandler: () => void;
}
function AdminViewAppliedSpeakerModal({ speakerDetail, closeModalHandler }: IAdminViewAppliedSpeakerModal) {
      return (
            <Modal
                  title="View Speaker Detail"
                  size="min-w-full sm:min-w-[95%] xl:min-w-[80%] max-w-[84rem]"
                  closeHandler={closeModalHandler}
            >
                  <div
                        className="flex flex-col gap-0 w-full min-w-full h-full
                              lg:flex-row
                        "
                  >
                        <SpeakerProfileSection image={"speakerDetail.photo"} name={""} designation={""} />

                        <main
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
                                          <ModalText title="Session Title" data={speakerDetail.title} />

                                          <ModalText title="Session Location" data={speakerDetail.location} />

                                          <ModalText
                                                title="Session Time"
                                                data={
                                                      speakerDetail.startTime + " -  " + speakerDetail.endTime
                                                }
                                          />

                                          <ModalText
                                                title="Approval Status"
                                                data={speakerDetail.approvalStatus}
                                          />
                                    </article>
                              </section>

                              <section className="flex flex-col gap-6 w-full">
                                    <ModalSectionHeader title="Professional Information" />

                                    <article
                                          className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                                sm:grid-cols-2 sm:px-2
                                          "
                                    >
                                          <ModalText title="Title" data={speakerDetail.title} />

                                          <ModalText title="Affiliation" data={speakerDetail.affiliation} />

                                          <ModalText title="LinkedIn" data={speakerDetail.linkedInProfile} />

                                          <ModalText title="Twitter" data={speakerDetail.twitterHandle} />

                                          <ModalText
                                                title="Personal Website"
                                                data={speakerDetail.professionalWebsite}
                                          />
                                    </article>
                              </section>
                              <section className="flex flex-col gap-6 w-full">
                                    <ModalSectionHeader title="Biographical Information" />

                                    <article
                                          className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                                sm:grid-cols-2 sm:px-2
                                          "
                                    >
                                          <ModalSanitizedText title="" htmlContent={speakerDetail.bio} />
                                    </article>
                              </section>
                              <section className="flex flex-col gap-6 w-full">
                                    <ModalSectionHeader title="Professional Background" />

                                    <article
                                          className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                                sm:grid-cols-2 sm:px-2
                                          "
                                    >
                                          <ModalText
                                                title="Expertise in Field"
                                                data={speakerDetail.expertiseInField}
                                          />
                                          <ModalText title="Publications" data={speakerDetail.publications} />

                                          <ModalText
                                                title="Previous Speaking Engagements"
                                                data={speakerDetail.previousSpeakingEngagements}
                                          />
                                          <br />

                                          <ModalSanitizedText
                                                title="Previous Experience"
                                                htmlContent={speakerDetail.previousExperience}
                                          />

                                          <ModalSanitizedText
                                                title="Previous Conference"
                                                htmlContent={speakerDetail.previousConferences}
                                          />
                                    </article>
                              </section>
                              <section className="flex flex-col gap-6 w-full">
                                    <ModalSectionHeader title="Session Information" />

                                    <article
                                          className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                                sm:grid-cols-2 sm:px-2
                                          "
                                    >
                                          <ModalText
                                                title="Willing to travel"
                                                data={speakerDetail.willingToTravel ? "Yes" : "No"}
                                          />

                                          <ModalText
                                                title="Audio/view Requirement"
                                                data={speakerDetail.avRequirements}
                                          />

                                          <ModalText
                                                title="Preferred session length (in minutes)"
                                                data={speakerDetail.preferredSessionLengthMinutes}
                                          />
                                          <br />

                                          <ModalSanitizedText
                                                containerClassName="sm:col-span-2"
                                                title="Accommodation Needs"
                                                htmlContent={"speakerDetail.accommodationNeeds"}
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
                              <section className="flex flex-col gap-6 w-full">
                                    <ModalSectionHeader title="Additional Information" />

                                    <article
                                          className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                                sm:grid-cols-2 sm:px-2
                                          "
                                    >
                                          <ModalText
                                                title="Reference Contact"
                                                data={speakerDetail.referenceContacts}
                                          />
                                    </article>
                              </section>
                        </main>
                  </div>
            </Modal>
      );
}

export default AdminViewAppliedSpeakerModal;