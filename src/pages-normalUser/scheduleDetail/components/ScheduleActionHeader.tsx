function ScheduleActionHeader() {
      return (
            <div className="sticky bottom-0 bg-white w-full py-4 flex justify-center px-4">
                  <span
                        className="w-full flex flex-col justify-between items-start gap-4
                              sm:text-center sm:flex-row sm:gap-2
                              lg:w-[90%]
                              xl:w-[70%]
                        "
                  >
                        <article className="flex flex-col items-start w-full">
                              <h3 className=" text-sm uppercase">Saturday, January 27</h3>
                              <h1 className="text-lg font-bold">Marketing Workshop #2</h1>
                        </article>

                        <aside className="flex gap-4 self-end">
                              <button
                                    type="button"
                                    className="border border-primary rounded-md text-primary font-semibold tracking-wider w-full px-10 py-2"
                              >
                                    Share
                              </button>
                              <button
                                    type="button"
                                    className=" bg-primary rounded-md text-white font-semibold tracking-wider w-full px-10 py-2"
                              >
                                    Attend
                              </button>
                        </aside>
                  </span>
            </div>
      );
}

export default ScheduleActionHeader;
