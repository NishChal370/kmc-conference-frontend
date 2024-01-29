import { useFormContext } from "react-hook-form";
import PresentationAndPaperDetailForm from "../form/PresentationAndPaperDetailForm";
import { ICallForPaperAddSessionPresentationForm } from "@/admin/model/callForPaper/callForPaperApplyModel";

interface IPresentationAndPaperDetailFormContainer {
      slideToPrev: () => void;
}

function PresentationAndPaperDetailFormContainer({ slideToPrev }: IPresentationAndPaperDetailFormContainer) {
      const formContext = useFormContext<ICallForPaperAddSessionPresentationForm>();

      return <PresentationAndPaperDetailForm formContext={formContext} slideToPrev={slideToPrev} />;
}

export default PresentationAndPaperDetailFormContainer;
