import { useFormContext } from "react-hook-form";
import EmergencyContactInformationForm from "../forms/EmergencyContactInformationForm";
import { IParticipationEmergencyContactForm } from "@/admin/model/participant/participantModel";

type IField = (keyof IParticipationEmergencyContactForm)[];
interface IEmergencyContactInformationFormContainer {
      slideToPrev: () => void;
      submitToParentHandler: (data: IField) => void;
}

function EmergencyContactInformationFormContainer({
      slideToPrev,
      submitToParentHandler,
}: IEmergencyContactInformationFormContainer) {
      const form = useFormContext<IParticipationEmergencyContactForm>();

      const formSubmitHandler = () => {
            const fields: IField = [
                  "emergencyContactName",
                  "emergencyContactNumber",
                  "relationshipWithEmergencyContact",
            ];

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
