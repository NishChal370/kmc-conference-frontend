import { KMC_DESCRIPTION, ORGANIZERS_DETAIL } from "../seed/organizersDetails";

function OrganizersDetail() {
      return (
            <span className="flex flex-col justify-center items-center gap-10 h-full w-full leading-loose text-justify">
                  <div className="flex justify-center w-full h-full py-24 ">
                        <span
                              className="flex flex-col gap-6 h-full w-full px-6
                                          sm:px-10 
                                          md:gap-10 md:flex-row md:w-[70%] md:max-w-[80rem]
                                    "
                        >
                              <section className="flex md:flex-col gap-10">
                                    {ORGANIZERS_DETAIL.map(({ image, name }, index) => (
                                          <img
                                                key={index}
                                                title={name}
                                                className="w-20 max-w-[5rem] md:w-60 md:max-w-[15rem] md:min-w-[15rem] h-fit"
                                                src={image}
                                                alt="kmcLogo"
                                          />
                                    ))}
                              </section>

                              <article className="flex flex-col gap-4 w-full h-full">
                                    <h6 className="font-semibold text-xl">About {KMC_DESCRIPTION.name}</h6>
                                    <p>{KMC_DESCRIPTION.description}</p>
                              </article>
                        </span>
                  </div>
            </span>
      );
}

export default OrganizersDetail;
