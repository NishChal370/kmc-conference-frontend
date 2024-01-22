import { BaseSyntheticEvent } from "react";
import { SwiperSlide } from "swiper/react";
import FormSwiperWrapper from "@/shared/swiper/FormSwiperWrapper";
import BecomeCallForPaperHeader from "../component/BecomeCallForPaperHeader";
import ExperienceFormContainer from "../container/ExperienceFormContainer";
import PreferenceFormContainer from "../container/PreferenceFormContainer";
import AdditionalFormContainer from "../container/AdditionalFormContainer";
import SessionProposalFormContainer from "../container/SessionProposalFormContainer";
import PersonalInformationFormContainer from "../container/PersonalInformationFormContainer";
import PresentationAndPaperDetailFormContainer from "../container/PresentationAndPaperDetailFormContainer";
import getTokenDetail from "@/utils/token/getTokenDetail";

interface IBecomeCallForPaperForm {
      submitFullForm: (e?: BaseSyntheticEvent) => void;
      partialSubmitHandler: (fields: unknown) => Promise<void>;
}

function BecomeCallForPaperForm({ submitFullForm, partialSubmitHandler }: IBecomeCallForPaperForm) {
      return (
            <form className="flex w-full flex-col justify-center h-auto py-4" onSubmit={submitFullForm}>
                  <FormSwiperWrapper
                        extraClassName="min-h-[52rem] 
                              xs:min-h-[50rem] 
                              sm:min-h-[44rem] 
                              lg:min-h-[44rem]
                        "
                  >
                        {({ slideToNext, slideToPrev }, refSetter) => (
                              <>
                                    <SwiperSlide
                                          className="[&>span]:flex [&>span]:flex-col [&>span]:gap-12
                                                [&>span>div]:grid [&>span>div]:grid-cols-1 [&>span>div]:gap-x-6 [&>span>div]:gap-y-6 [&>span>div]:w-full
                                                [&>span>div]:md:grid-cols-2 [&>span>div]:md:gap-y-10
                                          "
                                          virtualIndex={0}
                                    >
                                          <span ref={refSetter}>
                                                <BecomeCallForPaperHeader
                                                      title="Personal Information"
                                                      subTitle={
                                                            "Logged in " + getTokenDetail.loggedInUserEmail()
                                                      }
                                                />

                                                <PersonalInformationFormContainer
                                                      submitToParent={(fields) => {
                                                            partialSubmitHandler(fields).then(() => {
                                                                  slideToNext();
                                                            });
                                                      }}
                                                />
                                          </span>
                                    </SwiperSlide>

                                    <SwiperSlide
                                          className="[&>span]:flex [&>span]:flex-col [&>span]:gap-12
                                                [&>span>div]:grid [&>span>div]:grid-cols-1 [&>span>div]:gap-x-6 [&>span>div]:gap-y-6 [&>span>div]:w-full
                                                [&>span>div]:md:grid-cols-2 [&>span>div]:md:gap-y-10
                                          "
                                          virtualIndex={1}
                                    >
                                          <span ref={refSetter}>
                                                <BecomeCallForPaperHeader title="Session Proposals Information" />

                                                <SessionProposalFormContainer
                                                      slideToPrev={slideToPrev}
                                                      submitToParent={(fields) => {
                                                            partialSubmitHandler(fields).then(() => {
                                                                  slideToNext();
                                                            });
                                                      }}
                                                />
                                          </span>
                                    </SwiperSlide>

                                    <SwiperSlide
                                          className="[&>span]:flex [&>span]:flex-col [&>span]:gap-12
                                                [&>span>div]:grid [&>span>div]:grid-cols-1 [&>span>div]:gap-x-6 [&>span>div]:gap-y-6 [&>span>div]:w-full
                                                [&>span>div]:md:grid-cols-2 [&>span>div]:md:gap-y-10
                                          "
                                          virtualIndex={2}
                                    >
                                          <span ref={refSetter}>
                                                <BecomeCallForPaperHeader title="Presentation and Paper Detail Information" />

                                                <PresentationAndPaperDetailFormContainer
                                                      slideToPrev={slideToPrev}
                                                      submitToParent={(fields) => {
                                                            partialSubmitHandler(fields).then(() => {
                                                                  slideToNext();
                                                            });
                                                      }}
                                                />
                                          </span>
                                    </SwiperSlide>

                                    <SwiperSlide
                                          className="[&>span]:flex [&>span]:flex-col [&>span]:gap-12
                                                [&>span>div]:grid [&>span>div]:grid-cols-1 [&>span>div]:gap-x-6 [&>span>div]:gap-y-6 [&>span>div]:w-full
                                                [&>span>div]:md:grid-cols-2 [&>span>div]:md:gap-y-10
                                          "
                                          virtualIndex={3}
                                    >
                                          <span ref={refSetter}>
                                                <BecomeCallForPaperHeader title="Previous Experience Information" />

                                                <ExperienceFormContainer
                                                      slideToPrev={slideToPrev}
                                                      submitToParent={(fields) => {
                                                            partialSubmitHandler(fields).then(() => {
                                                                  slideToNext();
                                                            });
                                                      }}
                                                />
                                          </span>
                                    </SwiperSlide>

                                    <SwiperSlide
                                          className="[&>span]:flex [&>span]:flex-col [&>span]:gap-12
                                                [&>span>div]:grid [&>span>div]:grid-cols-1 [&>span>div]:gap-x-6 [&>span>div]:gap-y-6 [&>span>div]:w-full
                                                [&>span>div]:md:grid-cols-2 [&>span>div]:md:gap-y-10
                                          "
                                          virtualIndex={4}
                                    >
                                          <span ref={refSetter}>
                                                <BecomeCallForPaperHeader title="Participation Preferences" />

                                                <PreferenceFormContainer
                                                      slideToPrev={slideToPrev}
                                                      submitToParent={(fields) => {
                                                            partialSubmitHandler(fields).then(() => {
                                                                  slideToNext();
                                                            });
                                                      }}
                                                />
                                          </span>
                                    </SwiperSlide>

                                    <SwiperSlide
                                          className="[&>span]:flex [&>span]:flex-col [&>span]:gap-12
                                                [&>span>div]:grid [&>span>div]:grid-cols-1 [&>span>div]:gap-x-6 [&>span>div]:gap-y-6 [&>span>div]:w-full
                                                [&>span>div]:md:grid-cols-2 [&>span>div]:md:gap-y-10
                                          "
                                          virtualIndex={5}
                                    >
                                          <span ref={refSetter}>
                                                <BecomeCallForPaperHeader title="Additional Information" />

                                                <AdditionalFormContainer slideToPrev={slideToPrev} />
                                          </span>
                                    </SwiperSlide>
                              </>
                        )}
                  </FormSwiperWrapper>
            </form>
      );
}

export default BecomeCallForPaperForm;
