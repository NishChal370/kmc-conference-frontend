import { BaseSyntheticEvent } from "react";
import { SwiperSlide } from "swiper/react";
import FormSwiperWrapper from "@/shared/swiper/FormSwiperWrapper";
import SessionFormContainer from "../container/SessionFormContainer";
import BecomeSpeakerFormHeader from "../component/BecomeSpeakerFormHeader";
import PersonalInformationContainer from "../container/PersonalInformationContainer";
import AdditionalInformationContainer from "../container/AdditionalInformationContainer";
import ProfessionalInformationFormContainer from "../container/ProfessionalInformationFormContainer";
import getTokenDetail from "@/utils/token/getTokenDetail";

interface IBecomeSpeakerForm {
      submitFullForm: (e?: BaseSyntheticEvent) => void;
      partialSubmitHandler: (fields: unknown) => Promise<void>;
}

function BecomeSpeakerForm({ submitFullForm, partialSubmitHandler }: IBecomeSpeakerForm) {
      return (
            <form className="flex w-full flex-col justify-center h-auto py-4" onSubmit={submitFullForm}>
                  <FormSwiperWrapper extraClassName="min-h-[50rem] sm:min-h-[45rem] lg:min-h-[45rem]">
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
                                                <BecomeSpeakerFormHeader
                                                      title="Personal Information"
                                                      subTitle={
                                                            "Logged in " + getTokenDetail.loggedInUserEmail()
                                                      }
                                                />

                                                <PersonalInformationContainer
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
                                                <BecomeSpeakerFormHeader title="Professional Information" />

                                                <ProfessionalInformationFormContainer
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
                                                <BecomeSpeakerFormHeader title="Session Detail" />

                                                <SessionFormContainer
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
                                                <BecomeSpeakerFormHeader title="Additional Information" />

                                                <AdditionalInformationContainer slideToPrev={slideToPrev} />
                                          </span>
                                    </SwiperSlide>
                              </>
                        )}
                  </FormSwiperWrapper>
            </form>
      );
}

export default BecomeSpeakerForm;
