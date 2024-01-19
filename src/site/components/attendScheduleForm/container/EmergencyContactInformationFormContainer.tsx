import { IParticipationEmergencyContactForm } from "@/admin/model/participant/participantModel";
import EmergencyContactInformationForm from "../forms/EmergencyContactInformationForm";
import { useFormContext } from "react-hook-form";

interface IEmergencyContactInformationFormContainer {
      slideToPrev: () => void;
      submitToParentHandler: (data: (keyof IParticipationEmergencyContactForm)[]) => void;
}

function EmergencyContactInformationFormContainer({
      slideToPrev,
      submitToParentHandler,
}: IEmergencyContactInformationFormContainer) {
      const form = useFormContext<IParticipationEmergencyContactForm>();

      const formSubmitHandler = (fields: (keyof IParticipationEmergencyContactForm)[]) => () => {
            submitToParentHandler(fields);
      };

      return (
            <EmergencyContactInformationForm
                  slideToPrev={slideToPrev}
                  form={form}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default EmergencyContactInformationFormContainer;
