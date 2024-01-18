import { CONFERENCE_OBJECTIVE } from "../data/conferenceObjective";

function AboutUsObjective() {
      return (
            <div className="flex flex-col gap-24 w-[80%] items-center justify-center h-full md:w-[80%] max-w-[80rem]">
                  <h2 className=" text-4xl sm:text-6xl font-bold text-default">Objectives</h2>

                  <section
                        className="grid grid-cols-1 gap-x-10 gap-y-10 text-xl justify-center
                              sm:grid-cols-2 lg:grid-cols-3 
                        "
                  >
                        {CONFERENCE_OBJECTIVE.map((objective, index) => (
                              <div
                                    key={index}
                                    className=" border  py-8 px-8 font-medium  leading-relaxed
                                          hover:bg-primary hover:text-white
                                    "
                              >
                                    <p>{objective}</p>
                              </div>
                        ))}
                  </section>
            </div>
      );
}

export default AboutUsObjective;
