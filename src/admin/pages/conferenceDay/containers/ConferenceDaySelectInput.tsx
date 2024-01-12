import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import DropDownInput from "@/shared/input/DropDownInput";
import useConferenceDayApi from "@/admin/hooks/conferenceDay/useConferenceDayApi";
import { IConferenceDayDate } from "@/admin/model/conferenceDay/conferenceDayModel";
import { conferenceDayAction, conferenceDaysBasicInfoState } from "../feature/conferenceDaySlice";

interface IConferenceDaySelectInput {
      label?: string;
      isRequired?: boolean;
      errorMessage?: string;
      selected?: IConferenceDayDate;
      needToFetch?: boolean;
      onChangeHandler: (...event: any[]) => void;
}

function ConferenceDaySelectInput({
      label,
      selected,
      isRequired,
      errorMessage,
      needToFetch = false,
      onChangeHandler,
}: IConferenceDaySelectInput) {
      const dispatch = useAppDispatch();

      const { status, data, error } = useAppSelector(conferenceDaysBasicInfoState);

      const { getConferenceDaysBasicInfo } = useConferenceDayApi();

      const dayOption = useMemo(
            () =>
                  data.map((day) => ({
                        id: day.dayId,
                        value: day.date,
                  })),
            [data]
      );

      useEffect(() => {
            if (needToFetch) {
                  getConferenceDaysBasicInfo();
            }

            return () => {
                  if (needToFetch) {
                        dispatch(conferenceDayAction.resetConferenceDaysBasicInfoSlice());
                  }
            };
      }, []);

      return (
            <DropDownInput
                  isRequired={isRequired}
                  status={status}
                  apiError={error}
                  errorMessage={errorMessage}
                  label={label || "Conference Day"}
                  data={dayOption}
                  selected={selected ? { id: selected.dayId, value: selected.date } : undefined}
                  onChangeHandler={function (data): void {
                        onChangeHandler({ dayId: data.id, date: data.value } as IConferenceDayDate);
                  }}
            />
      );
}

export default ConferenceDaySelectInput;
