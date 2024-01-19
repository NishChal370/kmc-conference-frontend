import { Modal } from "@/shared/modal";
import BecomeSpeakerForm from "./form/BecomeSpeakerForm";

function BecomeSpeakerFormModal() {
      return (
            <Modal
                  title="Speaker Application"
                  size="w-full lg:!max-w-[66rem] !gap-2"
                  closeHandler={() => {}}
                  toShow={true}
            >
                  <>
                        {/* <header className="flex flex-col gap-0.5 text-center border-b border-mute-1 pb-1 text-sm text-gray-900">
                              <h5 className="text-xl font-medium text-default line-clamp-1">
                                    {"selectedSessionDetail.sessionChoice.title"}
                              </h5>
                              <p>
                                    {`changeDateFormat(selectedSessionDetail.dayDate, "long")`} ·{" "}
                                    {"selectedSessionDetail.startTime"} - {"selectedSessionDetail.endTime"}
                              </p>
                              <p>
                                    {"selectedSessionDetail.dayLocation"},{" "}
                                    {"selectedSessionDetail.sessionLocation"}
                              </p>
                        </header> */}

                        <BecomeSpeakerForm />
                  </>
            </Modal>
      );
}

export default BecomeSpeakerFormModal;
