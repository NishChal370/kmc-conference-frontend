import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

function HomeStatisticalCounter() {
      return (
            <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  speed={500}
                  autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        waitForTransition: false,
                  }}
                  freeMode={true}
                  modules={[Autoplay, FreeMode]}
                  breakpoints={{
                        640: {
                              slidesPerView: 1,
                        },
                        768: {
                              slidesPerView: 2,
                        },
                        1024: {
                              slidesPerView: 3,
                        },
                  }}
                  className="text-primary mt-10 w-full max-w-[140rem] ease-in-out"
            >
                  {[
                        { count: "02", title: "organizers" },
                        { count: "29+", title: "speakers" },
                        { count: "249+", title: "attendees" },
                        { count: "43%", title: "women attendees" },
                        { count: "100+", title: "exhibitors" },
                  ].map(({ count, title }, index) => (
                        <SwiperSlide key={index}>
                              <span className="w-full h-full self-center flex flex-col items-center mt-16 text-start ease-in-out">
                                    <article>
                                          <p className="text-7xl font-bold">{count}</p>
                                          <p className="text-2xl">{title}</p>
                                    </article>
                              </span>
                        </SwiperSlide>
                  ))}
            </Swiper>
      );
}

export default HomeStatisticalCounter;
