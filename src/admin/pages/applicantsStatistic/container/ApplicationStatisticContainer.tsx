import useApplicantsStatisticApi from "@/admin/hooks/applicantsStatistic/useApplicantsStatisticApi";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect } from "react";
import {
      applicantsStatisticSliceAction,
      applicantsStatisticSliceState,
} from "../feature/applicantsStatisticSlice";
import ApplicationStatistic from "../ApplicationStatistic";
import { Status } from "@/enum/commonEnum";
import AppIcon from "@/shared/icon/AppIcon";

function ApplicationStatisticContainer() {
      const dispatch = useAppDispatch();
      const { status, data, error } = useAppSelector(applicantsStatisticSliceState);

      const { getApplicantsStatistic } = useApplicantsStatisticApi();

      useEffect(() => {
            getApplicantsStatistic();

            return () => {
                  dispatch(applicantsStatisticSliceAction.resetSlice());
            };
      }, []);

      return (
            <span className="w-full h-full flex flex-col gap-1">
                  <ApplicationStatistic isLoading={status === Status.LOADING} data={data} />

                  {status === Status.FAILED && (
                        <span className="flex items-center gap-1 text-error">
                              <AppIcon name="error" />
                              <p className="text-xs">
                                    {error?.detail ?? "Something Went Wrong !!"}
                                    <br />
                                    traceId: {error?.traceId}
                              </p>
                        </span>
                  )}
            </span>
      );
}

export default ApplicationStatisticContainer;
