function HomeFeaturedExhibitors() {
      return (
            <div className="py-16 flex justify-center">
                  <span className="max-w-[60%] flex flex-col gap-12">
                        <section className="flex flex-col gap-4">
                              <h1 className=" text-4xl font-extrabold">FEATURED EXHIBITORS</h1>
                              <p>
                                    See the companies from across the globe that will be showcasing the latest
                                    in digital health, food tech, automotive tech, NFTs, gaming, smart home
                                    and more.
                              </p>
                        </section>

                        <section className=" grid grid-cols-4 gap-10 w-[90%] self-center">
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
                                          alt=""
                                    />
                              ))}
                        </section>
                  </span>
            </div>
      );
}

export default HomeFeaturedExhibitors;
