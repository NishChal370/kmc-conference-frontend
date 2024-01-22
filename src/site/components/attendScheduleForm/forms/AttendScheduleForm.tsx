import { BaseSyntheticEvent } from "react";
import { SwiperSlide } from "swiper/react";
import FormSwiperWrapper from "@/shared/swiper/FormSwiperWrapper";
import ProfileFormContainer from "../container/ProfileFormContainer";
import AccommodationFormContainer from "../container/AccommodationFormContainer";
import AdditionalDetailFormContainer from "../container/AdditionalDetailFormContainer";
import ScheduleSpecificFormContainer from "../container/ScheduleSpecificFormContainer";
import ContactInformationFormContainer from "../container/ContactInformationFormContainer";
import EmergencyContactInformationFormContainer from "../container/EmergencyContactInformationFormContainer";
import getTokenDetail from "@/utils/token/getTokenDetail";

interface IAttendScheduleForm {
      submitFullForm: (e?: BaseSyntheticEvent) => void;
      partialSubmitHandler: (fields: any) => Promise<void>;
}

function AttendScheduleForm({ submitFullForm, partialSubmitHandler }: IAttendScheduleForm) {
      return (
            <form className="flex w-full flex-col justify-center h-auto py-4" onSubmit={submitFullForm}>
                  <FormSwiperWrapper extraClassName="!min-h-[26rem] md:!min-h-[21rem]">
                        {({ slideToNext, slideToPrev }, setSlideRef) => (
                              <>
                                    <SwiperSlide
                                          className="[&>span]:flex [&>span]:flex-col [&>span]:gap-12 !w-full
                                                [&>span>div]:grid [&>span>div]:grid-cols-1 [&>span>div]:gap-x-6 [&>span>div]:gap-y-6 [&>span>div]:w-full
                                                [&>span>div]:md:grid-cols-2 [&>span>div]:md:gap-y-6
                                          "
                                          virtualIndex={0}
                                    >
                                          <span ref={setSlideRef}>
                                                <span className="flex flex-col gap-0.5">
                                                      <h5 className="text-2xl font-bold tracking-wide text-default">
                                                            Registration & Preferences
                                                      </h5>
                                                      <p className="text-sm">
                                                            Logged in as&nbsp;
                                                            {getTokenDetail.loggedInUserEmail()}
                                                      </p>
                                                </span>

                                                <ScheduleSpecificFormContainer
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
                                                [&>span>div]:md:grid-cols-2 [&>span>div]:md:gap-y-6
                                          "
                                          virtualIndex={1}
                                    >
                                          <span ref={setSlideRef}>
                                                <h5 className="text-2xl font-bold tracking-wide text-default">
                                                      Accommodation & Travel
                                                </h5>

                                                <AccommodationFormContainer
                                                      slideToPrev={slideToPrev}
                                                      submitToParentHandler={(fields) => {
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
                                                [&>span>div]:md:grid-cols-2 [&>span>div]:md:gap-y-6
                                          "
                                          virtualIndex={2}
                                    >
                                          <span ref={setSlideRef}>
                                                <h5 className="text-2xl font-bold tracking-wide text-default">
                                                      Contact Information
                                                </h5>

                                                <ContactInformationFormContainer
                                                      slideToPrev={slideToPrev}
                                                      submitToParentHandler={(fields) => {
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
                                                [&>span>div]:md:grid-cols-2 [&>span>div]:md:gap-y-6
                                          "
                                          virtualIndex={3}
                                    >
                                          <span ref={setSlideRef}>
                                                <h5 className="text-2xl font-bold tracking-wide text-default">
                                                      Emergency Contact Information
                                                </h5>

                                                <EmergencyContactInformationFormContainer
                                                      slideToPrev={slideToPrev}
                                                      submitToParentHandler={(fields) => {
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
                                                [&>span>div]:md:grid-cols-2 [&>span>div]:md:gap-y-6
                                          "
                                          virtualIndex={4}
                                    >
                                          <span ref={setSlideRef}>
                                                <h5 className="text-2xl font-bold tracking-wide text-default">
                                                      Profile Information
                                                </h5>

                                                <ProfileFormContainer
                                                      slideToPrev={slideToPrev}
                                                      submitToParentHandler={(fields) => {
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
                                                [&>span>div]:md:grid-cols-2 [&>span>div]:md:gap-y-6
                                          "
                                          virtualIndex={5}
                                    >
                                          <span ref={setSlideRef}>
                                                <h5 className="text-2xl font-bold tracking-wide text-default">
                                                      Additional Information
                                                </h5>
                                                <AdditionalDetailFormContainer slideToPrev={slideToPrev} />
                                          </span>
                                    </SwiperSlide>
                              </>
                        )}
                  </FormSwiperWrapper>
            </form>
      );
}

export default AttendScheduleForm;
