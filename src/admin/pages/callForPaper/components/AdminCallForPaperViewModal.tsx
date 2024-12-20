import { ICallForPaperDetailModel } from "@/admin/model/callForPaper/callForPaperModel";
import { Modal, ModalSanitizedText, ModalSectionHeader, ModalText } from "@/shared/modal";

interface IAdminCallForPaperViewModal {
      closeModalHandler: () => void;
      callForPaperDetail: ICallForPaperDetailModel;
}

function AdminCallForPaperViewModal({ callForPaperDetail, closeModalHandler }: IAdminCallForPaperViewModal) {
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
                              <ModalSectionHeader title="Personal Information" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText title="Speaker Name" data={callForPaperDetail.name} />

                                    <ModalText title="Email Address" data={callForPaperDetail.email} />

                                    <ModalText title="Phone Number" data={callForPaperDetail.phoneNumber} />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Professional Information" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText title="Affiliation" data={callForPaperDetail.affiliation} />

                                    <ModalText title="Designation" data={callForPaperDetail.jobTitle} />

                                    <ModalText title="LinkedIn" data={callForPaperDetail.linkedInProfile} />

                                    <ModalText title="Twitter" data={callForPaperDetail.twitterHandle} />

                                    <ModalText
                                          title="Personal Website"
                                          data={callForPaperDetail.professionalWebsite}
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
                                    <ModalSanitizedText
                                          title=""
                                          htmlContent={callForPaperDetail.briefBiography}
                                    />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Previous Experience" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText
                                          title="Previous Experience"
                                          data={callForPaperDetail.previousExperience}
                                    />

                                    <ModalText
                                          title="List of Conferences"
                                          data={callForPaperDetail.listOfConferences}
                                    />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Participation Preferences" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText
                                          title="Willing Participate In Panel"
                                          data={callForPaperDetail.willParticipateInPanel ? "YES" : "NO"}
                                    />

                                    <ModalText
                                          title="Will Participate in Workshop"
                                          data={callForPaperDetail.willParticipateInWorkshop ? "YES" : "NO"}
                                    />

                                    <span className="sm:col-span-2">
                                          <ModalSanitizedText
                                                title="Special Accommodation Needs"
                                                htmlContent={callForPaperDetail.specialAccommodationNeeds}
                                          />
                                    </span>

                                    <span className="sm:col-span-2">
                                          <ModalSanitizedText
                                                title="Additional Requirements"
                                                htmlContent={callForPaperDetail.additionalRequirements}
                                          />
                                    </span>
                              </article>
                        </section>
                  </span>
            </Modal>
      );
}

export default AdminCallForPaperViewModal;
