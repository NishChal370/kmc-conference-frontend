import { useEffect, useMemo } from "react";
import AdminDayThemeDayFilter from "../components/AdminDayThemeDayFilter";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import useConferenceDayApi from "@/admin/hooks/conferenceDay/useConferenceDayApi";
import {
      conferenceDayAction,
      conferenceDaysBasicInfoState,
} from "../../conferenceDay/feature/conferenceDaySlice";
import { Status } from "@/enum/commonEnum";
import ErrorMessage from "@/shared/errorMessage/ErrorMessage";
import LoadingAnimation from "@/shared/loading/LoadingAnimation";
import NotFoundMessage from "@/shared/errorMessage/NotFoundMessage";

function AdminDayThemeDayFilterContainer() {
      const dispatch = useAppDispatch();

      const { status, error, data } = useAppSelector(conferenceDaysBasicInfoState);

      const { getConferenceDaysBasicInfo } = useConferenceDayApi();

      const options = useMemo(
            () => [
                  { id: "", value: undefined, label: "All" },
                  ...data.map((day, index) => ({
                        id: day.dayId.toString(),
                        value: day.dayId,
                        label: "Day " + (index + 1),
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

                  {status === Status.FAILED && (
                        <ErrorMessage title={error?.title} detail="Something went wrong." />
                  )}

                  {status === Status.DATA_NOT_FOUND && <NotFoundMessage buttonTitle="Reload" />}

                  {(status === Status.IDEL || status === Status.LOADING) && (
                        <span className=" flex w-1/4 self-start">
                              <LoadingAnimation />
                        </span>
                  )}
            </>
      );
}

export default AdminDayThemeDayFilterContainer;
