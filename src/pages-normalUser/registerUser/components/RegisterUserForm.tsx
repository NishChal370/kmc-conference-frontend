import { SwiperSlide } from "swiper/react";
import RegisterFormSwiperWrapper from "./RegisterFormSwiperWrapper";
import RegisterUserBasicFormContainer from "../container/RegisterUserBasicFormContainer";
import RegisterUserPasswordFormContainer from "../container/RegisterUserPasswordFormContainer";

interface IRegisterUserFormProps {
      submitFullForm: (data: any, isLastForm: () => boolean) => void;
}

function RegisterUserForm({ submitFullForm }: IRegisterUserFormProps) {
      return (
            <div className="flex w-full flex-col justify-center h-full">
                  <RegisterFormSwiperWrapper>
                        {({ isLastForm, slideToNext, slideToPrev }) => (
                              <>
                                    <SwiperSlide
                                          className="swiper-slide !flex !flex-col !gap-y-4 !gap-x-4 !w-full !h-full
                                                [&>form]:flex [&>form]:flex-col [&>form]:gap-y-10 [&>form]:gap-x-4 [&>form]:w-full [&>form]:h-full [&>form]:py-8
                                          "
                                          virtualIndex={0}
                                    >
                                          <>
                                                <h5 className="text-sm font-semibold pl-2">
                                                      Enter your Personal Information
                                                </h5>
                                                <RegisterUserBasicFormContainer
                                                      slideToNext={slideToNext}
                                                      submitToParentHandler={(data) =>
                                                            submitFullForm(data, isLastForm)
                                                      }
                                                />
                                          </>
                                    </SwiperSlide>

                                    <SwiperSlide
                                          className="swiper-slide !flex !flex-col !gap-y-10 !gap-x-4 !w-full !h-full
                                                [&>form]:flex [&>form]:flex-col [&>form]:gap-y-10 [&>form]:gap-x-4 [&>form]:w-full [&>form]:h-full [&>form]:py-8
                                          "
                                          virtualIndex={1}
                                    >
                                          <>
                                                <h5 className="text-sm font-semibold pl-2">
                                                      Enter you new Password
                                                </h5>
                                                <RegisterUserPasswordFormContainer
                                                      slideToPrevious={slideToPrev}
                                                      submitToParentHandler={(data) =>
                                                            submitFullForm(data, isLastForm)
                                                      }
                                                />
                                          </>
                                    </SwiperSlide>
                              </>
                        )}
                  </RegisterFormSwiperWrapper>
            </div>
      );
}

export default RegisterUserForm;