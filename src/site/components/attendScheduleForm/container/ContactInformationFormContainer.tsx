import { useFormContext } from "react-hook-form";
import ContactInformationForm from "../forms/ContactInformationForm";
import { IParticipationContactForm } from "@/admin/model/participant/attendScheduleModel";

type IField = (keyof IParticipationContactForm)[];
interface IContactInformationFormContainer {
      slideToPrev: () => void;
      submitToParentHandler: (data: IField) => void;
}

function ContactInformationFormContainer({
      slideToPrev,
      submitToParentHandler,
}: IContactInformationFormContainer) {
      const form = useFormContext<IParticipationContactForm>();

      const formSubmitHandler = () => {
            const fields: IField = ["address", "city", "state", "country", "postalCode"];

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
