import { Modal } from "@/shared/modal";
import Button from "@/shared/button/Button";
import getTokenDetail from "@/utils/token/getTokenDetail";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";
import { IParticipationAddModal } from "@/admin/model/participant/participantModel";

interface IUpdateAttendScheduleForm {
      confirmHandler: () => void;
      closeParticipationForm: () => void;
      selectedSessionDetail: IParticipationAddModal;
}

function UpdateAttendScheduleForm({
      confirmHandler,
      selectedSessionDetail,
      closeParticipationForm,
}: IUpdateAttendScheduleForm) {
      return (
            <Modal
                  title="Be the part of conference"
                  size="w-full lg:!max-w-[46rem] !gap-4"
                  closeHandler={closeParticipationForm}
            >
                  <div className="flex flex-col justify-center gap-10">
                        <section className="flex flex-col gap-0.5">
                              <h5 className="text-2xl font-bold tracking-wide text-default">Registration</h5>
                              <p className="text-sm">
                                    Logged in as&nbsp;
                                    {getTokenDetail.loggedInUserEmail()}
                              </p>
                        </section>

                        <section
                              className="flex flex-col gap-3 [&>span]:flex [&>span]:gap-2
                              [&>span>h5]:min-w-[7.5rem] [&>span>h5]:font-semibold"
                        >
                              <span>
                                    <h5>Session Name: </h5>
                                    <p>{selectedSessionDetail.sessionChoice.title}</p>
                              </span>

                              <span>
                                    <h5>Date:</h5>
                                    <p>{changeDateFormat(selectedSessionDetail.dayDate, "long")}</p>
                              </span>
                              <span>
                                    <h5>Time:</h5>
                                    <p>
                                          {selectedSessionDetail.startTime +
                                                " - " +
                                                selectedSessionDetail.endTime}
                                    </p>
                              </span>

                              <span>
                                    <h5>Location:</h5>
                                    <p>
                                          {selectedSessionDetail.dayLocation +
                                                "; " +
                                                selectedSessionDetail.sessionLocation}
                                    </p>
                              </span>
                        </section>

                        <footer className="flex gap-2 w-[80%] self-end mt-2">
                              <Button
                                    type="button"
                                    variant="outlined"
                                    title="Cancel"
                                    onClickHandler={closeParticipationForm}
                              />

                              <Button type="button" title="Confirm" onClickHandler={confirmHandler} />
                        </footer>
                  </div>
            </Modal>
      );
}

export default UpdateAttendScheduleForm;
