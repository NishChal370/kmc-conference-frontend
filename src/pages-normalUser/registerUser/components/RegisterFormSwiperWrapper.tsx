import { ReactElement, useState } from "react";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperClass } from "swiper/react";

// Import Swiper styles
import "swiper/css";

interface IRegisterFormSwiperWrapper {
      children: (swiperHandler: {
            isLastForm: () => boolean;
            slideToNext: () => void;
            slideToPrev: () => void;
      }) => ReactElement;
}
function RegisterFormSwiperWrapper({ children }: IRegisterFormSwiperWrapper) {
      const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

      const slideToNext = () => {
            if (!swiperRef) return;

            swiperRef.slideTo(swiperRef.activeIndex + 1);
      };

      const slideToPrev = () => {
            if (!swiperRef) return;

            swiperRef.slideTo(swiperRef.activeIndex - 1);
      };

      const isLastForm = () => {
            const length = swiperRef?.slides.length ? swiperRef.slides.length - 1 : undefined;

            return swiperRef?.activeIndex === length;
      };

      return (
            <Swiper
                  modules={[Virtual]}
                  onSwiper={setSwiperRef}
                  slidesPerView={1}
                  centeredSlides={true}
                  spaceBetween={30}
                  virtual
                  allowTouchMove={false}
                  className="w-full h-full flex"
            >
                  {children({
                        isLastForm,
                        slideToNext,
                        slideToPrev,
                  })}
            </Swiper>
      );
}

export default RegisterFormSwiperWrapper;
