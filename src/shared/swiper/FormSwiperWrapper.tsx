import { ReactElement, useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass } from "swiper/react";

// Import Swiper styles
import "swiper/css";

interface IFormSwiperWrapper {
      children: (
            swiperHandler: { slideToNext: () => void; slideToPrev: () => void },
            refSetter: (node: HTMLElement | null) => void
      ) => ReactElement;
}
function FormSwiperWrapper({ children }: IFormSwiperWrapper) {
      const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
      const resizeObserver = useRef<ResizeObserver | null>(null);

      const slideToNext = () => {
            if (!swiperRef) return;

            swiperRef.slideNext();
      };

      const slideToPrev = () => {
            if (!swiperRef) return;

            swiperRef.slidePrev();
      };

      // Function to set ref and observe each slide
      const setSlideRef = (node: HTMLElement | null) => {
            if (node) {
                  resizeObserver.current?.observe(node);
            }
      };

      const updateSwiper = () => {
            resizeObserver.current = new ResizeObserver((entries) => {
                  for (const _entry of entries) {
                        if (swiperRef) {
                              swiperRef.update();
                        }
                  }
            });
      };

      const disconnectResizeObserver = () => {
            if (resizeObserver.current) {
                  resizeObserver.current.disconnect();
            }
      };

      useEffect(() => {
            updateSwiper();

            return () => {
                  disconnectResizeObserver();
            };
      }, [swiperRef]);

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
                  {children(
                        {
                              slideToNext,
                              slideToPrev,
                        },
                        setSlideRef
                  )}
            </Swiper>
      );
}

export default FormSwiperWrapper;
