import { useEffect } from "react";
import AdminDayThemeAddOrEditForm from "../components/AdminDayThemeAddOrEditForm";
import {
      IDayThemeAddOrEditForm,
      IDayThemeModel,
      IDayThemePutRequest,
} from "@/admin/model/dayTheme/dayThemeModel";
import useAppForm from "@/hooks/form/useAppForm";
import useDayThemeApi from "@/admin/hooks/dayTheme/useDayThemeApi";
import { formatTime } from "@/utils/stringFormat/formatTime";

interface IAdminDayThemeEditFormContainer {
      selectedDayTheme: IDayThemeModel;
      closeModalHandler: () => void;
}

function AdminDayThemeEditFormContainer({
      selectedDayTheme,
      closeModalHandler,
}: IAdminDayThemeEditFormContainer) {
      const { updateAdminDayTheme } = useDayThemeApi();

      const dayThemeAddForm = useAppForm<IDayThemeAddOrEditForm>();
      const { handleSubmit, reset } = dayThemeAddForm;

      console.log(selectedDayTheme);
      const formSubmitHandler = handleSubmit((dayTheme) => {
            const newDayTheme: IDayThemePutRequest = {
                  id: selectedDayTheme.id,
                  title: dayTheme.title,
                  dayId: selectedDayTheme.day.dayId,
                  plenarySession: {
                        title: dayTheme.plenaryTitle,
                        description: dayTheme.plenaryDescription,
                        startTime: formatTime(dayTheme.plenaryStartTime),
                        endTime: formatTime(dayTheme.plenaryEndTime),
                  },
            };

            updateAdminDayTheme(newDayTheme).then(closeModalHandler);
      });

      const formResetHandler = () => {
            reset();
      };

      const setInitialData = () => {
            if (selectedDayTheme) {
                  const dayThemeEditingDetail: IDayThemeAddOrEditForm = {
                        title: selectedDayTheme.title,
                        plenaryTitle: selectedDayTheme.plenarySession.title,
                        plenaryDescription: selectedDayTheme.plenarySession.description,
                        plenaryStartTime: selectedDayTheme.plenarySession.startTime,
                        plenaryEndTime: selectedDayTheme.plenarySession.endTime,
                  };

                  reset(dayThemeEditingDetail);
            }
      };

      useEffect(() => {
            setInitialData();
      }, []);

      return (
            <AdminDayThemeAddOrEditForm
                  dayThemeAddOrEditForm={dayThemeAddForm}
                  closeModalHandler={closeModalHandler}
                  formResetHandler={formResetHandler}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default AdminDayThemeEditFormContainer;
