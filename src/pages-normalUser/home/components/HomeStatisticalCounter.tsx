import Slider from "react-slick";

function HomeStatisticalCounter() {
      return (
            <Slider
                  dots={false}
                  infinite={true}
                  autoplay={true}
                  autoplaySpeed={1500}
                  speed={1600}
                  arrows={false}
                  slidesToShow={3}
                  slidesToScroll={1}
                  className="text-primary mt-10 w-full"
                  responsive={[
                        {
                              breakpoint: 1024,
                              settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                              },
                        },
                        {
                              breakpoint: 768,
                              settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                              },
                        },
                        {
                              breakpoint: 640,
                              settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                              },
                        },
                  ]}
            >
                  {[
                        { count: "02", title: "organizers" },
                        { count: "29+", title: "speakers" },
                        { count: "249+", title: "attendees" },
                        { count: "43%", title: "women attendees" },
                        { count: "100+", title: "exhibitors" },
                  ].map(({ count, title }, index) => (
                        <span key={index}>
                              <div className="w-full self-center flex flex-col items-center text-start mt-12">
                                    <article>
                                          <p className="text-7xl font-bold">{count}</p>
                                          <p className="text-2xl">{title}</p>
                                    </article>
                              </div>
                        </span>
                  ))}
            </Slider>
      );
}

export default HomeStatisticalCounter;
