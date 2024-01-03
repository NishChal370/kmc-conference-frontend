import { ORGANIZERS_DETAIL } from "../seed/organizersDetails";

function OrganizersDetail() {
      return (
            <span className="flex flex-col justify-center items-center gap-10 h-full w-full leading-loose text-justify">
                  {ORGANIZERS_DETAIL.map(({ image, name, description }, index) => (
                        <div
                              key={index}
                              className={`flex justify-center w-full h-full py-24 ${index % 2 && "bg-mute"}`}
                        >
                              <span
                                    className="flex flex-col gap-6 h-full w-full px-6
                                          sm:px-10 
                                          md:gap-10 md:flex-row md:w-[70%] md:max-w-[80rem]
                                    "
                              >
                                    <section>
                                          <img
                                                className="w-60 max-w-[15rem] min-w-[15rem] h-fit"
                                                src={image}
                                                alt="organizer"
                                          />
                                    </section>

                                    <article className="flex flex-col gap-4 w-full h-full">
                                          <h6 className="font-semibold text-xl">About {name}</h6>
                                          <p>{description}</p>
                                    </article>
                              </span>
                        </div>
                  ))}
            </span>
      );
}

export default OrganizersDetail;
