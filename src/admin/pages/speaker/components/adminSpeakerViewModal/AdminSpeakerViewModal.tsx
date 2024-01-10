import { Fragment } from "react";
import { Modal } from "@/shared/modal";
import InformationItem from "./InformationItem";
import InformationSection from "./InformationSection";
import SpeakerProfileSection from "./SpeakerProfileSection";
import InformationArticleItem from "./InformationArticleItem";
import { IAdminSpeakerFullDetail } from "@/admin/model/speaker/adminSpeakerModel";

interface IAdminSpeakerViewModal {
      closeModalHandler: () => void;
      speakerDetail: IAdminSpeakerFullDetail;
}

function AdminSpeakerViewModal({ speakerDetail, closeModalHandler }: IAdminSpeakerViewModal) {
      return (
            <Modal title="View Speaker Detail" size="max-w-[84rem]" closeHandler={closeModalHandler}>
                  <div
                        className="flex flex-col gap-0 w-full max-w-[84rem] h-full
                              lg:flex-row
                        "
                  >
                        <SpeakerProfileSection
                              image={speakerDetail.phone}
                              name={
                                    speakerDetail.firstName +
                                    " " +
                                    speakerDetail.middleName +
                                    " " +
                                    speakerDetail.lastName
                              }
                              designation="Different publication types"
                        />

                        <aside
                              className="w-full h-full flex flex-col gap-4 mb-14 px-2
                                    [&>section]:md:px-10
                                    [&>hr]:border-mute-1/75
                              "
                        >
                              <InformationSection title="Personal Information">
                                    <article>
                                          <InformationItem
                                                title="First Name"
                                                detail={speakerDetail.firstName}
                                          />

                                          <InformationItem
                                                title="Middle Name"
                                                detail={speakerDetail.middleName}
                                          />

                                          <InformationItem
                                                title="Last Name"
                                                detail={speakerDetail.lastName}
                                          />

                                          <InformationItem title="Email" detail={speakerDetail.email} />

                                          <InformationItem
                                                title="Phone Number"
                                                detail={speakerDetail.phone}
                                          />
                                    </article>
                              </InformationSection>

                              <InformationSection title="Professional Information">
                                    <article>
                                          <InformationItem title="Title" detail={speakerDetail.title} />

                                          <InformationItem
                                                title="Affiliation"
                                                detail={speakerDetail.affiliation}
                                          />

                                          <InformationItem
                                                title="Designation"
                                                detail={speakerDetail.jobTitle}
                                          />

                                          <InformationItem
                                                title="LinkedIn"
                                                type="link"
                                                link={speakerDetail.linkedInProfile}
                                                detail={speakerDetail.linkedInProfile}
                                          />

                                          <InformationItem
                                                title="Twitter"
                                                type="link"
                                                link={speakerDetail.twitterHandle}
                                                detail={speakerDetail.twitterHandle}
                                          />

                                          <InformationItem
                                                title="Personal Website"
                                                type="link"
                                                link={speakerDetail.professionalWebsite}
                                                detail={speakerDetail.professionalWebsite}
                                          />
                                    </article>
                              </InformationSection>

                              <InformationSection title="Biographical Information">
                                    <InformationArticleItem detail={speakerDetail.bio} />
                              </InformationSection>

                              <InformationSection title="Professional Background">
                                    <article>
                                          <InformationItem
                                                title="Expertise in Field"
                                                detail={speakerDetail.expertiseInField}
                                          />

                                          <InformationItem
                                                title="Publications"
                                                type="list"
                                                items={speakerDetail.publications}
                                          />

                                          <InformationItem
                                                title="Previous Speaking Engagements"
                                                type="list"
                                                items={speakerDetail.previousSpeakingEngagements}
                                          />

                                          <InformationArticleItem
                                                title="Previous Experience "
                                                detail={speakerDetail.previousExperience}
                                          />

                                          <InformationArticleItem
                                                title="Previous Conference "
                                                detail={speakerDetail.previousConferences}
                                          />
                                    </article>
                              </InformationSection>

                              <InformationSection title="Session Background">
                                    <article>
                                          <InformationItem
                                                title="Willing to travel"
                                                detail={speakerDetail.willingToTravel ? "Yes" : "No"}
                                          />

                                          <InformationItem
                                                title="Audio/view Requirement"
                                                detail={speakerDetail.avRequirements}
                                          />

                                          <InformationItem
                                                title="Preferred session length (in minutes)"
                                                detail={speakerDetail.preferredSessionLengthMinutes.toString()}
                                          />

                                          <InformationArticleItem
                                                title="Accommodation Needs"
                                                detail={speakerDetail.accommodationNeeds}
                                          />
                                    </article>
                              </InformationSection>

                              <InformationSection title="Additional Information">
                                    <article>
                                          <span>
                                                <h6>Reference Contact</h6>

                                                <p>
                                                      {speakerDetail.referenceContacts.length
                                                            ? speakerDetail.referenceContacts.map(
                                                                    (contact) => (
                                                                          <Fragment key={contact}>
                                                                                <span>{contact}</span>
                                                                                <br />
                                                                          </Fragment>
                                                                    )
                                                              )
                                                            : "---"}
                                                </p>
                                          </span>
                                    </article>
                              </InformationSection>
                        </aside>
                  </div>
            </Modal>
      );
}

export default AdminSpeakerViewModal;
