import { useEffect } from "react";
import AdminScheduleAddOrEditModal from "../components/AdminScheduleAddOrEditModal";
import useAppForm from "@/hooks/form/useAppForm";
import useScheduleApi from "@/admin/hooks/schedule/useScheduleApi";
import { IScheduleForm, IScheduleModel, ISchedulePutRequest } from "@/admin/model/schedule/scheduleModel";
import { formatTime } from "@/utils/stringFormat/formatTime";

interface IAdminScheduleEditModalContainer {
      closeModalHandler: () => void;
      selectedScheduleDetail: IScheduleModel;
}

function AdminScheduleEditModalContainer({
      selectedScheduleDetail,
      closeModalHandler,
}: IAdminScheduleEditModalContainer) {
      const scheduleForm = useAppForm<IScheduleForm>();
      const { handleSubmit, reset } = scheduleForm;

      const { updateAdminSchedule } = useScheduleApi();

      const formSubmitHandler = handleSubmit((scheduleUpdatedData) => {
            const schedule: ISchedulePutRequest = {
                  id: selectedScheduleDetail.id,
                  title: scheduleUpdatedData.title,
                  themeId: selectedScheduleDetail.themeId, //TODO: change this later
                  location: scheduleUpdatedData.location,
                  startTime: formatTime(scheduleUpdatedData.startTime),
                  endTime: formatTime(scheduleUpdatedData.endTime),
            };

            updateAdminSchedule(schedule).then(closeModalHandler);
      });

      const formResetHandler = () => {
            reset();
      };

      useEffect(() => {
            reset(selectedScheduleDetail);
      }, []);
      return (
            <AdminScheduleAddOrEditModal
                  modalType="Edit"
                  scheduleForm={scheduleForm}
                  formResetHandler={formResetHandler}
                  formSubmitHandler={formSubmitHandler}
                  closeModalHandler={closeModalHandler}
            />
      );
}

export default AdminScheduleEditModalContainer;
