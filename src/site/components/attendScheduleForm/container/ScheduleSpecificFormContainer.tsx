import { useFormContext } from "react-hook-form";
import ScheduleSpecificForm from "../forms/ScheduleSpecificForm";
import { IParticipationPreferenceForm } from "@/admin/model/participant/attendScheduleModel";

type IField = (keyof IParticipationPreferenceForm)[];

interface IScheduleSpecificFormContainer {
      submitToParent: (fields: (keyof IParticipationPreferenceForm)[]) => void;
}
function ScheduleSpecificFormContainer({ submitToParent }: IScheduleSpecificFormContainer) {
      const scheduleSpecificForm = useFormContext<IParticipationPreferenceForm>();

      const formSubmitHandler = () => {
            const fields: IField = ["registrationType", "specialRequirements", "trackPreferences"];

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
