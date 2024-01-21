import ScheduleCard from "../../components/scheduleList/ScheduleCard";
import AttendScheduleModal from "@/site/components/attendScheduleForm/AttendScheduleModal";
import BecomeSpeakerFormModal from "@/site/components/becomeSpeakerForm/BecomeSpeakerFormModal";
import UpdateAttendScheduleFormContainer from "@/site/components/updateAttendScheduleForm/container/UpdateAttendScheduleFormContainer";
import { useAppSelector } from "@/app/hooks";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import { Status } from "@/enum/commonEnum";
import { errorToastMessage } from "@/utils/alert";
import { verifyLoginState } from "@/protectedRoute/feature/verifyLoginSlice";
import { ISpeakerAddModal } from "@/admin/model/speaker/adminSpeakerModel";
import { IParticipationAddModal } from "@/admin/model/participant/participantModel";
import { IScheduleContentDetailModel } from "@/admin/model/schedule/scheduleContentModel";
import { IPreviouslyAppliedHistory } from "@/admin/model/appliedHistory/appliedHistoryModel";

interface IScheduleCardContainer {
      schedule: IScheduleContentDetailModel;
      hasAddedPreviously?: IPreviouslyAppliedHistory;
}
function ScheduleCardContainer({ schedule, hasAddedPreviously }: IScheduleCardContainer) {
      const [participationForm, openParticipationForm, closeParticipationForm] =
            useExtraModal<IParticipationAddModal>();

      const [speakerForm, openSpeakerForm, closeSpeakerForm] = useExtraModal<ISpeakerAddModal>();

      const { status: loggedInStatus } = useAppSelector(verifyLoginState);

      const openParticipationFormHandler = (data: IParticipationAddModal) => () => {
            if (loggedInStatus !== Status.SUCCEEDED) {
                  errorToastMessage("Please login to attend.");
                  return;
            }

            openParticipationForm(data);
      };

      const openSpeakerFormHandler = (data: ISpeakerAddModal) => () => {
            if (loggedInStatus !== Status.SUCCEEDED) {
                  errorToastMessage("Please login to become speaker.");
                  return;
            }

            openSpeakerForm(data);
      };

      return (
            <>
                  <ScheduleCard
                        schedule={schedule}
                        openSpeakerFormHandler={openSpeakerFormHandler}
                        openParticipationFormHandler={openParticipationFormHandler}
                  />

                  {!hasAddedPreviously?.participant &&
                        participationForm?.isOpen &&
                        participationForm.data && (
                              <AttendScheduleModal
                                    selectedSessionDetail={participationForm.data}
                                    closeParticipationForm={closeParticipationForm}
                              />
                        )}

                  {hasAddedPreviously?.participant && participationForm?.isOpen && participationForm.data && (
                        <UpdateAttendScheduleFormContainer
                              selectedSessionDetail={participationForm.data}
                              closeParticipationForm={closeParticipationForm}
                        />
                  )}

                  {speakerForm?.isOpen && speakerForm.data && (
                        <BecomeSpeakerFormModal
                              closeModalHandler={closeSpeakerForm}
                              selectedSession={speakerForm.data}
                        />
                  )}
            </>
      );
}

export default ScheduleCardContainer;
