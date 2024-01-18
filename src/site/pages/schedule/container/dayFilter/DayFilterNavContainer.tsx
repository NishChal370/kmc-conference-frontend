import { useEffect } from "react";
import useConferenceDayApi from "@/admin/hooks/conferenceDay/useConferenceDayApi";
import { conferenceDaysBasicInfoState } from "@/admin/pages/conferenceDay/feature/conferenceDaySlice";
import { useAppSelector } from "@/app/hooks";
import DayFilterNav from "../../components/dayFilter/DayFilterNav";
import { Status } from "@/enum/commonEnum";
import { ErrorMessage, NotFoundMessage } from "@/shared/errorMessage";
import LoadingAnimation from "@/shared/loading/LoadingAnimation";

interface IDayFilterNavContainer {
      showingSubNav?: number;
      subNavHandler: (dayId: number) => () => void;
}

function DayFilterNavContainer({ subNavHandler, showingSubNav }: IDayFilterNavContainer) {
      const { getConferenceDaysBasicInfo } = useConferenceDayApi();
      const { status, data } = useAppSelector(conferenceDaysBasicInfoState);

      useEffect(() => {
            getConferenceDaysBasicInfo();
      }, []);

      return (
            <>
                  {status === Status.SUCCEEDED && (
                        <DayFilterNav
                              subNavHandler={subNavHandler}
                              showingSubNav={showingSubNav}
                              daysDetail={data}
                        />
                  )}

                  {status === Status.DATA_NOT_FOUND && (
                        <NotFoundMessage
                              showViewAllButton={false}
                              needTopPadding={false}
                              title="Session Date Not Found"
                              imageSize="!w-[5rem] !h-[5rem]"
                        />
                  )}

                  {status === Status.LOADING && (
                        <span className="w-full flex flex-col gap-1 justify-center items-center">
                              <p className=" font-medium">Getting Dates</p>
                              <LoadingAnimation />
                        </span>
                  )}

                  {status === Status.FAILED && <ErrorMessage needTopPadding={false} />}
            </>
      );
}

export default DayFilterNavContainer;
