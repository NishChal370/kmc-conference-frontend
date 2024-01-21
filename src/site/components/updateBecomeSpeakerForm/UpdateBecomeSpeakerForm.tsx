import { IParticipationAddModal } from "@/admin/model/participant/participantModel";
import Button from "@/shared/button/Button";
import { Modal } from "@/shared/modal";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";
import getTokenDetail from "@/utils/token/getTokenDetail";

interface IUpdateBecomeSpeakerForm {
      closeForm: () => void;
      confirmHandler: () => void;
      selectedSessionDetail: IParticipationAddModal;
}

function UpdateBecomeSpeakerForm({
      closeForm,
      confirmHandler,
      selectedSessionDetail,
}: IUpdateBecomeSpeakerForm) {
      return (
            <Modal
                  title="Speaker Application"
                  size="w-full lg:!max-w-[46rem] !gap-4"
                  closeHandler={closeForm}
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

                        <footer
                              className="flex flex-col gap-2 w-full mt-2
                                    sm:w-[80%] sm:flex-row sm:self-end
                              "
                        >
                              <Button
                                    type="button"
                                    variant="outlined"
                                    title="Cancel"
                                    onClickHandler={closeForm}
                              />

                              <Button type="button" title="Confirm" onClickHandler={confirmHandler} />
                        </footer>
                  </div>
            </Modal>
      );
}

export default UpdateBecomeSpeakerForm;
