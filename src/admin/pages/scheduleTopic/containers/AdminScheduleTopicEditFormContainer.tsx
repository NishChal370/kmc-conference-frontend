import { useEffect } from "react";
import useAppForm from "@/hooks/form/useAppForm";
import useScheduleTopicApi from "@/admin/hooks/scheduleTopic/useScheduleTopicApi";
import { IScheduleTopicForm, IScheduleTopicModel } from "@/admin/model/scheduleTopic/scheduleTopicModel";
import AdminScheduleTopicAddOrEditModal from "../components/AdminScheduleTopicAddOrEditModal";

interface IAdminScheduleTopicEditFormContainer {
      closeModalHandler: () => void;
      scheduleTopicDetail: IScheduleTopicModel;
}

function AdminScheduleTopicEditFormContainer({
      scheduleTopicDetail,
      closeModalHandler,
}: IAdminScheduleTopicEditFormContainer) {
      const scheduleTopicForm = useAppForm<IScheduleTopicForm>();
      const { handleSubmit, reset } = scheduleTopicForm;

      const { updateAdminScheduleTopic } = useScheduleTopicApi();

      const formSubmitHandler = handleSubmit((scheduleTopicUpdatedData) => {
            updateAdminScheduleTopic(scheduleTopicUpdatedData).then(closeModalHandler);
      });

      const formResetHandler = () => {
            reset();
      };

      useEffect(() => {
            reset({
                  id: scheduleTopicDetail.id,
                  sessionId: scheduleTopicDetail.sessionId,
                  title: scheduleTopicDetail.title,
                  description: scheduleTopicDetail.description,
                  kmcHighlights: scheduleTopicDetail.kmcHighlights,
                  keyNote: scheduleTopicDetail.keyNote,
                  internationalCases: scheduleTopicDetail.internationalCases,
                  workshop: scheduleTopicDetail.workshop,
            });
      }, []);
      return (
            <AdminScheduleTopicAddOrEditModal
                  modalType="Edit"
                  scheduleTopicForm={scheduleTopicForm}
                  formSubmitHandler={formSubmitHandler}
                  formResetHandler={formResetHandler}
                  closeModalHandler={closeModalHandler}
            />
      );
}

export default AdminScheduleTopicEditFormContainer;
