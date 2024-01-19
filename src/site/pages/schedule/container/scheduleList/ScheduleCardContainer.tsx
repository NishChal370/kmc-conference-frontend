import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import ScheduleCard from "../../components/scheduleList/ScheduleCard";
import { IScheduleContentDetailModel } from "@/admin/model/schedule/scheduleModel";
import { IParticipationAddModal } from "@/admin/model/participant/participantModel";
import AttendScheduleModal from "@/site/components/attendScheduleForm/AttendScheduleModal";

interface IScheduleCardContainer {
      schedule: IScheduleContentDetailModel;
}
function ScheduleCardContainer({ schedule }: IScheduleCardContainer) {
      const [participationForm, openParticipationForm, closeParticipationForm] =
            useExtraModal<IParticipationAddModal>();

      const openParticipationFormHandler = (data: IParticipationAddModal) => () => {
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
