import { useState } from 'react'
import { SwiperClass } from 'swiper/react';

function useRegisterUserSwiper() {
      const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

      const slideToNext = () => {
            if (!swiperRef) return;

            swiperRef.slideTo(swiperRef.activeIndex + 1);
      };

      const slideToPrev = () => {
            if (!swiperRef) return;

            swiperRef.slideTo(swiperRef.activeIndex - 1);
      };

      return { setSwiperRef, slideToNext, slideToPrev }
}

export default useRegisterUserSwiper