import ScheduleCard from "../../components/scheduleList/ScheduleCard";
import AttendScheduleModal from "@/site/components/attendScheduleForm/AttendScheduleModal";
import BecomeSpeakerFormModal from "@/site/components/becomeSpeakerForm/BecomeSpeakerFormModal";
import BecomeCallForPaperModal from "@/site/components/becomeCallForPaperForm/BecomeCallForPaperModal";
import UpdateBecomeSpeakerModal from "@/site/components/updateBecomeSpeakerForm/UpdateBecomeSpeakerModal";
import UpdateAttendScheduleFormContainer from "@/site/components/updateAttendScheduleForm/container/UpdateAttendScheduleFormContainer";
import UpdateBecomeCallForPaperFormContainer from "@/site/components/updateBecomeCallForPaperForm/container/UpdateBecomeCallForPaperFormContainer";
import { useAppSelector } from "@/app/hooks";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import { Status } from "@/enum/commonEnum";
import { errorToastMessage } from "@/utils/alert";
import { verifyLoginState } from "@/protectedRoute/feature/verifyLoginSlice";
import { ISpeakerAddModal } from "@/admin/model/speaker/becomeSpeakerModel";
import { IParticipationAddModal } from "@/admin/model/participant/attendScheduleModel";
import { IScheduleContentDetailModel } from "@/admin/model/schedule/scheduleContentModel";
import { ICallForPaperAddModal } from "@/admin/model/callForPaper/callForPaperApplyModel";
import { IPreviouslyAppliedHistory } from "@/admin/model/appliedHistory/appliedHistoryModel";

interface IScheduleCardContainer {
      schedule: IScheduleContentDetailModel;
      hasAddedPreviously?: IPreviouslyAppliedHistory;
}
function ScheduleCardContainer({ schedule, hasAddedPreviously }: IScheduleCardContainer) {
      const [participationForm, openParticipationForm, closeParticipationForm] =
            useExtraModal<IParticipationAddModal>();

      const [speakerForm, openSpeakerForm, closeSpeakerForm] = useExtraModal<ISpeakerAddModal>();

      const [callForPaperForm, openCallForPaperForm, closeCallForPaperForm] =
            useExtraModal<ICallForPaperAddModal>();

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

      const openCallForPaperFormHandler = (data: ICallForPaperAddModal) => () => {
            if (loggedInStatus !== Status.SUCCEEDED) {
                  errorToastMessage("Please login to request proposal.");
                  return;
            }

            openCallForPaperForm(data);
      };

      return (
            <>
                  <ScheduleCard
                        schedule={schedule}
                        openSpeakerFormHandler={openSpeakerFormHandler}
                        openCallForPaperFormHandler={openCallForPaperFormHandler}
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

                  {!hasAddedPreviously?.speaker && speakerForm?.isOpen && speakerForm.data && (
                        <BecomeSpeakerFormModal
                              selectedSession={speakerForm.data}
                              closeModalHandler={closeSpeakerForm}
                        />
                  )}

                  {hasAddedPreviously?.speaker && speakerForm?.isOpen && speakerForm.data && (
                        <UpdateBecomeSpeakerModal
                              closeModal={closeSpeakerForm}
                              selectedSession={speakerForm.data}
                        />
                  )}

                  {!hasAddedPreviously?.callForPaper && callForPaperForm?.isOpen && callForPaperForm.data && (
                        <BecomeCallForPaperModal
                              closeModal={closeCallForPaperForm}
                              selectedSessionDetail={callForPaperForm.data}
                        />
                  )}

                  {hasAddedPreviously?.callForPaper && callForPaperForm?.isOpen && callForPaperForm.data && (
                        <UpdateBecomeCallForPaperFormContainer
                              closeModal={closeCallForPaperForm}
                              selectedSessionDetail={callForPaperForm.data}
                        />
                  )}
            </>
      );
}

export default ScheduleCardContainer;
