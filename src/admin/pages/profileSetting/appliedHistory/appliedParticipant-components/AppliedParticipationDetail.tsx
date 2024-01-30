import { IAppliedParticipationBasicModel } from "@/admin/model/appliedHistory/appliedHistoryModel";
import AppIcon from "@/shared/icon/AppIcon";
import AppliedDetailText from "../components/AppliedDetailText";
import { ModalSanitizedText } from "@/shared/modal";
import AppliedDetailTitle from "../components/AppliedDetailTitle";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";

interface IAppliedParticipationDetail {
      appliedParticipation: IAppliedParticipationBasicModel;
      openAppliedParticipationEditForm: () => void;
}
function AppliedParticipationDetail({
      appliedParticipation,
      openAppliedParticipationEditForm,
}: IAppliedParticipationDetail) {
      return (
            <div className="flex flex-col gap-10">
                  <h4 className="font-bold text-base">Participation Application</h4>

                  <span className="flex flex-col gap-6">
                        <span className="relative w-full  border rounded-md py-8 px-8">
                              <aside
                                    className="absolute top-2 right-2
                                          md:top-4 md:right-4
                                    "
                              >
                                    <button
                                          type="button"
                                          title="edit"
                                          className="active:text-primary"
                                          onClick={openAppliedParticipationEditForm}
                                    >
                                          <AppIcon name="update" />
                                    </button>
                              </aside>

                              <section
                                    className="grid grid-cols-1 gap-y-2 gap-x-8 w-full
                                          sm:gap-y-4
                                          md:grid-cols-2
                                    "
                              >
                                    <AppliedDetailText
                                          title="LinkedIn"
                                          dataClassName="break-words"
                                          data={appliedParticipation.linkedInProfile}
                                    />

                                    <AppliedDetailText
                                          title="Twitter"
                                          dataClassName="break-words"
                                          data={appliedParticipation.twitterHandle}
                                    />

                                    <ModalSanitizedText
                                          title="Biography"
                                          containerClassName="md:col-span-2"
                                          htmlContent={appliedParticipation.bio}
                                    />
                              </section>
                        </span>

                        <section
                              className="grid grid-cols-1 gap-y-2 gap-x-8 w-full gap-20 border rounded-md py-8 px-8
                                    sm:gap-y-4
                                    md:grid-cols-2
                              "
                        >
                              <AppliedDetailTitle title="Contact Information" />

                              <AppliedDetailText title="Country" data={appliedParticipation.country} />

                              <AppliedDetailText title="State" data={appliedParticipation.state} />

                              <AppliedDetailText title="City" data={appliedParticipation.city} />

                              <AppliedDetailText title="Address" data={appliedParticipation.address} />

                              <AppliedDetailText title="Postal Code" data={appliedParticipation.postalCode} />
                        </section>

                        <section
                              className="grid grid-cols-1 gap-y-2 gap-x-8 w-full gap-20 border rounded-md py-8 px-8
                                    sm:gap-y-4
                                    md:grid-cols-2
                              "
                        >
                              <AppliedDetailTitle title="Emergency Contact Information" />

                              <AppliedDetailText
                                    title="Emergency Contact Name"
                                    data={appliedParticipation.emergencyContactName}
                              />

                              <AppliedDetailText
                                    title="Relationship With Emergency Contact"
                                    data={appliedParticipation.relationshipWithEmergencyContact}
                              />

                              <AppliedDetailText
                                    title="Emergency Contact Number"
                                    data={appliedParticipation.emergencyContactName}
                              />
                        </section>

                        <section
                              className="grid grid-cols-1 gap-y-2 gap-x-8 w-full gap-20 border rounded-md py-8 px-8
                                    sm:gap-y-4
                                    md:grid-cols-2
                              "
                        >
                              <AppliedDetailTitle title="Session Specifics Information" />

                              <AppliedDetailText
                                    title="Registration Type"
                                    data={appliedParticipation.registrationType}
                              />

                              <AppliedDetailText
                                    title="Track Preferences"
                                    data={appliedParticipation.trackPreferences}
                              />
                              {/* //TODO: add this if they asked 
                                     <AppliedDetailText
                                    title="Registration Fee Payment Details"
                                    data={appliedParticipation.registrationFeePaymentDetails}
                              />  */}

                              <AppliedDetailText
                                    title="Special Requirements"
                                    data={appliedParticipation.specialRequirements}
                              />

                              <AppliedDetailText
                                    title="Special Requirements"
                                    data={appliedParticipation.specialRequirements}
                              />
                        </section>

                        <section
                              className="grid grid-cols-1 gap-y-2 gap-x-8 w-full gap-20 border rounded-md py-8 px-8
                                    sm:gap-y-4
                                    md:grid-cols-2
                              "
                        >
                              <AppliedDetailTitle title="Accommodation and Travel" />

                              <AppliedDetailText
                                    title="Arrival Date"
                                    data={changeDateFormat(appliedParticipation.arrivalDate)}
                              />

                              <AppliedDetailText
                                    title="Departure Date"
                                    data={changeDateFormat(appliedParticipation.departureDate)}
                              />

                              <AppliedDetailText
                                    title="Mode of Transportation"
                                    data={appliedParticipation.modeOfTransportation}
                              />

                              <AppliedDetailText
                                    title="Hotel Preferences"
                                    data={appliedParticipation.hotelPreferences}
                              />

                              <AppliedDetailText
                                    title="Roommate Preferences"
                                    data={appliedParticipation.roommatePreferences}
                              />
                        </section>

                        <section
                              className="grid grid-cols-1 gap-y-2 gap-x-8 w-full gap-20 border rounded-md py-8 px-8
                                    sm:gap-y-4
                                    md:grid-cols-2
                              "
                        >
                              <AppliedDetailTitle title="Additional Details" />

                              <AppliedDetailText
                                    title="Conference Discovery Source"
                                    data={appliedParticipation.conferenceDiscoverySource}
                              />

                              <AppliedDetailText
                                    title="Expectations/Goals"
                                    data={appliedParticipation.expectationsGoals}
                              />

                              <AppliedDetailText
                                    title="Consent to Photography"
                                    data={appliedParticipation.consentToPhotography ? "YES" : "NO"}
                              />

                              <AppliedDetailText
                                    title="Has Read Privacy Policy"
                                    data={appliedParticipation.hasReadPrivacy ? "YES" : "NO"}
                              />
                        </section>
                  </span>
            </div>
      );
}

export default AppliedParticipationDetail;
