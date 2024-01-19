import RegisterFormSwiperWrapper from "@/site/pages/registerUser/components/RegisterFormSwiperWrapper";
import { SwiperSlide } from "swiper/react";
import getTokenDetail from "@/utils/token/getTokenDetail";
import { BaseSyntheticEvent } from "react";
import ScheduleSpecificFormContainer from "../container/ScheduleSpecificFormContainer";
import AccommodationFormContainer from "../container/AccommodationFormContainer";
import ContactInformationFormContainer from "../container/ContactInformationFormContainer";
import EmergencyContactInformationFormContainer from "../container/EmergencyContactInformationFormContainer";
import ProfileFormContainer from "../container/ProfileFormContainer";
import AdditionalDetailFormContainer from "../container/AdditionalDetailFormContainer";

interface IAttendScheduleForm {
      submitFullForm: (e?: BaseSyntheticEvent) => void;
      partialSubmitHandler: (fields: any) => Promise<void>;
}

function AttendScheduleForm({ submitFullForm, partialSubmitHandler }: IAttendScheduleForm) {
      return (
            <form className="flex w-full flex-col justify-center h-fit py-4" onSubmit={submitFullForm}>
                  <RegisterFormSwiperWrapper>
                        {({ slideToNext, slideToPrev }) => (
                              <>
                                    <SwiperSlide
                                          className="!flex flex-col gap-12
                                                [&>div]:grid [&>div]:grid-col-1 [&>div]:gap-6 [&>div]:w-full
                                          "
                                          virtualIndex={0}
                                    >
                                          <>
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
                                          </>
                                    </SwiperSlide>

                                    <SwiperSlide
                                          className="!flex flex-col gap-10
                                                [&>div]:grid [&>div]:grid-col-1  [&>div]:gap-6 [&>div]:w-full
                                          "
                                          virtualIndex={1}
                                    >
                                          <>
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
                                          </>
                                    </SwiperSlide>

                                    <SwiperSlide
                                          className="!flex flex-col gap-10
                                                [&>div]:grid [&>div]:grid-col-1  [&>div]:gap-6 [&>div]:w-full
                                          "
                                          virtualIndex={2}
                                    >
                                          <>
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
                                          </>
                                    </SwiperSlide>

                                    <SwiperSlide
                                          className=" !h-full !flex flex-col gap-10
                                                [&>div]:grid [&>div]:grid-col-1  [&>div]:gap-6 [&>div]:w-full
                                          "
                                          virtualIndex={3}
                                    >
                                          <>
                                                <h5 className="text-2xl font-bold tracking-wide text-default">
                                                      Emergency Contact
                                                </h5>

                                                <EmergencyContactInformationFormContainer
                                                      slideToPrev={slideToPrev}
                                                      submitToParentHandler={(fields) => {
                                                            partialSubmitHandler(fields).then(() => {
                                                                  slideToNext();
                                                            });
                                                      }}
                                                />
                                          </>
                                    </SwiperSlide>

                                    <SwiperSlide
                                          className=" !h-full !flex flex-col gap-10
                                                [&>div]:grid [&>div]:grid-col-1  [&>div]:gap-6 [&>div]:w-full
                                          "
                                          virtualIndex={4}
                                    >
                                          <>
                                                <h5 className="text-2xl font-bold tracking-wide text-default">
                                                      Personal Profile
                                                </h5>

                                                <ProfileFormContainer
                                                      slideToPrev={slideToPrev}
                                                      submitToParentHandler={(fields) => {
                                                            partialSubmitHandler(fields).then(() => {
                                                                  slideToNext();
                                                            });
                                                      }}
                                                />
                                          </>
                                    </SwiperSlide>

                                    <SwiperSlide
                                          className="!flex flex-col gap-10 !h-full
                                                [&>div]:grid [&>div]:grid-col-1  [&>div]:gap-6 [&>div]:w-full
                                          "
                                          virtualIndex={5}
                                    >
                                          <>
                                                <h5 className="text-2xl font-bold tracking-wide text-default">
                                                      Additional Information
                                                </h5>

                                                <AdditionalDetailFormContainer slideToPrev={slideToPrev} />
                                          </>
                                    </SwiperSlide>
                              </>
                        )}
                  </RegisterFormSwiperWrapper>
            </form>
      );
}

export default AttendScheduleForm;
