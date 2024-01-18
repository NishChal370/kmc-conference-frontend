import NavDayButton from "./NavDayButton";
import DayFilterSubNavContainer from "../../container/dayFilter/DayFilterSubNavContainer";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";
import { IConferenceDayBasicInfoResponse } from "@/admin/model/conferenceDay/conferenceDayModel";

interface IDayFilterNav {
      showingSubNav?: number;
      subNavHandler: (dayId: number) => () => void;
      daysDetail: IConferenceDayBasicInfoResponse;
}

function DayFilterNav({ subNavHandler, showingSubNav, daysDetail }: IDayFilterNav) {
      return (
            <>
                  {daysDetail.map(({ dayId, date }, index) => (
                        <div className="w-full" key={index}>
                              <NavDayButton
                                    title={"Day - " + (index < 9 ? `0${index + 1}` : index + 1)}
                                    date={changeDateFormat(date, "medium")!}
                                    isSuNavOpen={showingSubNav === dayId}
                                    subNavHandler={subNavHandler(dayId)}
                              />

                              {window.innerWidth > 768 && (
                                    <span className="hidden md:flex md:flex-col w-full h-full">
                                          <DayFilterSubNavContainer
                                                dateId={dayId}
                                                isOpen={showingSubNav === dayId}
                                          />
                                    </span>
                              )}
                        </div>
                  ))}
            </>
      );
}

export default DayFilterNav;
