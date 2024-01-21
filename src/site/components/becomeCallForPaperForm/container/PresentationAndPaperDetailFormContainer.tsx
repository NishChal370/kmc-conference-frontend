import { useFormContext } from "react-hook-form";
import { ICallForPaperPostPresentationForm } from "@/admin/model/callForPaper/callForPaperApplyModel";
import PresentationAndPaperDetailForm from "../form/PresentationAndPaperDetailForm";

type IField = (keyof ICallForPaperPostPresentationForm)[];

interface IPresentationAndPaperDetailFormContainer {
      slideToPrev: () => void;
      submitToParent: (fields: IField) => void;
}

function PresentationAndPaperDetailFormContainer({
      slideToPrev,
      submitToParent,
}: IPresentationAndPaperDetailFormContainer) {
      const formContext = useFormContext<ICallForPaperPostPresentationForm>();

      const formSubmitHandler = () => {
            const fields: IField = [
                  "contributions",
                  "keyObjectives",
                  "significanceRelevance",
                  "audioVisualRequirements",
                  "fullPaperORExtendedAbstract",
                  "preferredPresentationFormat",
            ];

            submitToParent(fields);
      };
      return (
            <PresentationAndPaperDetailForm
                  slideToPrev={slideToPrev}
                  formContext={formContext}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default PresentationAndPaperDetailFormContainer;
