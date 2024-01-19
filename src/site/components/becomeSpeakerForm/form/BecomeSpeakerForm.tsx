import { SwiperSlide } from "swiper/react";
import BecomeSpeakerFormHeader from "../component/BecomeSpeakerFormHeader";
import getTokenDetail from "@/utils/token/getTokenDetail";
import ProfessionalInformationForm from "./ProfessionalInformationForm";
import FormSwiperWrapper from "@/shared/swiper/FormSwiperWrapper";
import PersonalInformation from "./PersonalInformation";
import SessionForm from "./SessionForm";
import AdditionalInformation from "./AdditionalInformation";
import { BaseSyntheticEvent } from "react";

interface IBecomeSpeakerForm {
      submitFullForm: (e?: BaseSyntheticEvent) => void;
      partialSubmitHandler: (fields: any) => Promise<void>;
}

function BecomeSpeakerForm({ submitFullForm, partialSubmitHandler }: IBecomeSpeakerForm) {
      return (
            <form className="flex w-full flex-col justify-center h-auto py-4" onSubmit={submitFullForm}>
                  <FormSwiperWrapper>
                        {({ slideToNext, slideToPrev }) => (
                              <>
                                    <SwiperSlide
                                          className="!flex flex-col gap-12
                                                [&>div]:grid [&>div]:grid-cols-1 [&>div]:gap-x-6 [&>div]:gap-y-6 [&>div]:w-full
                                                [&>div]:md:grid-cols-2 [&>div]:md:gap-y-10
                                          "
                                          virtualIndex={0}
                                    >
                                          <>
                                                <BecomeSpeakerFormHeader
                                                      title="Professional Information"
                                                      subTitle={
                                                            "Logged in " + getTokenDetail.loggedInUserEmail()
                                                      }
                                                />

                                                <ProfessionalInformationForm
                                                      submitToParent={(fields) => {
                                                            partialSubmitHandler(fields).then(() => {
                                                                  slideToNext();
                                                            });
                                                      }}
                                                />
                                          </>
                                    </SwiperSlide>

                                    <SwiperSlide
                                          className="!flex flex-col gap-12
                                                [&>div]:grid [&>div]:grid-cols-1 [&>div]:gap-x-6 [&>div]:gap-y-6 [&>div]:w-full
                                                [&>div]:md:grid-cols-2 [&>div]:md:gap-y-10
                                          "
                                          virtualIndex={0}
                                    >
                                          <>
                                                <BecomeSpeakerFormHeader title="Personal Information" />

                                                <PersonalInformation
                                                      slideToPrev={slideToPrev}
                                                      submitToParent={(fields) => {
                                                            partialSubmitHandler(fields).then(() => {
                                                                  slideToNext();
                                                            });
                                                      }}
                                                />
                                          </>
                                    </SwiperSlide>

                                    <SwiperSlide
                                          className="!flex flex-col gap-12
                                                [&>div]:grid [&>div]:grid-cols-1 [&>div]:gap-x-6 [&>div]:gap-y-6 [&>div]:w-full
                                                [&>div]:md:grid-cols-2 [&>div]:md:gap-y-10
                                          "
                                          virtualIndex={0}
                                    >
                                          <>
                                                <BecomeSpeakerFormHeader title="Session Detail" />

                                                <SessionForm
                                                      slideToPrev={slideToPrev}
                                                      submitToParent={(fields) => {
                                                            partialSubmitHandler(fields).then(() => {
                                                                  slideToNext();
                                                            });
                                                      }}
                                                />
                                          </>
                                    </SwiperSlide>

                                    <SwiperSlide
                                          className="!flex flex-col gap-12
                                                [&>div]:grid [&>div]:grid-cols-1 [&>div]:gap-x-6 [&>div]:gap-y-6 [&>div]:w-full
                                                [&>div]:md:grid-cols-2 [&>div]:md:gap-y-10
                                          "
                                          virtualIndex={0}
                                    >
                                          <>
                                                <BecomeSpeakerFormHeader title="Additional Information" />

                                                <AdditionalInformation slideToPrev={slideToPrev} />
                                          </>
                                    </SwiperSlide>
                              </>
                        )}
                  </FormSwiperWrapper>
            </form>
      );
}

export default BecomeSpeakerForm;
