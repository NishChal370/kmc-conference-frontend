import { useEffect } from "react";
import {
      IAppliedSpeakerBasic,
      IAppliedSpeakerBasicPutRequest,
      IAppliedSpeakerEditForm,
} from "@/admin/model/appliedHistory/appliedHistoryModel";
import useAppForm from "@/hooks/form/useAppForm";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";
import AppliedSpeakerEditModal from "../appliedSpeaking-components/AppliedSpeakerEditModal";

interface IAppliedSpeakerEditModalContainer {
      editingDetail: IAppliedSpeakerBasic;
      closeAppliedSpeakerEditForm: () => void;
}
function AppliedSpeakerEditModalContainer({
      editingDetail,
      closeAppliedSpeakerEditForm,
}: IAppliedSpeakerEditModalContainer) {
      const speakerEditForm = useAppForm<IAppliedSpeakerEditForm>({
            defaultValues: {
                  photo: {
                        oldFiles: [],
                        newFiles: [],
                  },
                  publications: [{ value: "" }],
                  previousSpeakingEngagements: [{ value: "" }],
                  referenceContacts: [{ phone: "" }],
            },
      });

      const { reset, handleSubmit } = speakerEditForm;

      const { updateApplicationSpeakerBasic } = useAppliedHistoryApi();

      const formSubmitHandler = handleSubmit((speakerUpdatedDetail: IAppliedSpeakerEditForm) => {
            const previousSpeakingEngagements = speakerUpdatedDetail.previousSpeakingEngagements.map(
                  ({ value }) => value
            );
            const publications = speakerUpdatedDetail.publications.map(({ value }) => value);
            const referenceContacts = speakerUpdatedDetail.referenceContacts.map(({ phone }) => phone);

            const updatedSpeaker: IAppliedSpeakerBasicPutRequest = {
                  photo: speakerUpdatedDetail.photo.newFiles?.length
                        ? speakerUpdatedDetail.photo.newFiles[0]
                        : null,
                  oldPhoto: speakerUpdatedDetail.photo.oldFiles?.length
                        ? speakerUpdatedDetail.photo.oldFiles[0].fileName
                        : undefined,
                  bio: speakerUpdatedDetail.bio,
                  linkedInProfile: speakerUpdatedDetail.linkedInProfile,
                  twitterHandle: speakerUpdatedDetail.twitterHandle,
                  professionalWebsite: speakerUpdatedDetail.professionalWebsite,
                  previousExperience: speakerUpdatedDetail.previousExperience,
                  previousConferences: speakerUpdatedDetail.previousConferences,
                  expertiseInField: speakerUpdatedDetail.expertiseInField,
                  previousSpeakingEngagements: previousSpeakingEngagements.filter(Boolean).length
                        ? previousSpeakingEngagements
                        : null,
                  publications: publications.filter(Boolean).length ? publications : null,
                  availabilityInfo: null, // THis is not in used
                  willingToTravel: speakerUpdatedDetail.willingToTravel,
                  accommodationNeeds: speakerUpdatedDetail.accommodationNeeds,
                  referenceContacts: referenceContacts.filter(Boolean).length ? referenceContacts : null,
            };

            updateApplicationSpeakerBasic(updatedSpeaker).then(closeAppliedSpeakerEditForm);
      });

      const formResetHandler = () => {
            reset();
      };

      const setInitialData = () => {
            const speakerEditingDetail: IAppliedSpeakerEditForm = {
                  photo: {
                        newFiles: [],
                        oldFiles: editingDetail.photo ? [editingDetail.photo] : undefined,
                  },
                  bio: editingDetail.bio,
                  linkedInProfile: editingDetail.linkedInProfile,
                  twitterHandle: editingDetail.twitterHandle,
                  professionalWebsite: editingDetail.professionalWebsite,
                  previousExperience: editingDetail.previousExperience,
                  previousConferences: editingDetail.previousConferences,
                  expertiseInField: editingDetail.expertiseInField,
                  previousSpeakingEngagements:
                        editingDetail.previousSpeakingEngagements?.length &&
                        editingDetail.previousSpeakingEngagements !== null
                              ? editingDetail!.previousSpeakingEngagements.map((value) => ({
                                      value,
                                }))
                              : [{ value: "" }],
                  publications:
                        editingDetail.publications?.length && editingDetail.publications !== null
                              ? editingDetail!.publications.map((value) => ({
                                      value,
                                }))
                              : [{ value: "" }],
                  willingToTravel: editingDetail.willingToTravel,
                  accommodationNeeds: editingDetail.accommodationNeeds,
                  referenceContacts:
                        editingDetail.referenceContacts?.length && editingDetail.referenceContacts !== null
                              ? editingDetail!.referenceContacts.map((phone) => ({
                                      phone,
                                }))
                              : [{ phone: "" }],
            };

            reset(speakerEditingDetail);
      };

      useEffect(() => {
            setInitialData();
      }, [editingDetail]);

      return (
            <AppliedSpeakerEditModal
                  speakerEditForm={speakerEditForm}
                  formResetHandler={formResetHandler}
                  formSubmitHandler={formSubmitHandler}
                  closeAppliedSpeakerEditForm={closeAppliedSpeakerEditForm}
            />
      );
}

export default AppliedSpeakerEditModalContainer;
