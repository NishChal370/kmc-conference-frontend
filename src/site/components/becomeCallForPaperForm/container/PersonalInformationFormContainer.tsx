import PersonalInformationForm from "../form/PersonalInformationForm";
import { useFormContext } from "react-hook-form";
import { ICallForPaperPostPersonalForm } from "@/admin/model/callForPaper/callForPaperApplyModel";

type IField = (keyof ICallForPaperPostPersonalForm)[];

interface IPersonalInformationContainer {
      submitToParent: (fields: IField) => void;
}

function PersonalInformationFormContainer({ submitToParent }: IPersonalInformationContainer) {
      const formContext = useFormContext<ICallForPaperPostPersonalForm>();

      const formSubmitHandler = () => {
            const fields: IField = [
                  "briefBiography",
                  "linkedInProfile",
                  "professionalWebsite",
                  "twitterHandler",
            ];

            submitToParent(fields);
      };

      return <PersonalInformationForm formContext={formContext} formSubmitHandler={formSubmitHandler} />;
}

export default PersonalInformationFormContainer;
