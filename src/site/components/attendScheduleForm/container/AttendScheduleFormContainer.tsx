import { IParticipationAddForm, IParticipationAddModal } from "@/admin/model/participant/participantModel";
import { FormProvider, useForm } from "react-hook-form";
import AttendScheduleForm from "../forms/AttendScheduleForm";
import useParticipantApi from "@/admin/hooks/participant/useParticipant";

interface IAttendScheduleFormContainer {
      closeModal: () => void;
      selectedSessionId: IParticipationAddModal["sessionChoice"]["sessionId"];
}
function AttendScheduleFormContainer({ closeModal, selectedSessionId }: IAttendScheduleFormContainer) {
      const methods = useForm<IParticipationAddForm>();
      const { handleSubmit, trigger } = methods;

      const { addParticipation } = useParticipantApi();

      const partialSubmitHandler = async (fields: any) => {
            const result = await trigger(fields);

            if (!result) throw new Error("Error in submitted fields " + fields);
      };

      const formSubmitHandler = handleSubmit((participationData) => {
            addParticipation({
                  ...participationData,
                  sessionChoices: [selectedSessionId],
            }).then(closeModal);
      });
      return (
            <FormProvider {...methods}>
                  <AttendScheduleForm
                        submitFullForm={formSubmitHandler}
                        partialSubmitHandler={partialSubmitHandler}
                  />
            </FormProvider>
      );
}

export default AttendScheduleFormContainer;
