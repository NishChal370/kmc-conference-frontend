import { useFormContext } from "react-hook-form";
import AdditionalForm from "../form/AdditionalForm";
import { IParticipationPostAdditionalForm } from "@/admin/model/callForPaper/callForPaperApplyModel";

interface IAdditionalFormContainer {
      slideToPrev: () => void;
}

function AdditionalFormContainer({ slideToPrev }: IAdditionalFormContainer) {
      const formContext = useFormContext<IParticipationPostAdditionalForm>();

      return <AdditionalForm formContext={formContext} slideToPrev={slideToPrev} />;
}

export default AdditionalFormContainer;
