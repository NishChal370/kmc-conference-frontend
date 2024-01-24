import { BaseSyntheticEvent } from "react";
import { SwiperSlide } from "swiper/react";
import FormSwiperWrapper from "@/shared/swiper/FormSwiperWrapper";
import UpdateCallForPaperHeader from "../component/UpdateCallForPaperHeader";
import SessionProposalFormContainer from "../container/SessionProposalFormContainer";
import PresentationAndPaperDetailFormContainer from "../container/PresentationAndPaperDetailFormContainer";
import getTokenDetail from "@/utils/token/getTokenDetail";

interface IUpdateBecomeCallForPaperForm {
      formSubmitHandler: (e?: BaseSyntheticEvent) => void;
      partialSubmitHandler: (fields: unknown) => Promise<void>;
}

function UpdateBecomeCallForPaperForm({
      formSubmitHandler,
      partialSubmitHandler,
}: IUpdateBecomeCallForPaperForm) {
      return (
            <form className="flex w-full flex-col justify-center h-auto py-4" onSubmit={formSubmitHandler}>
                  <FormSwiperWrapper
                        extraClassName="min-h-[50rem]  
                              xs:min-h-[50rem] 
                              sm:min-h-[45rem]
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
                                                <UpdateCallForPaperHeader
                                                      title="Session Proposals Information"
                                                      subTitle={
                                                            "Logged in " + getTokenDetail.loggedInUserEmail()
                                                      }
                                                />

                                                <SessionProposalFormContainer
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
                                                <UpdateCallForPaperHeader title="Presentation and Paper Detail Information" />

                                                <PresentationAndPaperDetailFormContainer
                                                      slideToPrev={slideToPrev}
                                                />
                                          </span>
                                    </SwiperSlide>
                              </>
                        )}
                  </FormSwiperWrapper>
            </form>
      );
}

export default UpdateBecomeCallForPaperForm;
