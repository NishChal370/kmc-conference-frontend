import ScheduleActionHeaderArticle from "./ScheduleActionHeaderArticle";

function ScheduleActionHeader() {
      return (
            <div className="sticky bottom-0 bg-white w-full py-4 flex justify-center px-4">
                  <span
                        className="w-full flex flex-col justify-between items-start gap-4
                              sm:text-center sm:flex-row sm:gap-2
                              lg:w-[80%] lg:max-w-[80rem]
                              xl:w-[70%]
                        "
                  >
                        <ScheduleActionHeaderArticle />

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
