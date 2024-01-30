import AppIcon from "@/shared/icon/AppIcon";
import { ModalSanitizedText } from "@/shared/modal";
import AppliedDetailText from "../components/AppliedDetailText";
import AppliedDetailTitle from "../components/AppliedDetailTitle";
import { IAppliedCallForPaperBasicModel } from "@/admin/model/appliedHistory/appliedHistoryModel";

interface IAppliedCallForPaperDetail {
      appliedCallForPaper: IAppliedCallForPaperBasicModel;
      openAppliedCallForPaperEditForm: () => void;
}

function AppliedCallForPaperDetail({
      appliedCallForPaper,
      openAppliedCallForPaperEditForm,
}: IAppliedCallForPaperDetail) {
      return (
            <div className="flex flex-col gap-10">
                  <h4 className="font-bold text-base">Call For Paper Application</h4>

                  <span className="flex flex-col gap-6">
                        <span className="relative w-full border rounded-md py-8 px-8">
                              <aside
                                    className="absolute top-2 right-2
                                          md:top-4 md:right-4
                                    "
                              >
                                    <button
                                          type="button"
                                          title="edit"
                                          className="active:text-primary"
                                          onClick={openAppliedCallForPaperEditForm}
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
                                          data={appliedCallForPaper.linkedInProfile}
                                    />

                                    <AppliedDetailText
                                          title="Twitter"
                                          dataClassName="break-words"
                                          data={appliedCallForPaper.twitterHandle}
                                    />

                                    <AppliedDetailText
                                          title="Personal Website"
                                          dataClassName="break-words"
                                          data={appliedCallForPaper.professionalWebsite}
                                    />

                                    <ModalSanitizedText
                                          title="Biography"
                                          containerClassName="md:col-span-2"
                                          htmlContent={appliedCallForPaper.briefBiography}
                                    />
                              </section>
                        </span>

                        <section
                              className="grid grid-cols-1 gap-y-2 gap-x-8 w-full gap-20 border rounded-md py-8 px-8
                                    sm:gap-y-4
                                    md:grid-cols-2
                              "
                        >
                              <AppliedDetailTitle title="Previous Experience" />

                              <AppliedDetailText
                                    title="Previous Experience"
                                    data={appliedCallForPaper.previousExperience}
                              />

                              <AppliedDetailText
                                    title="List of Conference"
                                    data={appliedCallForPaper.listOfConferences}
                              />
                        </section>

                        <section
                              className="grid grid-cols-1 gap-y-2 gap-x-8 w-full gap-20 border rounded-md py-8 px-8
                                    sm:gap-y-4
                                    md:grid-cols-2
                              "
                        >
                              <AppliedDetailTitle title="Participation Preferences" />

                              <AppliedDetailText
                                    title="Will Participate In Panel"
                                    data={appliedCallForPaper.willParticipateInPanel ? "YES" : "NO"}
                              />

                              <AppliedDetailText
                                    title="Will Participate In Workshop"
                                    data={appliedCallForPaper.willParticipateInWorkshop ? "YES" : "NO"}
                              />

                              <ModalSanitizedText
                                    title="Special Accommodation Needs"
                                    containerClassName="md:col-span-2"
                                    htmlContent={appliedCallForPaper.specialAccommodationNeeds}
                              />

                              <ModalSanitizedText
                                    title="Additional Requirements"
                                    containerClassName="md:col-span-2"
                                    htmlContent={appliedCallForPaper.additionalRequirements}
                              />
                        </section>

                        <section
                              className="grid grid-cols-1 gap-y-2 gap-x-8 w-full gap-20 border rounded-md py-8 px-8
                                    sm:gap-y-4
                                    md:grid-cols-2
                              "
                        >
                              <AppliedDetailTitle title="Additional Information" />

                              <AppliedDetailText
                                    title="Confirm Present"
                                    data={appliedCallForPaper.confirmPresent ? "YES" : "NO"}
                              />

                              <AppliedDetailText
                                    title="Accept Term and condition"
                                    data={appliedCallForPaper.acceptTandC ? "YES" : "NO"}
                              />
                        </section>
                  </span>
            </div>
      );
}

export default AppliedCallForPaperDetail;
