import { useAppSelector } from "@/app/hooks";
import ScheduleActionHeaderButton from "../components/scheduleActionHeader/ScheduleActionHeaderButton";
import { scheduleContentBriefDetailSliceState } from "@/admin/pages/schedule/feature/scheduleSlice";
import AttendScheduleModal from "@/site/components/attendScheduleForm/AttendScheduleModal";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import { IParticipationAddModal } from "@/admin/model/participant/participantModel";
import { verifyLoginState } from "@/protectedRoute/feature/verifyLoginSlice";
import { Status } from "@/enum/commonEnum";
import { errorToastMessage } from "@/utils/alert";

function ScheduleActionHeaderButtonContainer() {
      const [participationModal, openParticipationModal, closeParticipationModal] =
            useExtraModal<IParticipationAddModal>();

      const { data } = useAppSelector(scheduleContentBriefDetailSliceState);

      const { status } = useAppSelector(verifyLoginState);

      const attendButtonHandler = () => {
            if (!data) return;

            if (status !== Status.SUCCEEDED) {
                  errorToastMessage("Please login to attend.");

                  return;
            }

            openParticipationModal({
                  sessionChoice: { title: data.title, sessionId: data.id },
                  dayDate: data.date,
                  startTime: data.startTime,
                  endTime: data.endTime,
                  dayLocation: data.venueInfo.location,
                  sessionLocation: data.location,
            });
      };

      return (
            <>
                  <ScheduleActionHeaderButton attendButtonHandler={attendButtonHandler} />

                  {participationModal?.data && participationModal.isOpen && (
                        <AttendScheduleModal
                              closeParticipationForm={closeParticipationModal}
                              selectedSessionDetail={participationModal.data}
                        />
                  )}
            </>
      );
}

export default ScheduleActionHeaderButtonContainer;
