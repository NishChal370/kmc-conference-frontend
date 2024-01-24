import { FormProvider, useForm } from "react-hook-form";
import BecomeSpeakerForm from "../form/BecomeSpeakerForm";
import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import {
      ISpeakerAddForm,
      ISpeakerAddModal,
      ISpeakerPostRequest,
} from "@/admin/model/speaker/becomeSpeakerModel";
import { extractValue, getFileOrNull } from "@/utils/dataHelpers";

interface IBecomeSpeakerFormContainer {
      closeModalHandler: () => void;
      selectedSessionId: ISpeakerAddModal["sessionChoice"]["sessionId"];
}
function BecomeSpeakerFormContainer({ selectedSessionId, closeModalHandler }: IBecomeSpeakerFormContainer) {
      const methods = useForm<ISpeakerAddForm>({
            defaultValues: {
                  photo: {
                        oldFiles: [],
                        newFiles: [],
                  },
                  proposalFile: {
                        oldFiles: [],
                        newFiles: [],
                  },
                  previousSpeakingEngagements: [{ value: "" }],
                  publications: [{ value: "" }],
                  referenceContacts: [{ phone: "" }],
            },
      });
      const { handleSubmit, trigger } = methods;

      const { addSpeakerDetail } = useSpeakerApi();

      const partialSubmitHandler = async (fields: any) => {
            const result = await trigger(fields);

            if (!result) throw new Error("Error in submitted fields " + fields);
      };

      const formSubmitHandler = handleSubmit((speakerNewDetail) => {
            const previousSpeakingEngagements = extractValue(
                  speakerNewDetail.previousSpeakingEngagements,
                  "value"
            );
            const publications = extractValue(speakerNewDetail.publications, "value");
            const referenceContacts = extractValue(speakerNewDetail.referenceContacts, "phone");

            const newSpeaker: ISpeakerPostRequest = {
                  bio: speakerNewDetail.bio,
                  linkedInProfile: speakerNewDetail.linkedInProfile,
                  twitterHandle: speakerNewDetail.twitterHandle,
                  professionalWebsite: speakerNewDetail.professionalWebsite,
                  previousExperience: speakerNewDetail.previousExperience,
                  previousConferences: speakerNewDetail.previousConferences,
                  expertiseInField: speakerNewDetail.expertiseInField,
                  previousSpeakingEngagements: previousSpeakingEngagements,
                  publications: publications,
                  willingToTravel: speakerNewDetail.willingToTravel,
                  accommodationNeeds: speakerNewDetail.accommodationNeeds,
                  photo: getFileOrNull(speakerNewDetail.photo),
                  referenceContacts: referenceContacts,
                  sessionSelection: {
                        sessionId: selectedSessionId,
                        sessionProposal: getFileOrNull(speakerNewDetail.proposalFile),
                        avRequirements: speakerNewDetail.avRequirements,
                        preferredSessionLengthMinutes: speakerNewDetail.preferredSessionLengthMinutes,
                  },
                  agreedToDates: speakerNewDetail.agreedToDates,
                  agreedTandC: speakerNewDetail.agreedTandC,
            };

            addSpeakerDetail(newSpeaker).then(closeModalHandler);
      });

      return (
            <FormProvider {...methods}>
                  <BecomeSpeakerForm
                        submitFullForm={formSubmitHandler}
                        partialSubmitHandler={partialSubmitHandler}
                  />
            </FormProvider>
      );
}

export default BecomeSpeakerFormContainer;
