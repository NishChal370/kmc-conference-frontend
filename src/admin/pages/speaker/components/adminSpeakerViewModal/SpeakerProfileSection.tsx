interface ISpeakerProfileSection {
      image: string;
      name: string;
      designation: string;
}

function SpeakerProfileSection({ image, name, designation }: ISpeakerProfileSection) {
      return (
            <section
                  className="w-full px-4 py-6 flex flex-col items-center gap-6 border-r border-mute-1/75
                        lg:w-[40%] 
                  "
            >
                  <figure
                        id="image-skeleton"
                        className="min-w-[10rem] max-w-[10rem] min-h-[10rem] max-h-[10rem] rounded-full bg-white flex justify-center items-center"
                  >
                        {image ? (
                              <img
                                    loading="lazy"
                                    className="w-[8.5rem] h-[8.5rem] rounded-full object-cover"
                                    src={image}
                                    alt="speaker-img"
                              />
                        ) : (
                              <div className="w-[10rem] h-[10rem] overflow-hidden rounded-md relative bg-gray-50"></div>
                        )}
                  </figure>
                  <article className="flex flex-col justify-center items-center gap-1.5 text-default text-center h-fit max-w-[14rem]">
                        <h1 className="text-md font-semibold">{name}</h1>
                        <h5 className="text-mute text-md">{designation}</h5>
                  </article>
            </section>
      );
}

export default SpeakerProfileSection;
