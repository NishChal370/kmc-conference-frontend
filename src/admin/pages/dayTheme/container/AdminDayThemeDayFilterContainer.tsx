import { useEffect, useMemo } from "react";
import AdminDayThemeDayFilter from "../components/AdminDayThemeDayFilter";
import LoadingAnimation from "@/shared/loading/LoadingAnimation";
import { FilterErrorMessage, FilterNotFoundMessage } from "@/shared/errorMessage";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useConferenceDayApi from "@/admin/hooks/conferenceDay/useConferenceDayApi";
import {
      conferenceDayAction,
      conferenceDaysBasicInfoState,
} from "../../conferenceDay/feature/conferenceDaySlice";
import { Status } from "@/enum/commonEnum";
import { IRadioButtonGroupOptions } from "@/admin/model/button/radioButtonGroupModel";

function AdminDayThemeDayFilterContainer() {
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(conferenceDaysBasicInfoState);

      const { getConferenceDaysBasicInfo } = useConferenceDayApi();

      const options: IRadioButtonGroupOptions<number> = useMemo(
            () => [
                  { id: "all", value: undefined, label: "All", title: "All" },
                  ...data.map((day, index) => ({
                        id: day.dayId.toString(),
                        value: day.dayId,
                        label: "Day " + (index + 1),
                        title: day.date,
                  })),
            ],
            [data]
      );

      useEffect(() => {
            getConferenceDaysBasicInfo();

            return () => {
                  dispatch(conferenceDayAction.resetConferenceDaysBasicInfoSlice());
            };
      }, []);
      return (
            <>
                  {status === Status.SUCCEEDED && <AdminDayThemeDayFilter options={options} />}

                  {status !== Status.SUCCEEDED && (
                        <span className="flex self-start w-[22%]">
                              {status === Status.FAILED && <FilterErrorMessage />}

                              {status === Status.DATA_NOT_FOUND && <FilterNotFoundMessage />}

                              {(status === Status.IDEL || status === Status.LOADING) && <LoadingAnimation />}
                        </span>
                  )}
            </>
      );
}

export default AdminDayThemeDayFilterContainer;
