import { ReactElement, useState } from "react";
import { Swiper, SwiperClass } from "swiper/react";

// Import Swiper styles
import "swiper/css";

interface IFormSwiperWrapper {
      children: (swiperHandler: { slideToNext: () => void; slideToPrev: () => void }) => ReactElement;
}
function FormSwiperWrapper({ children }: IFormSwiperWrapper) {
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
                  onSwiper={setSwiperRef}
                  slidesPerView={1}
                  centeredSlides={true}
                  spaceBetween={30}
                  autoHeight={true}
                  allowTouchMove={false}
                  className="w-full h-auto flex"
            >
                  {children({
                        slideToNext,
                        slideToPrev,
                  })}
            </Swiper>
      );
}

export default FormSwiperWrapper;
