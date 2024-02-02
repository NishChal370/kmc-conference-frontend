import useAppForm from "@/hooks/form/useAppForm";
import ContactUsForm from "../components/ContactUsForm";
import useContactUsApi from "@/admin/hooks/contactUs/useContactUsApi";
import { IContactUsAddForm } from "@/admin/model/contactUs/contactUsModel";

function ContactUsFormContainer() {
      const form = useAppForm<IContactUsAddForm>();
      const { handleSubmit, reset } = form;

      const { addContactUs } = useContactUsApi();

      const formSubmitHandler = handleSubmit((contactUsDetail) => {
            addContactUs(contactUsDetail).then(formResetHandler);
      });

      const formResetHandler = () => {
            reset();
      };

      return <ContactUsForm form={form} formSubmitHandler={formSubmitHandler} />;
}

export default ContactUsFormContainer;
