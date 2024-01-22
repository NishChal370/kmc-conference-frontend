import useAppForm from "@/hooks/form/useAppForm";
import {
      IAdminCallForPaperForm,
      IAdminCallForPaperPutRequest,
} from "@/admin/model/callForPaper/callForPaperModel";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { callForPaperDetailedSliceState, callForPaperSliceAction } from "../feature/callForPaperSlice";
import useCallForPaperApi from "@/admin/hooks/callForPaper/useCallForPaperApi";
import { useEffect } from "react";
import { Status } from "@/enum/commonEnum";
import AdminCallForPaperAddOrEditForm from "../components/AdminCallForPaperAddOrEditForm";
import { assignIfTruthy, extractValue, getFileOrNull } from "@/utils/dataHelpers";

interface IAdminCallForPaperEditFormContainer {
      selectedCallForPaperId: number;
      closeModalHandler: () => void;
}
function AdminCallForPaperEditFormContainer({
      closeModalHandler,
      selectedCallForPaperId,
}: IAdminCallForPaperEditFormContainer) {
      const callForPaperEditForm = useAppForm<IAdminCallForPaperForm>({
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

      const dispatch = useAppDispatch();

      const { status, data } = useAppSelector(callForPaperDetailedSliceState);

      const { updateAdminCallForPaperFullDetail, getCallForPaperDetailedInfo } = useCallForPaperApi();

      const { handleSubmit, reset } = callForPaperEditForm;

      const formSubmitHandler = handleSubmit((callForPaperUpdates) => {
            const keywords = extractValue(callForPaperUpdates.keywords, "value");
            const keyObjectives = extractValue(callForPaperUpdates.keyObjectives, "value");
            const contributions = extractValue(callForPaperUpdates.contributions, "value");
            const previousExperience = extractValue(callForPaperUpdates.previousExperience, "value");
            const listOfConferences = extractValue(callForPaperUpdates.listOfConferences, "value");
            const referencesOrCitations = extractValue(callForPaperUpdates.referencesOrCitations, "value");

            const updatedCallForPaper: IAdminCallForPaperPutRequest = {
                  callId: selectedCallForPaperId,
                  briefBiography: callForPaperUpdates.briefBiography,
                  linkedInProfile: assignIfTruthy(callForPaperUpdates.linkedInProfile, undefined),
                  twitterHandler: assignIfTruthy(callForPaperUpdates.twitterHandler, undefined),
                  professionalWebsite: assignIfTruthy(callForPaperUpdates.professionalWebsite, ""),
                  proposedPaperSessionTitle: callForPaperUpdates.proposedPaperSessionTitle,
                  abstractSummary: callForPaperUpdates.abstractSummary,
                  keywords: keywords.length ? keywords : null,
                  primaryFieldCategory: assignIfTruthy(callForPaperUpdates.primaryFieldCategory, ""),
                  researchMethodology: assignIfTruthy(callForPaperUpdates.researchMethodology, ""),
                  keyObjectives: keyObjectives.length ? keyObjectives : null,
                  contributions: contributions.length ? contributions : null,
                  significanceRelevance: assignIfTruthy(callForPaperUpdates.significanceRelevance, undefined),
                  preferredPresentationFormat: assignIfTruthy(
                        callForPaperUpdates.preferredPresentationFormat,
                        ""
                  ),
                  audioVisualRequirements: assignIfTruthy(callForPaperUpdates.audioVisualRequirements, ""),
                  previousExperience: previousExperience.length ? previousExperience : null,
                  listOfConferences: listOfConferences.length ? listOfConferences : null,
                  referencesOrCitations: referencesOrCitations.length ? referencesOrCitations : null,
                  availabilityDaysTimes: null, // no in use
                  willParticipateInPanel: callForPaperUpdates.willParticipateInPanel,
                  willParticipateInWorkshop: callForPaperUpdates.willParticipateInWorkshop,
                  specialAccommodationNeeds: assignIfTruthy(
                        callForPaperUpdates.specialAccommodationNeeds,
                        ""
                  ),
                  additionalRequirements: assignIfTruthy(callForPaperUpdates.additionalRequirements, ""),
                  fullPaperOrExtendedAbstract: getFileOrNull(callForPaperUpdates.fullPaperORExtendedAbstract),
                  oldFullPaperOrExtendedAbstract: callForPaperUpdates.fullPaperORExtendedAbstract.oldFiles
                        ?.length
                        ? callForPaperUpdates.fullPaperORExtendedAbstract.oldFiles[0].fileName
                        : null,
            };

            updateAdminCallForPaperFullDetail(updatedCallForPaper).then(closeModalHandler);
            console.log(":SD", updatedCallForPaper);
      });

      const formResetHandler = () => {
            reset();
      };

      const fetchData = () => {
            getCallForPaperDetailedInfo({ id: selectedCallForPaperId });
      };

      const setInitialData = () => {
            if (!data) return;

            console.log(data.fullPaperOrExtendedAbstract);
            const callForPaperDetail: IAdminCallForPaperForm = {
                  callId: data.id,
                  briefBiography: data.briefBiography,
                  linkedInProfile: data.linkedInProfile,
                  twitterHandler: data.twitterHandle,
                  professionalWebsite: data.professionalWebsite,
                  proposedPaperSessionTitle: data.proposedPaperSessionTitle,
                  abstractSummary: data.abstractSummary,
                  keywords:
                        data.keywords?.length && data.keywords !== null
                              ? data.keywords.map((value) => ({
                                      value,
                                }))
                              : [{ value: "" }],
                  primaryFieldCategory: data.primaryFieldCategory,
                  researchMethodology: data.researchMethodology,
                  keyObjectives:
                        data.keyObjectives?.length && data.keyObjectives !== null
                              ? data.keyObjectives.map((value) => ({
                                      value,
                                }))
                              : [{ value: "" }],
                  contributions:
                        data.contributions?.length && data.contributions !== null
                              ? data.contributions.map((value) => ({
                                      value,
                                }))
                              : [{ value: "" }],
                  significanceRelevance: data.significanceRelevance,
                  preferredPresentationFormat: data.preferredPresentationFormat,
                  audioVisualRequirements: data.audioVisualRequirements,
                  previousExperience:
                        data.previousExperience?.length && data.previousExperience !== null
                              ? data.previousExperience.map((value) => ({
                                      value,
                                }))
                              : [{ value: "" }],
                  listOfConferences:
                        data.listOfConferences?.length && data.listOfConferences !== null
                              ? data.listOfConferences.map((value) => ({
                                      value,
                                }))
                              : [{ value: "" }],
                  referencesOrCitations:
                        data.referencesOrCitations?.length && data.referencesOrCitations !== null
                              ? data.referencesOrCitations.map((value) => ({
                                      value,
                                }))
                              : [{ value: "" }],
                  availabilityDaysTimes: undefined, // no in use
                  willParticipateInPanel: data.willParticipateInPanel,
                  willParticipateInWorkshop: data.willParticipateInPanel,
                  specialAccommodationNeeds: data.specialAccommodationNeeds,
                  additionalRequirements: data.additionalRequirements,
                  fullPaperORExtendedAbstract: {
                        newFiles: [],
                        oldFiles: data.fullPaperOrExtendedAbstract
                              ? [data.fullPaperOrExtendedAbstract]
                              : undefined,
                  },
            };

            reset(callForPaperDetail);
      };

      useEffect(() => {
            fetchData();

            return () => {
                  dispatch(callForPaperSliceAction.resetCallForPaperDetailedInfoSlice());
            };
      }, [selectedCallForPaperId]);

      useEffect(() => {
            setInitialData();
      }, [data]);

      return (
            status === Status.SUCCEEDED && (
                  <AdminCallForPaperAddOrEditForm
                        modalType="Edit"
                        callForPaperAddOrEditForm={callForPaperEditForm}
                        formSubmitHandler={formSubmitHandler}
                        formResetHandler={formResetHandler}
                        closeModalHandler={closeModalHandler}
                  />
            )
      );
}

export default AdminCallForPaperEditFormContainer;
