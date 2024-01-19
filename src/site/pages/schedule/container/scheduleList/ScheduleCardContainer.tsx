import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import ScheduleCard from "../../components/scheduleList/ScheduleCard";
import { IScheduleContentDetailModel } from "@/admin/model/schedule/scheduleModel";
import { IParticipationAddModal } from "@/admin/model/participant/participantModel";
import AttendScheduleModal from "@/site/components/attendScheduleForm/AttendScheduleModal";
import { useAppSelector } from "@/app/hooks";
import { verifyLoginState } from "@/protectedRoute/feature/verifyLoginSlice";
import { Status } from "@/enum/commonEnum";
import { errorToastMessage } from "@/utils/alert";

interface IScheduleCardContainer {
      schedule: IScheduleContentDetailModel;
}
function ScheduleCardContainer({ schedule }: IScheduleCardContainer) {
      const [participationForm, openParticipationForm, closeParticipationForm] =
            useExtraModal<IParticipationAddModal>();

      const { status: loggedInStatus } = useAppSelector(verifyLoginState);

      const openParticipationFormHandler = (data: IParticipationAddModal) => () => {
            if (loggedInStatus !== Status.SUCCEEDED) {
                  errorToastMessage("Please login before registration");
                  return;
            }

            openParticipationForm(data);
      };

      return (
            <>
                  <ScheduleCard
                        schedule={schedule}
                        openParticipationFormHandler={openParticipationFormHandler}
                  />

                  {participationForm?.isOpen && participationForm.data && (
                        <AttendScheduleModal
                              closeParticipationForm={closeParticipationForm}
                              selectedSessionDetail={participationForm.data}
                        />
                  )}
            </>
      );
}

export default ScheduleCardContainer;
