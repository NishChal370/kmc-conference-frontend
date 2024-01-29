import {
      ICallForPaperPostForm,
      ICallForPaperPostRequest,
} from "@/admin/model/callForPaper/callForPaperApplyModel";
import { FormProvider, useForm } from "react-hook-form";
import BecomeCallForPaperForm from "../form/BecomeCallForPaperForm";
import { IScheduleChoice } from "@/admin/model/schedule/scheduleModel";
import useCallForPaperApi from "@/admin/hooks/callForPaper/useCallForPaperApi";
import { extractValue, getFileOrNull } from "@/utils/dataHelpers";

interface IBecomeCallForPaperFormContainer {
      closeModalHandler: () => void;
      selectedSessionId: IScheduleChoice["sessionId"];
}
function BecomeCallForPaperFormContainer({
      selectedSessionId,
      closeModalHandler,
}: IBecomeCallForPaperFormContainer) {
      const methods = useForm<ICallForPaperPostForm>({
            defaultValues: {
                  fullPaperORExtendedAbstract: {
                        oldFiles: [],
                        newFiles: [],
                  },
                  keywords: [{ value: "" }],
                  keyObjectives: [{ value: "" }],
                  contributions: [{ value: "" }],
                  previousExperience: [{ value: "" }],
                  listOfConferences: [{ value: "" }],
                  referencesOrCitations: [{ value: "" }],
            },
      });
      const { handleSubmit, trigger } = methods;

      const { addCallForPaperDetail } = useCallForPaperApi();

      const partialSubmitHandler = async (fields: any) => {
            const result = await trigger(fields);

            if (!result) throw new Error("Error in submitted fields " + fields);
      };

      const formSubmitHandler = handleSubmit((callForPaperNewDetail) => {
            const keywords = extractValue(callForPaperNewDetail.keywords, "value");
            const keyObjectives = extractValue(callForPaperNewDetail.keyObjectives, "value");
            const contributions = extractValue(callForPaperNewDetail.contributions, "value");
            const listOfConferences = extractValue(callForPaperNewDetail.listOfConferences, "value");
            const previousExperience = extractValue(callForPaperNewDetail.previousExperience, "value");
            const referencesOrCitations = extractValue(callForPaperNewDetail.referencesOrCitations, "value");

            const newCallForPaper: ICallForPaperPostRequest = {
                  briefBiography: callForPaperNewDetail.briefBiography,
                  linkedInProfile: callForPaperNewDetail.linkedInProfile,
                  twitterHandler: callForPaperNewDetail.twitterHandler,
                  professionalWebsite: callForPaperNewDetail.professionalWebsite,
                  session: {
                        sessionId: selectedSessionId,
                        abstractSummary: callForPaperNewDetail.abstractSummary,
                        keywords: keywords,
                        proposedPaperSessionTitle: callForPaperNewDetail.proposedPaperSessionTitle,
                        primaryFieldCategory: callForPaperNewDetail.primaryFieldCategory,
                        researchMethodology: callForPaperNewDetail.researchMethodology,
                        keyObjectives: keyObjectives,
                        contributions: contributions,
                        significanceRelevance: callForPaperNewDetail.significanceRelevance || "",
                        preferredPresentationFormat: callForPaperNewDetail.preferredPresentationFormat,
                        audioVisualRequirements: callForPaperNewDetail.audioVisualRequirements || "",
                        fullPaperOrExtendedAbstract: getFileOrNull(
                              callForPaperNewDetail.fullPaperORExtendedAbstract
                        ),
                        referencesOrCitations: referencesOrCitations,
                  },
                  previousExperience: previousExperience,
                  listOfConferences: listOfConferences,
                  availabilityDaysTimes: null, // no in use
                  willParticipateInPanel: callForPaperNewDetail.willParticipateInPanel,
                  willParticipateInWorkshop: callForPaperNewDetail.willParticipateInWorkshop,
                  specialAccommodationNeeds: callForPaperNewDetail.specialAccommodationNeeds,
                  additionalRequirements: callForPaperNewDetail.additionalRequirements,
                  confirmPresent: callForPaperNewDetail.confirmPresent,
                  acceptTandC: callForPaperNewDetail.acceptTandC,
            };

            addCallForPaperDetail(newCallForPaper).then(closeModalHandler);
      });

      return (
            <FormProvider {...methods}>
                  <BecomeCallForPaperForm
                        submitFullForm={formSubmitHandler}
                        partialSubmitHandler={partialSubmitHandler}
                  />
            </FormProvider>
      );
}

export default BecomeCallForPaperFormContainer;
