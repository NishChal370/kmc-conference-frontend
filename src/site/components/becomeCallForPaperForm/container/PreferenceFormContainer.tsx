import { useFormContext } from "react-hook-form";
import PreferenceForm from "../form/PreferenceForm";
import { IParticipationPostPreferenceForm } from "@/admin/model/callForPaper/callForPaperApplyModel";

type IField = (keyof IParticipationPostPreferenceForm)[];

interface IPreferenceFormContainer {
      slideToPrev: () => void;
      submitToParent: (fields: IField) => void;
}

function PreferenceFormContainer({ slideToPrev, submitToParent }: IPreferenceFormContainer) {
      const formContext = useFormContext<IParticipationPostPreferenceForm>();

      const formSubmitHandler = () => {
            const fields: IField = [
                  "specialAccommodationNeeds",
                  "willParticipateInPanel",
                  "willParticipateInWorkshop",
            ];

            submitToParent(fields);
      };

      return (
            <PreferenceForm
                  slideToPrev={slideToPrev}
                  formContext={formContext}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default PreferenceFormContainer;
