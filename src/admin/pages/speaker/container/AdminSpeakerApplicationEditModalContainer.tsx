import { useEffect } from "react";
import useAppForm from "@/hooks/form/useAppForm";
import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import {
      ISpeakerApplicationBasicPutRequest,
      ISpeakerApplicationEditForm,
      ISpeakerBasicModel,
} from "@/admin/model/speaker/speakerModel";
import AppliedSpeakerEditModal from "../../profileSetting/appliedHistory/appliedSpeaking-components/AppliedSpeakerEditModal";
import { Status } from "@/enum/commonEnum";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { speakerDetailedSliceState, speakerSliceAction } from "../feature/speakerSlice";

interface IAdminSpeakerApplicationEditModalContainer {
      selectedSpeakerId: ISpeakerBasicModel["id"];
      closeModalHandler: () => void;
}

function AdminSpeakerApplicationEditModalContainer({
      selectedSpeakerId,
      closeModalHandler,
}: IAdminSpeakerApplicationEditModalContainer) {
      const speakerEditForm = useAppForm<ISpeakerApplicationEditForm>({
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

      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(speakerDetailedSliceState);

      const { updateSpeakerApplicationBasic, getSpeakerDetailedInfo } = useSpeakerApi();

      const formSubmitHandler = handleSubmit((speakerUpdatedDetail: ISpeakerApplicationEditForm) => {
            const previousSpeakingEngagements = speakerUpdatedDetail.previousSpeakingEngagements.map(
                  ({ value }) => value
            );
            const publications = speakerUpdatedDetail.publications.map(({ value }) => value);
            const referenceContacts = speakerUpdatedDetail.referenceContacts.map(({ phone }) => phone);

            const updatedSpeaker: ISpeakerApplicationBasicPutRequest = {
                  speakerId: selectedSpeakerId,
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

            updateSpeakerApplicationBasic(updatedSpeaker).then(closeModalHandler);
      });

      const formResetHandler = () => {
            reset();
      };

      const setInitialData = () => {
            if (!data) return;

            const speakerEditingDetail: ISpeakerApplicationEditForm = {
                  photo: {
                        newFiles: [],
                        oldFiles: data.photo ? [data.photo] : undefined,
                  },
                  bio: data.bio,
                  linkedInProfile: data.linkedInProfile,
                  twitterHandle: data.twitterHandle,
                  professionalWebsite: data.professionalWebsite,
                  previousExperience: data.previousExperience,
                  previousConferences: data.previousConferences,
                  expertiseInField: data.expertiseInField,
                  previousSpeakingEngagements:
                        data.previousSpeakingEngagements?.length && data.previousSpeakingEngagements !== null
                              ? data!.previousSpeakingEngagements.map((value) => ({
                                      value,
                                }))
                              : [{ value: "" }],
                  publications:
                        data.publications?.length && data.publications !== null
                              ? data!.publications.map((value) => ({
                                      value,
                                }))
                              : [{ value: "" }],
                  willingToTravel: data.willingToTravel,
                  accommodationNeeds: data.accommodationNeeds,
                  referenceContacts:
                        data.referenceContacts?.length && data.referenceContacts !== null
                              ? data!.referenceContacts.map((phone) => ({
                                      phone,
                                }))
                              : [{ phone: "" }],
            };

            reset(speakerEditingDetail);
      };

      const fetchSelectedSpeakerDetail = () => {
            getSpeakerDetailedInfo({ id: selectedSpeakerId }).catch(closeModalHandler);
      };

      useEffect(() => {
            fetchSelectedSpeakerDetail();
      }, [selectedSpeakerId]);

      useEffect(() => {
            setInitialData();
      }, [data]);

      useEffect(() => {
            return () => {
                  dispatch(speakerSliceAction.resetSpeakerDetailedInfoSlice());
            };
      }, []);

      return (
            status === Status.SUCCEEDED && (
                  <AppliedSpeakerEditModal
                        speakerEditForm={speakerEditForm}
                        formResetHandler={formResetHandler}
                        formSubmitHandler={formSubmitHandler}
                        closeAppliedSpeakerEditForm={closeModalHandler}
                  />
            )
      );
}

export default AdminSpeakerApplicationEditModalContainer;
