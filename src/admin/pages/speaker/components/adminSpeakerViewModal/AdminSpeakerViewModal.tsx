import SpeakerProfileSection from "./SpeakerProfileSection";
import { Modal, ModalSanitizedText, ModalSectionHeader, ModalText } from "@/shared/modal";
import { ISpeakerDetailModel } from "@/admin/model/speaker/adminSpeakerModel";

interface IAdminSpeakerViewModal {
      closeModalHandler: () => void;
      speakerDetail: ISpeakerDetailModel;
}

function AdminSpeakerViewModal({ speakerDetail, closeModalHandler }: IAdminSpeakerViewModal) {
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
                        <SpeakerProfileSection
                              image={speakerDetail.phone}
                              name={speakerDetail.name}
                              designation="Different publication types"
                        />

                        <main
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
                                          <span
                                                className="sm:col-span-2 grid grid-cols-1 gap-10 w-full
                                                      sm:grid-cols-2
                                                      lg:grid-cols-3 sm:px-2
                                                "
                                          >
                                                <ModalText title="First Name" data={speakerDetail.name} />

                                                <ModalText title="Middle Name" data={speakerDetail.name} />

                                                <ModalText title="Last Name" data={speakerDetail.name} />
                                          </span>

                                          <ModalText title="Email Address" data={speakerDetail.email} />

                                          <ModalText title="Phone Number" data={speakerDetail.phone} />
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

                                          <ModalText title="Designation" data={speakerDetail.jobTitle} />

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

                                          <ModalText
                                                title="Previous Experience"
                                                data={speakerDetail.previousExperience}
                                          />

                                          <ModalText
                                                title="Previous Conference"
                                                data={speakerDetail.previousConferences}
                                          />
                                    </article>
                              </section>
                              <section className="flex flex-col gap-6 w-full">
                                    <ModalSectionHeader title="Session Background" />

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

                                          <ModalText
                                                title="Accommodation Needs"
                                                data={speakerDetail.accommodationNeeds}
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

export default AdminSpeakerViewModal;
