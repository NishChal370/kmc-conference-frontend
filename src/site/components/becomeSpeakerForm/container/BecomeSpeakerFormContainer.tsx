import { FormProvider, useForm } from "react-hook-form";
import BecomeSpeakerForm from "../form/BecomeSpeakerForm";
import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import { ISpeakerAddForm, ISpeakerPostRequest } from "@/admin/model/speaker/adminSpeakerModel";
import { assignIfTruthy, convertToNumberIfTruthy, extractValue, getFileOrNull } from "@/utils/dataHelpers";

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
                  linkedInProfile: assignIfTruthy(speakerNewDetail.linkedInProfile, undefined),
                  twitterHandle: assignIfTruthy(speakerNewDetail.twitterHandle, undefined),
                  professionalWebsite: assignIfTruthy(speakerNewDetail.professionalWebsite, undefined),
                  previousExperience: assignIfTruthy(speakerNewDetail.previousExperience, undefined),
                  previousConferences: assignIfTruthy(speakerNewDetail.previousConferences, undefined),
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
                  avRequirements: assignIfTruthy(speakerNewDetail.avRequirements, undefined),
                  accommodationNeeds: assignIfTruthy(speakerNewDetail.accommodationNeeds, undefined),
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
