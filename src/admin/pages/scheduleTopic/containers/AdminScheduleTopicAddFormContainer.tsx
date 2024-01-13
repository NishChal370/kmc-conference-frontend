import AdminScheduleTopicAddOrEditModal from "../components/AdminScheduleTopicAddOrEditModal";
import useAppForm from "@/hooks/form/useAppForm";
import useScheduleTopicApi from "@/admin/hooks/scheduleTopic/useScheduleTopicApi";
import { IScheduleTopicForm, IScheduleTopicModel } from "@/admin/model/scheduleTopic/scheduleTopicModel";

interface IAdminScheduleTopicAddFormContainer {
      closeModalHandler: () => void;
      selectedSessionId: IScheduleTopicModel["id"];
}

function AdminScheduleTopicAddFormContainer({
      selectedSessionId,
      closeModalHandler,
}: IAdminScheduleTopicAddFormContainer) {
      const scheduleTopicForm = useAppForm<IScheduleTopicForm>();
      const { handleSubmit, reset } = scheduleTopicForm;

      const { addAdminScheduleTopic } = useScheduleTopicApi();

      const formSubmitHandler = handleSubmit((newScheduleTopic) => {
            addAdminScheduleTopic({ ...newScheduleTopic, sessionId: selectedSessionId }).then(
                  closeModalHandler
            );
      });

      const formResetHandler = () => {
            reset();
      };

      return (
            <AdminScheduleTopicAddOrEditModal
                  scheduleTopicForm={scheduleTopicForm}
                  formResetHandler={formResetHandler}
                  formSubmitHandler={formSubmitHandler}
                  closeModalHandler={closeModalHandler}
            />
      );
}

export default AdminScheduleTopicAddFormContainer;
