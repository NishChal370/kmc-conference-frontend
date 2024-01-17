import { IAppliedParticipationDetailedModel } from "@/admin/model/appliedHistory/appliedHistoryModel";
import { Modal, ModalSanitizedText, ModalSectionHeader, ModalText } from "@/shared/modal";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";

interface IAdminViewAppliedParticipationModal {
      participationDetail: IAppliedParticipationDetailedModel;
      closeModalHandler: () => void;
}
function AdminViewAppliedParticipationModal({
      participationDetail,
      closeModalHandler,
}: IAdminViewAppliedParticipationModal) {
      return (
            <Modal
                  title="View Participation Detail"
                  size="w-full lg:!max-w-[76rem]"
                  closeHandler={closeModalHandler}
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
                                    <ModalText title="Session Title" data={participationDetail.title} />

                                    <ModalText title="Session Location" data={participationDetail.location} />

                                    <ModalText
                                          title="Session Time"
                                          data={
                                                participationDetail.startTime +
                                                " " +
                                                participationDetail.endTime
                                          }
                                    />

                                    {/* //TODO: add this if they asked */}
                                    {/* <ModalText
                                    title="Registration Fee Payment Details"
                                    data={participationDetail.registrationFeePaymentDetails}
                              /> */}

                                    <ModalText
                                          title="Special Requirements"
                                          data={participationDetail.specialRequirements}
                                    />
                              </article>
                        </section>

                        <section className="flex flex-col gap-6 w-full">
                              <ModalSectionHeader title="Contact Information" />

                              <article
                                    className="grid grid-cols-1 gap-y-8 gap-x-10 w-full
                                          sm:grid-cols-2 sm:px-2
                                    "
                              >
                                    <ModalText title="Country" data={participationDetail.country} />

                                    <ModalText title="State" data={participationDetail.state} />

                                    <ModalText title="City" data={participationDetail.city} />

                                    <ModalText title="Address" data={participationDetail.address} />

                                    <ModalText title="Postal Code" data={participationDetail.postalCode} />
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
                                          data={participationDetail.emergencyContactName}
                                    />

                                    <ModalText
                                          title="Relationship With Emergency Contact"
                                          data={participationDetail.relationshipWithEmergencyContact}
                                    />

                                    <ModalText
                                          title="Emergency Contact Number"
                                          data={participationDetail.emergencyContactName}
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
                                    <ModalText
                                          title="LinkedIn Profile"
                                          data={participationDetail.linkedInProfile}
                                    />

                                    <ModalText
                                          title="Twitter Handle"
                                          data={participationDetail.twitterHandle}
                                    />

                                    <ModalSanitizedText
                                          title="Bio"
                                          containerClassName="sm:col-span-2"
                                          htmlContent={participationDetail.bio}
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
                                          data={participationDetail.registrationType}
                                    />

                                    <ModalText
                                          title="Track Preferences"
                                          data={participationDetail.trackPreferences}
                                    />

                                    {/* //TODO: add this if they asked */}
                                    {/* <ModalText
                                    title="Registration Fee Payment Details"
                                    data={participationDetail.registrationFeePaymentDetails}
                              /> */}

                                    <ModalText
                                          title="Special Requirements"
                                          data={participationDetail.specialRequirements}
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
                                          data={participationDetail.hotelPreferences}
                                    />

                                    <ModalText
                                          title="Roommate Preferences"
                                          data={participationDetail.roommatePreferences}
                                    />

                                    <ModalText
                                          title="Arrival Date"
                                          data={changeDateFormat(participationDetail.arrivalDate)}
                                    />

                                    <ModalText
                                          title="Departure Date"
                                          data={changeDateFormat(participationDetail.departureDate)}
                                    />

                                    <ModalText
                                          title="Mode of Transportation"
                                          data={participationDetail.modeOfTransportation}
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
                                          data={participationDetail.conferenceDiscoverySource}
                                    />

                                    <ModalText
                                          title="Expectations/Goals"
                                          data={participationDetail.expectationsGoals}
                                    />

                                    <ModalText
                                          title="Consent to Photography"
                                          data={participationDetail.consentToPhotography ? "YES" : "NO"}
                                    />

                                    <ModalText
                                          title="Has Read Privacy Policy"
                                          data={participationDetail.hasReadPrivacy ? "YES" : "NO"}
                                    />
                              </article>
                        </section>
                  </span>
            </Modal>
      );
}

export default AdminViewAppliedParticipationModal;
