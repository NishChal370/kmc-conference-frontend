import { ORGANIZERS_DETAIL } from "../seed/organizersDetail";

function HomeOrganizers() {
      return (
            <div className="bg-mute w-full py-24 flex justify-center">
                  <span
                        className="w-[60%] grid gap-x-12 gap-y-20 self-center place-items-center 
                              sm:grid-cols-2 
                              lg:grid-cols-3 
                              xl:grid-cols-4
                        "
                  >
                        {ORGANIZERS_DETAIL.map(({ img }, index) => (
                              <img
                                    key={index}
                                    className=" h-7 w-30 object-content"
                                    src={img}
                                    alt="organizer"
                              />
                        ))}
                  </span>
            </div>
      );
}

export default HomeOrganizers;
