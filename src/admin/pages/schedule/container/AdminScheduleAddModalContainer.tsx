import AdminScheduleAddOrEditModal from "../components/AdminScheduleAddOrEditModal";
import useAppForm from "@/hooks/form/useAppForm";
import useScheduleApi from "@/admin/hooks/schedule/useScheduleApi";
import { IDayThemeModel } from "@/admin/model/dayTheme/dayThemeModel";
import { IScheduleForm, ISchedulePostRequest } from "@/admin/model/schedule/scheduleModel";
import { formatTime } from "@/utils/stringFormat/formatTime";

interface IAdminScheduleAddModalContainer {
      selectedThemeId: IDayThemeModel["id"];
      closeModal: () => void;
}

function AdminScheduleAddModalContainer({ selectedThemeId, closeModal }: IAdminScheduleAddModalContainer) {
      const scheduleForm = useAppForm<IScheduleForm>();
      const { handleSubmit, reset } = scheduleForm;

      const { addAdminSchedule } = useScheduleApi();

      const formSubmitHandler = handleSubmit((newSchedule) => {
            const schedule: ISchedulePostRequest = {
                  title: newSchedule.title,
                  location: newSchedule.location,
                  startTime: formatTime(newSchedule.startTime),
                  endTime: formatTime(newSchedule.endTime),
                  themeId: selectedThemeId,
            };

            addAdminSchedule(schedule).then(closeModal);
      });

      const formResetHandler = () => {
            reset();
      };

      return (
            <AdminScheduleAddOrEditModal
                  scheduleForm={scheduleForm}
                  closeModalHandler={closeModal}
                  formResetHandler={formResetHandler}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default AdminScheduleAddModalContainer;
