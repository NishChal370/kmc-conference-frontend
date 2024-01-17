import { BaseSyntheticEvent } from "react";
import { SwiperSlide } from "swiper/react";
import LoadingAnimation from "@/shared/loading/LoadingAnimation";
import RegisterFormSwiperWrapper from "./RegisterFormSwiperWrapper";
import RegisterUserBasicFormContainer from "../container/RegisterUserBasicFormContainer";
import RegisterUserPasswordFormContainer from "../container/RegisterUserPasswordFormContainer";
import RegisterUserProfessionalFormContainer from "../container/RegisterUserProfessionalFormContainer";
import { Status } from "@/enum/commonEnum";

interface IRegisterUserFormProps {
      status: Status;
      submitFullForm: (e?: BaseSyntheticEvent) => void;
      partialSubmitHandler: (fields: any) => Promise<void>;
}

function RegisterUserForm({ status, submitFullForm, partialSubmitHandler }: IRegisterUserFormProps) {
      return (
            <>
                  <form onSubmit={submitFullForm} className="flex w-full flex-col justify-center h-full py-8">
                        <RegisterFormSwiperWrapper>
                              {({ slideToNext, slideToPrev }) => (
                                    <>
                                          <SwiperSlide
                                                className="swiper-slide !flex !flex-col !gap-y-4 !gap-x-4 !w-full !h-full
                                                      [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 [&>div]:gap-x-4 [&>div]:w-full [&>div]:h-full [&>div]:py-8
                                                "
                                                virtualIndex={0}
                                          >
                                                <>
                                                      <h5 className="text-sm font-semibold pl-2">
                                                            Enter your Personal Information
                                                      </h5>
                                                      <RegisterUserBasicFormContainer
                                                            submitToParentHandler={(fields) =>
                                                                  partialSubmitHandler(fields).then(() => {
                                                                        slideToNext();
                                                                  })
                                                            }
                                                      />
                                                </>
                                          </SwiperSlide>

                                          <SwiperSlide
                                                className="swiper-slide !flex !flex-col !gap-y-4 !gap-x-4 !w-full !h-full
                                                      [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 [&>div]:gap-x-4 [&>div]:w-full [&>div]:h-full [&>div]:py-8
                                                "
                                                virtualIndex={1}
                                          >
                                                <>
                                                      <h5 className="text-sm font-semibold pl-2">
                                                            Enter your Personal Information
                                                      </h5>
                                                      <RegisterUserProfessionalFormContainer
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
                                                className="swiper-slide !flex !flex-col !gap-y-4 !gap-x-4 !w-full !h-full
                                                      [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 [&>div]:gap-x-4 [&>div]:w-full [&>div]:h-full [&>div]:py-8
                                                "
                                                virtualIndex={2}
                                          >
                                                <>
                                                      <h5 className="text-sm font-semibold pl-2">
                                                            Enter your new Password
                                                      </h5>

                                                      <RegisterUserPasswordFormContainer
                                                            slideToPrevious={slideToPrev}
                                                      />
                                                </>
                                          </SwiperSlide>
                                    </>
                              )}
                        </RegisterFormSwiperWrapper>

                        {status === Status.LOADING && <LoadingAnimation />}
                  </form>
            </>
      );
}

export default RegisterUserForm;
