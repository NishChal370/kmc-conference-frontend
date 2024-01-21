import { Modal } from "@/shared/modal";
import AttendScheduleFormContainer from "./container/AttendScheduleFormContainer";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";
import { IParticipationAddModal } from "@/admin/model/participant/participantModel";

interface IAttendScheduleModal {
      closeParticipationForm: () => void;
      selectedSessionDetail: IParticipationAddModal;
}
function AttendScheduleModal({ selectedSessionDetail, closeParticipationForm }: IAttendScheduleModal) {
      return (
            <Modal
                  title="Be Part the of Conference"
                  size="w-full lg:!max-w-[46rem] !gap-2"
                  closeHandler={closeParticipationForm}
            >
                  <>
                        <header className="flex flex-col gap-0.5 text-center border-b border-mute-1 pb-1 text-sm text-gray-900">
                              <h5 className="text-xl font-medium text-default line-clamp-1">
                                    {selectedSessionDetail.sessionChoice.title}
                              </h5>
                              <p>
                                    {changeDateFormat(selectedSessionDetail.dayDate, "long")} ·{" "}
                                    {selectedSessionDetail.startTime} - {selectedSessionDetail.endTime}
                              </p>
                              <p>
                                    {selectedSessionDetail.dayLocation},{" "}
                                    {selectedSessionDetail.sessionLocation}
                              </p>
                        </header>

                        <AttendScheduleFormContainer
                              closeModal={closeParticipationForm}
                              selectedSessionId={selectedSessionDetail.sessionChoice.sessionId}
                        />
                  </>
            </Modal>
      );
}

export default AttendScheduleModal;
