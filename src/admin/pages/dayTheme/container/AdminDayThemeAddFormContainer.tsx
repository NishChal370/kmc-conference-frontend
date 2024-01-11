import {
      IDayThemeAddOrEditForm,
      IDayThemeModel,
      IDayThemePostRequest,
} from "@/admin/model/dayTheme/dayThemeModel";
import useAppForm from "@/hooks/form/useAppForm";
import AdminDayThemeAddOrEditForm from "../components/AdminDayThemeAddOrEditForm";
import useDayThemeApi from "@/admin/hooks/dayTheme/useDayThemeApi";
import { formatTime } from "@/utils/stringFormat/formatTime";

interface IAdminDayThemeAddFormContainer {
      selectedDayId: IDayThemeModel["dayId"];
      closeModalHandler: () => void;
}

function AdminDayThemeAddFormContainer({ selectedDayId, closeModalHandler }: IAdminDayThemeAddFormContainer) {
      const { addAdminDayTheme } = useDayThemeApi();

      const dayThemeAddForm = useAppForm<IDayThemeAddOrEditForm>();
      const { handleSubmit, reset, getValues } = dayThemeAddForm;

      const formSubmitHandler = handleSubmit((dayTheme) => {
            const newDayTheme: IDayThemePostRequest = {
                  title: dayTheme.title,
                  dayId: selectedDayId,
                  plenarySession: {
                        title: dayTheme.plenaryTitle,
                        description: dayTheme.plenaryDescription,
                        startTime: formatTime(dayTheme.plenaryStartTime),
                        endTime: formatTime(dayTheme.plenaryEndTime),
                  },
            };

            addAdminDayTheme(newDayTheme).then(closeModalHandler);
      });

      const formResetHandler = () => {
            reset();
      };

      console.log(getValues("title"));
      return (
            <AdminDayThemeAddOrEditForm
                  dayThemeAddOrEditForm={dayThemeAddForm}
                  closeModalHandler={closeModalHandler}
                  formResetHandler={formResetHandler}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default AdminDayThemeAddFormContainer;
