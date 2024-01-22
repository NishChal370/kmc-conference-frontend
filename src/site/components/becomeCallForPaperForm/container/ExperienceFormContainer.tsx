import { useFormContext } from "react-hook-form";
import ExperienceForm from "../form/ExperienceForm";
import { ICallForPaperPostExperienceForm } from "@/admin/model/callForPaper/callForPaperApplyModel";

type IField = (keyof ICallForPaperPostExperienceForm)[];

interface IExperienceFormContainer {
      slideToPrev: () => void;
      submitToParent: (fields: IField) => void;
}
function ExperienceFormContainer({ slideToPrev, submitToParent }: IExperienceFormContainer) {
      const formContext = useFormContext<ICallForPaperPostExperienceForm>();

      const formSubmitHandler = () => {
            const fields: IField = ["previousExperience", "listOfConferences"];

            submitToParent(fields);
      };

      return (
            <ExperienceForm
                  slideToPrev={slideToPrev}
                  formContext={formContext}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default ExperienceFormContainer;
