function OrganizersDetail() {
      return (
            <span className="flex flex-col justify-center items-center gap-10 h-full w-full leading-loose text-justify">
                  {[
                        {
                              img: "https://kathmandu.gov.np/wp-content/themes/kmc-theme/images/kmc-logo.png",
                              name: "Kathmandu Metropolitan City",
                              description: `Kathmandu,[a] officially Kathmandu Metropolitan City,[b] is the capital and most populous city of Nepal with 845,767 inhabitants living in 105,649 households as of the 2021 Nepal census[4] and 2.9 million people in its urban agglomeration. It is located in the Kathmandu Valley, a large valley in the high plateaus in central Nepal, at an altitude of 1,400 metres (4,600 feet).

                              The city is one of the oldest continuously inhabited places in the world, founded in the 2nd century AD. The valley was historically called the "Nepal Mandala" and has been the home of the Newar people, a cosmopolitan urban civilization in the Himalayan foothills. The city was the royal capital of the Kingdom of Nepal and hosts palaces, mansions and gardens built by the Nepali aristocracy. It has been home to the headquarters of the South Asian Association for Regional Cooperation (SAARC) since 1985. Today, it is the seat of government of the Federal Democratic Republic of Nepal, established in 2008, and is part of Bagmati Province.
                              
                              Kathmandu is and has been for many years the centre of Nepal's history, art, culture, and economy. It has a multi-ethnic population within a Hindu and Buddhist majority. Religious and cultural festivities form a major part of the lives of people residing in Kathmandu. Tourism is an important part of the economy in the city. In 2013, Kathmandu was ranked third among the top ten upcoming travel destinations in the world by TripAdvisor, and ranked first in Asia. The city is considered the gateway to the Nepal Himalayas and is home to several World Heritage Sites: the Durbar Square, Swayambhu Mahachaitya, Bouddha and Pashupatinath. Kathmandu valley is growing at 4 per cent per year according to the World Bank in 2010, making it one of the fastest-growing metropolitan areas in South Asia, and the first region in Nepal to face the unprecedented challenges of rapid urbanization and modernization at a metropolitan scale.[6] It is the largest metropolitan area located in the Himalayas.`,
                        },
                  ].map(({ img, name, description }, index) => (
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
                                                src={img}
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
