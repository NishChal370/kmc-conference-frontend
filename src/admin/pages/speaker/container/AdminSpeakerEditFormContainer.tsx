import { useEffect } from "react";
import AdminAddOrEditSpeakerForm from "../components/AdminSpeakerAddOrEditForm";
import useAppForm from "@/hooks/form/useAppForm";
import useSpeakerApi from "@/admin/hooks/speaker/useSpeakerApi";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { speakerDetailedSliceState, speakerSliceAction } from "../feature/speakerSlice";
import { Status } from "@/enum/commonEnum";
import { IAdminSpeakerForm, IAdminSpeakerPutRequest } from "@/admin/model/speaker/adminSpeakerModel";

interface IAdminSpeakerEditFormContainer {
      selectedSpeakerId: number;
      closeModalHandler: () => void;
}

function AdminSpeakerEditFormContainer({
      selectedSpeakerId,
      closeModalHandler,
}: IAdminSpeakerEditFormContainer) {
      const speakerEditForm = useAppForm<IAdminSpeakerForm>({
            defaultValues: {
                  photo: {
                        oldFiles: [],
                        newFiles: [],
                  },
                  proposalFile: {
                        oldFiles: [],
                        newFiles: [],
                  },
            },
      });
      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(speakerDetailedSliceState);

      const { updateAdminSpeakerFullDetail, getSpeakerDetailedInfo } = useSpeakerApi();

      const { handleSubmit, reset } = speakerEditForm;

      const formSubmitHandler = handleSubmit((speakerUpdatedDetail: IAdminSpeakerForm) => {
            const previousSpeakingEngagements = speakerUpdatedDetail.previousSpeakingEngagements.map(
                  ({ value }) => value
            );
            const publications = speakerUpdatedDetail.publications.map(({ value }) => value);
            const referenceContacts = speakerUpdatedDetail.referenceContacts.map(({ phone }) => phone);

            console.log(speakerUpdatedDetail.photo.newFiles![0]);
            const updatedSpeaker: IAdminSpeakerPutRequest = {
                  speakerId: speakerUpdatedDetail.speakerId,
                  name: speakerUpdatedDetail.name,
                  title: speakerUpdatedDetail.title,
                  photo: speakerUpdatedDetail.photo.newFiles?.length
                        ? speakerUpdatedDetail.photo.newFiles[0]
                        : null,
                  oldPhoto: speakerUpdatedDetail.photo.oldFiles?.length
                        ? speakerUpdatedDetail.photo.oldFiles[0].fileName
                        : undefined,
                  affiliation: speakerUpdatedDetail.affiliation,
                  jobTitle: speakerUpdatedDetail.jobTitle,
                  email: speakerUpdatedDetail.email,
                  phone: speakerUpdatedDetail.phone,
                  bio: speakerUpdatedDetail.bio,
                  linkedInProfile: speakerUpdatedDetail.linkedInProfile || undefined, // un
                  twitterHandle: speakerUpdatedDetail.twitterHandle || undefined, //un
                  professionalWebsite: speakerUpdatedDetail.professionalWebsite || undefined, //
                  previousExperience: speakerUpdatedDetail.previousExperience || undefined, //
                  previousConferences: speakerUpdatedDetail.previousConferences || undefined, //
                  expertiseInField: speakerUpdatedDetail.expertiseInField,
                  previousSpeakingEngagements: previousSpeakingEngagements.filter(Boolean).length
                        ? previousSpeakingEngagements
                        : null,
                  publications: publications.filter(Boolean).length ? publications : null,
                  preferredSessionLengthMinutes: speakerUpdatedDetail.preferredSessionLengthMinutes
                        ? +speakerUpdatedDetail.preferredSessionLengthMinutes
                        : 0,
                  availabilityInfo: null, // THis is not in used
                  willingToTravel: speakerUpdatedDetail.willingToTravel,
                  avRequirements: speakerUpdatedDetail.avRequirements || undefined,
                  accommodationNeeds: speakerUpdatedDetail.accommodationNeeds || undefined,
                  sessionProposal: speakerUpdatedDetail.proposalFile.newFiles?.length
                        ? speakerUpdatedDetail.proposalFile.newFiles[0]
                        : null,
                  oldSessionProposal: speakerUpdatedDetail.proposalFile.oldFiles?.length
                        ? speakerUpdatedDetail.proposalFile.oldFiles[0].fileName
                        : undefined,
                  referenceContacts: referenceContacts.filter(Boolean).length ? referenceContacts : null,
            };

            console.log(updatedSpeaker, speakerUpdatedDetail.photo.newFiles);
            updateAdminSpeakerFullDetail(updatedSpeaker).then(closeModalHandler);
      });

      const fetchData = () => {
            getSpeakerDetailedInfo({ id: selectedSpeakerId });
      };

      const setInitialData = () => {
            if (!data) return;

            const speakerEditingDetail: IAdminSpeakerForm = {
                  speakerId: data.id,
                  name: data.name,
                  title: data.title,
                  photo: {
                        newFiles: [],
                        oldFiles: data.photo ? [data.photo] : undefined,
                  },
                  affiliation: data.affiliation,
                  jobTitle: data.jobTitle,
                  email: data.email,
                  phone: data.phone,
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
                  preferredSessionLengthMinutes: data.preferredSessionLengthMinutes,
                  availabilityInfo: null, // THis is not in used
                  willingToTravel: data.willingToTravel,
                  avRequirements: data.avRequirements,
                  accommodationNeeds: data.accommodationNeeds,
                  referenceContacts:
                        data.referenceContacts?.length && data.referenceContacts !== null
                              ? data!.referenceContacts.map((phone) => ({
                                      phone,
                                }))
                              : [{ phone: "" }],
                  proposalFile: {
                        newFiles: [],
                        oldFiles: data.sessionProposal ? [data.sessionProposal] : undefined,
                  },
            };

            reset(speakerEditingDetail);
      };

      useEffect(() => {
            fetchData();

            return () => {
                  dispatch(speakerSliceAction.resetSpeakerDetailedInfoSlice());
            };
      }, [selectedSpeakerId]);

      useEffect(() => {
            setInitialData();
      }, [data]);

      return (
            status === Status.SUCCEEDED && (
                  <AdminAddOrEditSpeakerForm
                        modalType="Edit"
                        speakerEditForm={speakerEditForm}
                        formSubmitHandler={formSubmitHandler}
                        formResetHandler={() => {
                              reset();
                        }}
                        closeModalHandler={closeModalHandler}
                  />
            )
      );
}

export default AdminSpeakerEditFormContainer;
