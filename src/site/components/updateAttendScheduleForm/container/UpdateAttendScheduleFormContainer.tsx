import UpdateAttendScheduleForm from "../UpdateAttendScheduleForm";
import useParticipantApi from "@/admin/hooks/participant/useParticipant";
import { IParticipationAddModal } from "@/admin/model/participant/participantModel";

interface IUpdateAttendScheduleFormContainer {
      closeParticipationForm: () => void;
      selectedSessionDetail: IParticipationAddModal;
}

function UpdateAttendScheduleFormContainer({
      selectedSessionDetail,
      closeParticipationForm,
}: IUpdateAttendScheduleFormContainer) {
      const { addParticipationNewSession } = useParticipantApi();

      const confirmUpdateHandler = () => {
            addParticipationNewSession({ sessionId: selectedSessionDetail.sessionChoice.sessionId }).then(
                  closeParticipationForm
            );
      };

      return (
            <UpdateAttendScheduleForm
                  confirmHandler={confirmUpdateHandler}
                  selectedSessionDetail={selectedSessionDetail}
                  closeParticipationForm={closeParticipationForm}
            />
      );
}

export default UpdateAttendScheduleFormContainer;
