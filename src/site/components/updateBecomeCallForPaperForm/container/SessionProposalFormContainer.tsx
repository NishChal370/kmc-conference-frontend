import { useFormContext } from "react-hook-form";
import SessionProposalForm from "../form/SessionProposalForm";
import { ICallForPaperAddSessionProposalForm } from "@/admin/model/callForPaper/callForPaperApplyModel";

type IField = (keyof ICallForPaperAddSessionProposalForm)[];

interface ISessionProposalFormContainer {
      submitToParent: (fields: IField) => void;
}

function SessionProposalFormContainer({ submitToParent }: ISessionProposalFormContainer) {
      const formContext = useFormContext<ICallForPaperAddSessionProposalForm>();

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

      return <SessionProposalForm formContext={formContext} formSubmitHandler={formSubmitHandler} />;
}

export default SessionProposalFormContainer;
