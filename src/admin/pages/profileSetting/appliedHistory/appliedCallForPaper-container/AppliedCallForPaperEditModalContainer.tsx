import { useEffect } from "react";
import {
      IAppliedCallForPaperBasicModel,
      IAppliedCallForPaperEditForm,
      IAppliedCallForPaperPutRequest,
} from "@/admin/model/appliedHistory/appliedHistoryModel";
import useAppForm from "@/hooks/form/useAppForm";
import AppliedCallForPaperEditModal from "../appliedCallForPaper-components/AppliedCallForPaperEditModal";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";

interface IAppliedCallForPaperEditModalContainer {
      editingDetail: IAppliedCallForPaperBasicModel;
      closeAppliedCallForPaperEditForm: () => void;
}
function AppliedCallForPaperEditModalContainer({
      editingDetail,
      closeAppliedCallForPaperEditForm,
}: IAppliedCallForPaperEditModalContainer) {
      const callForPaperEditForm = useAppForm<IAppliedCallForPaperEditForm>({
            defaultValues: {
                  previousExperience: [{ value: "" }],
                  listOfConferences: [{ value: "" }],
            },
      });

      const { reset, handleSubmit } = callForPaperEditForm;

      const { updateAppliedCallForPaperBasic } = useAppliedHistoryApi();

      const formSubmitHandler = handleSubmit((callForPaperUpdatedDetail) => {
            console.log(callForPaperUpdatedDetail);
            const previousExperience = callForPaperUpdatedDetail.previousExperience.map(({ value }) => value);
            const listOfConferences = callForPaperUpdatedDetail.listOfConferences.map(({ value }) => value);

            const updatedCallForPaper: IAppliedCallForPaperPutRequest = {
                  briefBiography: callForPaperUpdatedDetail.briefBiography,
                  linkedInProfile: callForPaperUpdatedDetail.linkedInProfile,
                  twitterHandle: callForPaperUpdatedDetail.twitterHandle,
                  professionalWebsite: callForPaperUpdatedDetail.professionalWebsite,
                  previousExperience: previousExperience,
                  listOfConferences: listOfConferences,
                  specialAccommodationNeeds: callForPaperUpdatedDetail.specialAccommodationNeeds,
                  additionalRequirements: callForPaperUpdatedDetail.additionalRequirements,
            };

            updateAppliedCallForPaperBasic(updatedCallForPaper).then(closeAppliedCallForPaperEditForm);
      });

      const formResetHandler = () => {
            reset();
      };

      const setInitialData = () => {
            const callForPaperEditingDetail: IAppliedCallForPaperEditForm = {
                  briefBiography: editingDetail.briefBiography,
                  linkedInProfile: editingDetail.linkedInProfile,
                  twitterHandle: editingDetail.twitterHandle,
                  professionalWebsite: editingDetail.professionalWebsite,
                  previousExperience:
                        editingDetail.previousExperience?.length && editingDetail.previousExperience !== null
                              ? editingDetail!.previousExperience.map((value) => ({
                                      value,
                                }))
                              : [{ value: "" }],
                  listOfConferences:
                        editingDetail.listOfConferences?.length && editingDetail.listOfConferences !== null
                              ? editingDetail!.listOfConferences.map((value) => ({
                                      value,
                                }))
                              : [{ value: "" }],
                  specialAccommodationNeeds: editingDetail.specialAccommodationNeeds,
                  additionalRequirements: editingDetail.additionalRequirements,
            };

            reset(callForPaperEditingDetail);
      };

      useEffect(() => {
            setInitialData();
      }, [editingDetail]);

      return (
            <AppliedCallForPaperEditModal
                  callForPaperEditForm={callForPaperEditForm}
                  formResetHandler={formResetHandler}
                  formSubmitHandler={formSubmitHandler}
                  closeAppliedCallForPaperEditForm={closeAppliedCallForPaperEditForm}
            />
      );
}

export default AppliedCallForPaperEditModalContainer;
