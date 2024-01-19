import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import { ISpeakerAddForm, ISpeakerPostRequest } from "@/admin/model/speaker/adminSpeakerModel";
import { FormProvider, useForm } from "react-hook-form";
import BecomeSpeakerForm from "../form/BecomeSpeakerForm";

interface IBecomeSpeakerFormContainer {
      selectedSessionId: ISpeakerPostRequest["sessions"][0];
      closeModalHandler: () => void;
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
            console.log(speakerNewDetail);
            const previousSpeakingEngagements = speakerNewDetail.previousSpeakingEngagements.map(
                  ({ value }) => value
            );

            const publications = speakerNewDetail.publications.map(({ value }) => value);
            const referenceContacts = speakerNewDetail.referenceContacts.map(({ phone }) => phone);

            const newSpeaker: ISpeakerPostRequest = {
                  photo: speakerNewDetail.photo.newFiles?.length ? speakerNewDetail.photo.newFiles[0] : null,
                  bio: speakerNewDetail.bio,
                  linkedInProfile: speakerNewDetail.linkedInProfile || undefined, // un
                  twitterHandle: speakerNewDetail.twitterHandle || undefined, //un
                  professionalWebsite: speakerNewDetail.professionalWebsite || undefined, //
                  previousExperience: speakerNewDetail.previousExperience || undefined, //
                  previousConferences: speakerNewDetail.previousConferences || undefined, //
                  expertiseInField: speakerNewDetail.expertiseInField,
                  previousSpeakingEngagements: previousSpeakingEngagements.filter(Boolean).length
                        ? previousSpeakingEngagements
                        : null,
                  publications: publications.filter(Boolean).length ? publications : null,
                  preferredSessionLengthMinutes: speakerNewDetail.preferredSessionLengthMinutes
                        ? +speakerNewDetail.preferredSessionLengthMinutes
                        : 0,
                  availabilityInfo: null, // THis is not in used
                  willingToTravel: speakerNewDetail.willingToTravel,
                  avRequirements: speakerNewDetail.avRequirements || undefined,
                  accommodationNeeds: speakerNewDetail.accommodationNeeds || undefined,
                  sessionProposal: speakerNewDetail.sessionProposal.newFiles?.length
                        ? speakerNewDetail.sessionProposal.newFiles[0]
                        : null,
                  referenceContacts: referenceContacts.filter(Boolean).length ? referenceContacts : null,
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
