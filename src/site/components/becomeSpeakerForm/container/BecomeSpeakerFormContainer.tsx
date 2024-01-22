import { FormProvider, useForm } from "react-hook-form";
import BecomeSpeakerForm from "../form/BecomeSpeakerForm";
import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import { ISpeakerAddForm, ISpeakerPostRequest } from "@/admin/model/speaker/adminSpeakerModel";
import { convertToNumberIfTruthy, extractValue, getFileOrNull } from "@/utils/dataHelpers";

interface IBecomeSpeakerFormContainer {
      closeModalHandler: () => void;
      selectedSessionId: ISpeakerPostRequest["sessions"][0];
}
function BecomeSpeakerFormContainer({ selectedSessionId, closeModalHandler }: IBecomeSpeakerFormContainer) {
      const methods = useForm<ISpeakerAddForm>({
            defaultValues: {
                  photo: {
                        oldFiles: [],
                        newFiles: [],
                  },
                  sessionProposal: {
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
                  photo: getFileOrNull(speakerNewDetail.photo),
                  bio: speakerNewDetail.bio,
                  linkedInProfile: speakerNewDetail.linkedInProfile,
                  twitterHandle: speakerNewDetail.twitterHandle,
                  professionalWebsite: speakerNewDetail.professionalWebsite,
                  previousExperience: speakerNewDetail.previousExperience,
                  previousConferences: speakerNewDetail.previousConferences,
                  expertiseInField: speakerNewDetail.expertiseInField,
                  previousSpeakingEngagements: previousSpeakingEngagements.length
                        ? previousSpeakingEngagements
                        : null,
                  publications: publications.length ? publications : null,
                  preferredSessionLengthMinutes: convertToNumberIfTruthy(
                        speakerNewDetail.preferredSessionLengthMinutes
                  ),
                  availabilityInfo: null, // This is not in use
                  willingToTravel: speakerNewDetail.willingToTravel,
                  avRequirements: speakerNewDetail.avRequirements,
                  accommodationNeeds: speakerNewDetail.accommodationNeeds,
                  sessionProposal: getFileOrNull(speakerNewDetail.sessionProposal),
                  referenceContacts: referenceContacts.length ? referenceContacts : null,
                  agreedTandC: speakerNewDetail.agreedTandC,
                  agreedToDates: speakerNewDetail.agreedToDates,
                  sessions: [selectedSessionId],
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
