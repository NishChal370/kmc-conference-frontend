import { IParticipationContactForm } from "@/admin/model/participant/participantModel";
import { useFormContext } from "react-hook-form";
import ContactInformationForm from "../forms/ContactInformationForm";

interface IContactInformationFormContainer {
      slideToPrev: () => void;
      submitToParentHandler: (data: (keyof IParticipationContactForm)[]) => void;
}

function ContactInformationFormContainer({
      slideToPrev,
      submitToParentHandler,
}: IContactInformationFormContainer) {
      const form = useFormContext<IParticipationContactForm>();

      const formSubmitHandler = (fields: (keyof IParticipationContactForm)[]) => () => {
            submitToParentHandler(fields);
      };
      return (
            <ContactInformationForm
                  slideToPrev={slideToPrev}
                  form={form}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default ContactInformationFormContainer;
