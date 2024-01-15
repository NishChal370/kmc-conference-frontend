import { IParticipantModel } from "@/admin/model/participant/participantModel";
import { Modal, ModalSanitizedText, ModalSectionHeader, ModalText } from "@/shared/modal";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";

interface IAdminParticipantViewModal {
      participant: IParticipantModel;
      closeModalHandler: () => void;
}
function AdminParticipantViewModal({ participant, closeModalHandler }: IAdminParticipantViewModal) {
      return (
            <Modal
                  title="View Participant Detail"
                  size="w-full lg:!max-w-[76rem]"
                  closeHandler={closeModalHandler}
            >
                  <span
                        className="mb-6 w-full flex flex-col gap-y-20 tracking-wide
                              sm:px-2
                        "
                  >
                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Participant Identification" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText title="Participant Name" data={participant.name} />
                                    <ModalText title="Job Title" data={participant.jobTitle} />
                                    <ModalText title="Affiliation" data={participant.affiliation} />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Contact Information" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText title="Email Address" data={participant.email} />

                                    <ModalText title="Phone Number" data={participant.phoneNumber} />

                                    <ModalText title="Country" data={participant.country} />

                                    <ModalText title="State" data={participant.state} />

                                    <ModalText title="City" data={participant.city} />

                                    <ModalText title="Address" data={participant.address} />

                                    <ModalText title="Postal Code" data={participant.postalCode} />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Emergency Contact" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText
                                          title="Emergency Contact Name"
                                          data={participant.emergencyContactName}
                                    />

                                    <ModalText
                                          title="Relationship With Emergency Contact"
                                          data={participant.relationshipWithEmergencyContact}
                                    />

                                    <ModalText
                                          title="Emergency Contact Number"
                                          data={participant.emergencyContactName}
                                    />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Personal Profile" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText title="LinkedIn Profile" data={participant.linkedInProfile} />

                                    <ModalText title="Twitter Handle" data={participant.twitterHandle} />

                                    <ModalSanitizedText
                                          title="Bio"
                                          containerClassName="sm:col-span-2"
                                          htmlContent={participant.bio}
                                    />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Session Specifics" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText
                                          title="Registration Type"
                                          data={participant.registrationType}
                                    />

                                    <ModalText
                                          title="Session Choices"
                                          data={participant.sessionChoices.map(({ title }) => title)}
                                    />

                                    <ModalText
                                          title="Track Preferences"
                                          data={participant.trackPreferences}
                                    />
                                    {/* <ModalText
                                          title="Registration Fee Payment Details"
                                          data={participant.registrationFeePaymentDetails}
                                    /> */}
                                    <ModalText
                                          title="Special Requirements"
                                          data={participant.specialRequirements}
                                    />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Accommodation and Travel" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText
                                          title="Hotel Preferences"
                                          data={participant.hotelPreferences}
                                    />

                                    <ModalText
                                          title="Roommate Preferences"
                                          data={participant.roommatePreferences}
                                    />

                                    <ModalText
                                          title="Arrival Date"
                                          data={changeDateFormat(participant.arrivalDate)}
                                    />

                                    <ModalText
                                          title="Departure Date"
                                          data={changeDateFormat(participant.departureDate)}
                                    />

                                    <ModalText
                                          title="Mode of Transportation"
                                          data={participant.modeOfTransportation}
                                    />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Additional Details" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText
                                          title="Conference Discovery Source"
                                          data={participant.conferenceDiscoverySource}
                                    />

                                    <ModalText
                                          title="Expectations/Goals"
                                          data={participant.expectationsGoals}
                                    />

                                    <ModalText
                                          title="Consent to Photography"
                                          data={participant.consentToPhotography ? "YES" : "NO"}
                                    />

                                    <ModalText
                                          title="Has Read Privacy Policy"
                                          data={participant.hasReadPrivacy ? "YES" : "NO"}
                                    />
                              </article>
                        </section>
                  </span>
            </Modal>
      );
}

export default AdminParticipantViewModal;
