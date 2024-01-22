import { useFormContext } from "react-hook-form";
import SessionProposalForm from "../form/SessionProposalForm";
import { ICallForPaperPostSessionProposalForm } from "@/admin/model/callForPaper/callForPaperApplyModel";

type IField = (keyof ICallForPaperPostSessionProposalForm)[];

interface ISessionProposalFormContainer {
      slideToPrev: () => void;
      submitToParent: (fields: IField) => void;
}

function SessionProposalFormContainer({ slideToPrev, submitToParent }: ISessionProposalFormContainer) {
      const formContext = useFormContext<ICallForPaperPostSessionProposalForm>();

      const formSubmitHandler = () => {
            const fields: IField = [
                  "keywords",
                  "abstractSummary",
                  "researchMethodology",
                  "primaryFieldCategory",
                  "referencesOrCitations",
                  "proposedPaperSessionTitle",
            ];

            submitToParent(fields);
      };

      return (
            <SessionProposalForm
                  slideToPrev={slideToPrev}
                  formContext={formContext}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default SessionProposalFormContainer;
