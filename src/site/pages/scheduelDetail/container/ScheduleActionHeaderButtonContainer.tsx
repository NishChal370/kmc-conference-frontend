import { useState } from "react";
import AttendScheduleModal from "@/site/components/attendScheduleForm/AttendScheduleModal";
import BecomeSpeakerFormModal from "@/site/components/becomeSpeakerForm/BecomeSpeakerFormModal";
import ScheduleAttendOptionModal from "../components/scheduleActionHeader/ScheduleAttendOptionModal";
import BecomeCallForPaperModal from "@/site/components/becomeCallForPaperForm/BecomeCallForPaperModal";
import ScheduleActionHeaderButton from "../components/scheduleActionHeader/ScheduleActionHeaderButton";
import UpdateBecomeSpeakerModal from "@/site/components/updateBecomeSpeakerForm/UpdateBecomeSpeakerModal";
import UpdateBecomeCallForPaperModal from "@/site/components/updateBecomeCallForPaperForm/UpdateBecomeCallForPaperModal";
import UpdateAttendScheduleFormContainer from "@/site/components/updateAttendScheduleForm/container/UpdateAttendScheduleFormContainer";
import { scheduleContentBriefDetailSliceState } from "@/admin/pages/schedule/feature/scheduleSlice";
import { Status, UserType } from "@/enum/commonEnum";
import { errorToastMessage } from "@/utils/alert";
import { useAppSelector } from "@/app/hooks";
import useExtraModal from "@/admin/hooks/modal/useExtraModal";
import { verifyLoginState } from "@/protectedRoute/feature/verifyLoginSlice";
import { IParticipationAddModal } from "@/admin/model/participant/attendScheduleModel";
import { ISpeakerAddModal } from "@/admin/model/speaker/becomeSpeakerModel";
import { ICallForPaperAddModal } from "@/admin/model/callForPaper/callForPaperApplyModel";

function ScheduleActionHeaderButtonContainer() {
      const [participationForm, openParticipationForm, closeParticipationForm] =
            useExtraModal<IParticipationAddModal>();

      const [speakerForm, openSpeakerForm, closeSpeakerForm] = useExtraModal<ISpeakerAddModal>();

      const [callForPaperForm, openCallForPaperForm, closeCallForPaperForm] =
            useExtraModal<ICallForPaperAddModal>();

      const { status: loggedInStatus } = useAppSelector(verifyLoginState);

      const { data } = useAppSelector(scheduleContentBriefDetailSliceState);

      const [openAttendOptionModal, setOpenAttendOptionModal] = useState<boolean>(false);

      const openAttendOptionModalHandler = () => {
            setOpenAttendOptionModal(true);
      };

      const closeAttendOptionModalHandler = () => {
            setOpenAttendOptionModal(false);
      };

      const attendButtonHandler = (userType: UserType) => () => {
            if (!data) return;

            if (loggedInStatus !== Status.SUCCEEDED) {
                  errorToastMessage("Please login to attend.");

                  return;
            }

            closeAttendOptionModalHandler();

            switch (userType) {
                  case UserType.PARTICIPANT:
                        openParticipationForm({
                              sessionChoice: {
                                    title: data.sessionContent.title,
                                    sessionId: data.sessionContent.id,
                              },
                              dayDate: data.sessionContent.date,
                              startTime: data.sessionContent.startTime,
                              endTime: data.sessionContent.endTime,
                              dayLocation: data.sessionContent.venueInfo.location,
                              sessionLocation: data.sessionContent.location,
                        });
                        break;

                  case UserType.CALL_FOR_PAPER:
                        openCallForPaperForm({
                              sessionChoice: {
                                    title: data.sessionContent.title,
                                    sessionId: data.sessionContent.id,
                              },
                              dayDate: data.sessionContent.date,
                              startTime: data.sessionContent.startTime,
                              endTime: data.sessionContent.endTime,
                              dayLocation: data.sessionContent.venueInfo.location,
                              sessionLocation: data.sessionContent.location,
                        });
                        break;

                  case UserType.SPEAKER:
                        openSpeakerForm({
                              sessionChoice: {
                                    title: data.sessionContent.title,
                                    sessionId: data.sessionContent.id,
                              },
                              dayDate: data.sessionContent.date,
                              startTime: data.sessionContent.startTime,
                              endTime: data.sessionContent.endTime,
                              dayLocation: data.sessionContent.venueInfo.location,
                              sessionLocation: data.sessionContent.location,
                        });
                        break;
                  default:
                        break;
            }
      };

      return (
            <>
                  <ScheduleActionHeaderButton
                        attendButtonHandler={openAttendOptionModalHandler}
                        allowedToAttend={
                              !data?.sessionContent.isUserParticipant ||
                              !data?.sessionContent.userCallApproval?.toString() ||
                              !data?.sessionContent.userSpeakerApproval?.toString()
                        }
                  />

                  {openAttendOptionModal && (
                        <ScheduleAttendOptionModal
                              isParticipant={data?.sessionContent.isUserParticipant}
                              isSpeaker={!!data?.sessionContent.userSpeakerApproval?.toString()}
                              isCallForPaper={!!data?.sessionContent.userCallApproval?.toString()}
                              selectButtonHandler={attendButtonHandler}
                              close={closeAttendOptionModalHandler}
                        />
                  )}

                  {!data?.hasAddedPreviously?.participant &&
                        participationForm?.isOpen &&
                        participationForm.data && (
                              <AttendScheduleModal
                                    selectedSessionDetail={participationForm.data}
                                    closeParticipationForm={closeParticipationForm}
                              />
                        )}

                  {data?.hasAddedPreviously?.participant &&
                        participationForm?.isOpen &&
                        participationForm.data && (
                              <UpdateAttendScheduleFormContainer
                                    selectedSessionDetail={participationForm.data}
                                    closeParticipationForm={closeParticipationForm}
                              />
                        )}

                  {!data?.hasAddedPreviously?.speaker && speakerForm?.isOpen && speakerForm.data && (
                        <BecomeSpeakerFormModal
                              selectedSession={speakerForm.data}
                              closeModalHandler={closeSpeakerForm}
                        />
                  )}

                  {data?.hasAddedPreviously?.speaker && speakerForm?.isOpen && speakerForm.data && (
                        <UpdateBecomeSpeakerModal
                              closeModal={closeSpeakerForm}
                              selectedSession={speakerForm.data}
                        />
                  )}

                  {!data?.hasAddedPreviously?.callForPaper &&
                        callForPaperForm?.isOpen &&
                        callForPaperForm.data && (
                              <BecomeCallForPaperModal
                                    closeModal={closeCallForPaperForm}
                                    selectedSessionDetail={callForPaperForm.data}
                              />
                        )}

                  {data?.hasAddedPreviously?.callForPaper &&
                        callForPaperForm?.isOpen &&
                        callForPaperForm.data && (
                              <UpdateBecomeCallForPaperModal
                                    closeModal={closeCallForPaperForm}
                                    selectedSession={callForPaperForm.data}
                              />
                        )}
            </>
      );
}

export default ScheduleActionHeaderButtonContainer;
