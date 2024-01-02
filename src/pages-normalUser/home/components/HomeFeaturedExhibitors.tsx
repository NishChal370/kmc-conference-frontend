import { useNavigate } from "react-router-dom";
import ViewMoreButton from "@/shared-normalUser/buttons/ViewMoreButton";

function HomeFeaturedExhibitors() {
      const navigate = useNavigate();

      return (
            <div className="py-16 flex justify-center w-full h-full">
                  <span
                        className="w-[90%] flex flex-col gap-14
                              sm:w-[80%] 
                              lg:[70%] 
                              xl:max-w-[60%]
                        "
                  >
                        <section className="flex flex-col gap-4">
                              <h1 className="text-4xl font-extrabold">FEATURED EXHIBITORS</h1>
                              <p>
                                    See the companies from across the globe that will be showcasing the latest
                                    in digital health, food tech, automotive tech, NFTs, gaming, smart home
                                    and more.
                              </p>
                        </section>

                        <section className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20 justify-center w-[90%] self-center">
                              {[
                                    {
                                          img: "https://cdn.ces.tech/ces/media/logos-and-icons/2022/amazon_300x150.png",
                                    },
                                    {
                                          img: "https://cdn.ces.tech/ces/media/logos-and-icons/2022/google-logo-transparent_300x150.png",
                                    },
                                    {
                                          img: "https://cdn.ces.tech/ces/media/exhibitor-images/hyundai_300x150_2.png",
                                    },
                                    {
                                          img: "https://cdn.ces.tech/ces/media/logos-and-icons/2024/lg-logo-34_300x150.png",
                                    },
                                    {
                                          img: "https://cdn.ces.tech/ces/media/exhibitor-images/mercedes_benz_300x150_2.png",
                                    },
                                    {
                                          img: "https://cdn.ces.tech/ces/media/logos-and-icons/2022/panasonic_300x150.png",
                                    },
                                    {
                                          img: "https://cdn.ces.tech/ces/media/logos-and-icons/2022/samsung_300x150.png",
                                    },
                                    {
                                          img: "https://cdn.ces.tech/ces/media/logos-and-icons/2023/sony_blue-transparent-300x150.png",
                                    },
                              ].map(({ img }, index) => (
                                    <img
                                          key={index}
                                          className=" h-20 w-auto object-content"
                                          src={img}
                                          alt="featured-exhibitors"
                                    />
                              ))}
                        </section>

                        <ViewMoreButton name="view exhibitors" clickHandler={() => navigate("/")} />
                  </span>
            </div>
      );
}

export default HomeFeaturedExhibitors;
