import { IParticipationPreferenceForm } from "@/admin/model/participant/participantModel";
import { useFormContext } from "react-hook-form";
import ScheduleSpecificForm from "../forms/ScheduleSpecificForm";

interface IScheduleSpecificFormContainer {
      submitToParent: (fields: (keyof IParticipationPreferenceForm)[]) => void;
}
function ScheduleSpecificFormContainer({ submitToParent }: IScheduleSpecificFormContainer) {
      const scheduleSpecificForm = useFormContext<IParticipationPreferenceForm>();

      const formSubmitHandler = (fields: (keyof IParticipationPreferenceForm)[]) => () => {
            submitToParent(fields);
      };

      return (
            <ScheduleSpecificForm
                  scheduleSpecificForm={scheduleSpecificForm}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default ScheduleSpecificFormContainer;
