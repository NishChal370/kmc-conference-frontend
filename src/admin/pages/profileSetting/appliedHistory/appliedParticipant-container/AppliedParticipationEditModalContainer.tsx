import { useEffect } from "react";
import {
      IAppliedParticipationBasicModel,
      IAppliedParticipationEditForm,
} from "@/admin/model/appliedHistory/appliedHistoryModel";
import useAppForm from "@/hooks/form/useAppForm";
import AppliedParticipationEditModal from "../appliedParticipant-components/AppliedParticipationEditModal";
import useAppliedHistoryApi from "@/admin/hooks/appliedHistory/useAppliedHistoryApi";

interface IAppliedParticipationEditModalContainer {
      editingDetail: IAppliedParticipationBasicModel;
      closeAppliedParticipationEditForm: () => void;
}
function AppliedParticipationEditModalContainer({
      editingDetail,
      closeAppliedParticipationEditForm,
}: IAppliedParticipationEditModalContainer) {
      const participationEditForm = useAppForm<IAppliedParticipationEditForm>();

      const { reset, handleSubmit } = participationEditForm;

      const { updateAppliedParticipationBasic } = useAppliedHistoryApi();

      const formSubmitHandler = handleSubmit((updatedData) => {
            updateAppliedParticipationBasic(updatedData).then(closeAppliedParticipationEditForm);
      });

      const formResetHandler = () => {
            reset();
      };

      const setInitialData = () => {
            reset(editingDetail);
      };

      useEffect(() => {
            setInitialData();
      }, [editingDetail]);

      return (
            <AppliedParticipationEditModal
                  participationEditForm={participationEditForm}
                  formResetHandler={formResetHandler}
                  formSubmitHandler={formSubmitHandler}
                  closeAppliedParticipationEditForm={closeAppliedParticipationEditForm}
            />
      );
}

export default AppliedParticipationEditModalContainer;
