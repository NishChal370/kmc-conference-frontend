function ScheduleDayFilter() {
      return (
            <span
                  className="w-full min-w-[100%] max-w-fit 
                        sm:max-w-fit sm:min-w-fit sm:w-fit
                  "
            >
                  <section
                        className="flex justify-start pb-2 items-start gap-10 min-w-[100%] max-w-[10rem] overflow-scroll [&>button]:text-start 
                              sm:pb-0 sm:justify-center sm:flex-col  sm:min-w-fit sm:w-[12rem] sm:max-w-[12rem]
                              md:w-[16rem] md:max-w-[16rem]
                              lg:w-[20rem] lg:max-w-[20rem]
                        "
                  >
                        {[
                              { date: "26th January, 2024" },
                              { date: "27th January, 2024" },
                              { date: "28th January, 2024" },
                              { date: "29th January, 2024" },
                        ].map(({ date }, index) => (
                              <button
                                    key={index}
                                    className={`flex flex-col  w-full min-w-fit h-fit px-4 py-4 
                                    ${index === 0 ? "bg-primary text-white" : "bg-transparent text-black"}
                                    border border-default  rounded-md`}
                              >
                                    <p className="text-2xl font-bold">
                                          Day - {index < 9 ? "0" + (index + 1) : index + 1}
                                    </p>
                                    <p className="text-sm">{date}</p>
                              </button>
                        ))}
                  </section>
            </span>
      );
}

export default ScheduleDayFilter;
