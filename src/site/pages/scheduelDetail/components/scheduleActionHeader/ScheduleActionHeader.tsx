import ScheduleActionHeaderArticle from "./ScheduleActionHeaderArticle";
import ScheduleActionHeaderButtonContainer from "../../container/ScheduleActionHeaderButtonContainer";

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

                        <ScheduleActionHeaderButtonContainer />
                  </span>
            </div>
      );
}

export default ScheduleActionHeader;
