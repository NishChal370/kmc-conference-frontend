import { FormProvider } from "react-hook-form";
import useAppForm from "@/hooks/form/useAppForm";
import useCallForPaperApi from "@/admin/hooks/callForPaper/useCallForPaperApi";
import UpdateBecomeCallForPaperForm from "../form/UpdateBecomeCallForPaperForm";
import {
      ICallForPaperAddModal,
      ICallForPaperAddSessionForm,
} from "@/admin/model/callForPaper/callForPaperApplyModel";
import { extractValue, getFileOrNull } from "@/utils/dataHelpers";

interface IUpdateBecomeCallForPaperFormContainer {
      closeModal: () => void;
      sessionId: ICallForPaperAddModal["sessionChoice"]["sessionId"];
}
function UpdateBecomeCallForPaperFormContainer({
      closeModal,
      sessionId,
}: IUpdateBecomeCallForPaperFormContainer) {
      const form = useAppForm<ICallForPaperAddSessionForm>({
            defaultValues: {
                  fullPaperORExtendedAbstract: {
                        oldFiles: [],
                        newFiles: [],
                  },
                  keywords: [{ value: "" }],
                  keyObjectives: [{ value: "" }],
                  contributions: [{ value: "" }],
                  referencesOrCitations: [{ value: "" }],
            },
      });
      const { handleSubmit, trigger } = form;

      const { addCallForPaperNewSession } = useCallForPaperApi();

      const partialSubmitHandler = async (fields: any) => {
            const result = await trigger(fields);

            if (!result) throw new Error("Error in submitted fields " + fields);
      };

      const formSubmitHandler = handleSubmit((newSession) => {
            const keywords = extractValue(newSession.keywords, "value");
            const keyObjectives = extractValue(newSession.keyObjectives, "value");
            const contributions = extractValue(newSession.contributions, "value");
            const referencesOrCitations = extractValue(newSession.referencesOrCitations, "value");

            addCallForPaperNewSession({
                  sessionId: sessionId,
                  abstractSummary: newSession.abstractSummary,
                  keywords: keywords,
                  proposedPaperSessionTitle: newSession.proposedPaperSessionTitle,
                  primaryFieldCategory: newSession.primaryFieldCategory,
                  researchMethodology: newSession.researchMethodology,
                  keyObjectives: keyObjectives,
                  contributions: contributions,
                  significanceRelevance: newSession.significanceRelevance || "",
                  preferredPresentationFormat: newSession.preferredPresentationFormat,
                  audioVisualRequirements: newSession.audioVisualRequirements || "",
                  fullPaperOrExtendedAbstract: getFileOrNull(newSession.fullPaperORExtendedAbstract),
                  referencesOrCitations: referencesOrCitations,
            }).then(closeModal);
      });

      return (
            <FormProvider {...form}>
                  <UpdateBecomeCallForPaperForm
                        formSubmitHandler={formSubmitHandler}
                        partialSubmitHandler={partialSubmitHandler}
                  />
            </FormProvider>
      );
}

export default UpdateBecomeCallForPaperFormContainer;
