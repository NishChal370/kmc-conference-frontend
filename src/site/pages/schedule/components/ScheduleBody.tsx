import ScheduleCard from "./ScheduleCard";
import ScheduleDayFilter from "./ScheduleDayFilter";

function ScheduleBody() {
      return (
            <div
                  className="flex flex-col justify-center items-start gap-10 w-full px-6 
                        sm:flex-row
                        xl:px-0 xl:w-[84%]
                        2xl:w-3/5 2xl:max-w-7xl
                  "
            >
                  <ScheduleDayFilter />

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
            </div>
      );
}

export default ScheduleBody;
