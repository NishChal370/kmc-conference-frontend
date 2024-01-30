import AppIcon from "@/shared/icon/AppIcon";
import { ModalSanitizedText } from "@/shared/modal";
import ServerImage from "@/shared/serverImage/ServerImage";
import AppliedDetailText from "../components/AppliedDetailText";
import AppliedDetailTitle from "../components/AppliedDetailTitle";
import { IAppliedSpeakerBasic } from "@/admin/model/appliedHistory/appliedHistoryModel";

interface IAppliedSpeakingDetail {
      appliedSpeaking: IAppliedSpeakerBasic;
}
function AppliedSpeakingDetail({ appliedSpeaking }: IAppliedSpeakingDetail) {
      return (
            <div className="flex flex-col gap-10">
                  <h4 className="font-bold text-base">Speaker Application</h4>

                  <span className="flex flex-col gap-6">
                        <span
                              className="relative w-full flex flex-col gap-10 border rounded-md py-8 px-8
                                    sm:flex-row
                                    md:gap-20
                              "
                        >
                              <aside
                                    className="absolute top-2 right-2
                                          md:top-4 md:right-4
                                    "
                              >
                                    <button type="button" title="edit" className="active:text-primary">
                                          <AppIcon name="update" />
                                    </button>
                              </aside>

                              <ServerImage image={appliedSpeaking.photo} className="w-48 h-48 object-cover" />

                              <section
                                    className="grid grid-cols-1 gap-y-2 gap-x-8 w-full
                                          sm:gap-y-4
                                          md:grid-cols-2
                                    "
                              >
                                    <AppliedDetailText
                                          title="LinkedIn"
                                          containerClassName="break-words"
                                          data={appliedSpeaking.linkedInProfile}
                                    />

                                    <AppliedDetailText
                                          title="Twitter"
                                          containerClassName="break-words"
                                          data={appliedSpeaking.twitterHandle}
                                    />

                                    <AppliedDetailText
                                          title="Personal Website"
                                          containerClassName="break-words"
                                          data={appliedSpeaking.professionalWebsite}
                                    />

                                    <ModalSanitizedText
                                          title="Bio Information"
                                          containerClassName="md:col-span-2"
                                          htmlContent={appliedSpeaking.bio}
                                    />
                              </section>
                        </span>

                        <section
                              className="grid grid-cols-1 gap-y-2 gap-x-8 w-full gap-20 border rounded-md py-8 px-8
                                    sm:gap-y-4
                                    md:grid-cols-2
                              "
                        >
                              <AppliedDetailTitle title="Professional Background" />

                              <AppliedDetailText
                                    title="Expertise In Field"
                                    data={appliedSpeaking.expertiseInField}
                              />

                              <AppliedDetailText title="Publications" data={appliedSpeaking.publications} />

                              <AppliedDetailText
                                    title="Previous Speaking Engagement"
                                    data={appliedSpeaking.previousSpeakingEngagements}
                              />

                              <br className="hidden md:flex" />

                              <ModalSanitizedText
                                    title="Previous Experience"
                                    htmlContent={appliedSpeaking.previousExperience}
                              />

                              <ModalSanitizedText
                                    title="Previous Conference"
                                    htmlContent={appliedSpeaking.previousConferences}
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
                                    title="Willing To Travel"
                                    data={appliedSpeaking.willingToTravel ? "YES" : "NO"}
                              />

                              <AppliedDetailText
                                    title="Reference Contacts"
                                    data={appliedSpeaking.referenceContacts}
                              />

                              <AppliedDetailText
                                    title="Agreed Dates"
                                    data={appliedSpeaking.agreedToDates ? "YES" : "NO"}
                              />

                              <ModalSanitizedText
                                    containerClassName="md:col-span-2"
                                    title="Accommodation Needs"
                                    htmlContent={appliedSpeaking.accommodationNeeds}
                              />
                        </section>
                  </span>
            </div>
      );
}

export default AppliedSpeakingDetail;
