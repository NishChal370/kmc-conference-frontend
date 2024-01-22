import { useState } from "react";
import { useParams } from "react-router-dom";
import DayFilterSubNavContainer from "../../container/dayFilter/DayFilterSubNavContainer";
import DayFilterNavContainer from "../../container/dayFilter/DayFilterNavContainer";

function ScheduleDayFilter() {
      const { dayId: paramDayId } = useParams();
      const [showSubNav, setShowSubNav] = useState<number | undefined>(paramDayId ? +paramDayId : undefined);

      const subNavHandler = (navId: number) => () => {
            setShowSubNav((prev) => (prev === navId ? undefined : navId));
      };

      return (
            <div className="w-full md:w-fit flex flex-col gap-2">
                  <span
                        className="w-full min-w-[100%] max-w-fit 
                              md:max-w-fit md:min-w-fit md:w-fit
                        "
                  >
                        <div
                              className=" flex justify-start pb-2 items-start gap-6 min-w-[100%] max-w-[10rem] overflow-scroll [&>button]:text-start 
                                    md:pb-0 md:justify-start md:flex-col  md:min-w-fit md:w-[16rem] md:max-w-[16rem]
                                    lg:w-[20rem] lg:max-w-[20rem]
                                    max-h-[37rem]
                              "
                        >
                              <DayFilterNavContainer
                                    showingSubNav={showSubNav}
                                    subNavHandler={subNavHandler}
                              />
                        </div>
                  </span>

                  {window.innerWidth <= 768 && (
                        <span className="flex flex-col justify-center md:hidden w-full h-full">
                              <DayFilterSubNavContainer isOpen={!!showSubNav} dateId={showSubNav} />
                        </span>
                  )}
            </div>
      );
}

export default ScheduleDayFilter;
