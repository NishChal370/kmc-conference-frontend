import { ReactElement, useState } from "react";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperClass } from "swiper/react";

// Import Swiper styles
import "swiper/css";

interface IRegisterFormSwiperWrapper {
      children: (swiperHandler: { slideToNext: () => void; slideToPrev: () => void }) => ReactElement;
}
function RegisterFormSwiperWrapper({ children }: IRegisterFormSwiperWrapper) {
      const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

      const slideToNext = () => {
            if (!swiperRef) return;

            swiperRef.slideNext();
      };

      const slideToPrev = () => {
            if (!swiperRef) return;

            swiperRef.slidePrev();
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
                        slideToNext,
                        slideToPrev,
                  })}
            </Swiper>
      );
}

export default RegisterFormSwiperWrapper;
