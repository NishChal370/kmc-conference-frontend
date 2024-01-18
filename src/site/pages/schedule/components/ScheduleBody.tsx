import ScheduleCard from "./ScheduleCard";
import ScheduleDayFilter from "./dayFilter/ScheduleDayFilter";
import PlenarySessionCardContainer from "../container/plenarySessionCardContainer/PlenarySessionCardContainer";

function ScheduleBody() {
      return (
            <div
                  className="flex flex-col justify-center items-start gap-10 w-full px-6 
                        md:flex-row
                        xl:px-0 xl:w-[84%]
                        2xl:w-3/5 2xl:max-w-7xl
                  "
            >
                  <ScheduleDayFilter />

                  <span className="flex flex-col justify-start items-start gap-y-10 w-full h-full">
                        <PlenarySessionCardContainer />

                        <section className="flex flex-col justify-start items-start gap-y-20 w-full h-full">
                              <ScheduleCard />

                              <ScheduleCard
                                    status={[
                                          { status: "Registration closed" },
                                          { status: "i don't know" },
                                          { status: "i don't know" },
                                          { status: "i don't know why" },
                                          { status: "i don't know" },
                                          { status: "i don't know" },
                                          { status: "i don't know" },
                                    ]}
                              />

                              <ScheduleCard />

                              <ScheduleCard />
                        </section>
                  </span>
            </div>
      );
}

export default ScheduleBody;
