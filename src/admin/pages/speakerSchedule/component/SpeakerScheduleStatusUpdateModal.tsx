import { Modal } from "@/shared/modal";
import Button from "@/shared/button/Button";
import StaticOptionsDropdownInput from "@/shared/input/StaticOptionsDropdownInput";
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";
import { SPEAKER_APPROVAL_STATUS_OPTION } from "../data/speakerApprovalStatusOption";
import { ISpeakerScheduleApprovalStatusChangeModal } from "@/admin/model/speakerSchedule/speakerScheduleModel";

interface ISpeakerScheduleStatusUpdateModal {
      value: SpeakerApprovalStatus;
      submitHandler: () => void;
      closeModalHandler: () => void;
      currentStatus: SpeakerApprovalStatus;
      onChangeHandler: (value: SpeakerApprovalStatus) => void;
      speakerName: ISpeakerScheduleApprovalStatusChangeModal["speakerName"];
}

function SpeakerScheduleStatusUpdateModal({
      value,
      currentStatus,
      speakerName,
      submitHandler,
      onChangeHandler,
      closeModalHandler,
}: ISpeakerScheduleStatusUpdateModal) {
      return (
            <Modal
                  title={`Update Speaker Session Application Status`}
                  size="w-full md:!w-[34rem]"
                  closeHandler={closeModalHandler}
            >
                  <div className="flex flex-col gap-8 text-sm tracking-widest">
                        <section
                              className="flex flex-col gap-3 [&>span]:flex [&>span]:gap-2
                              [&>span>h5]:min-w-[7rem] [&>span>h5]:font-semibold"
                        >
                              <span>
                                    <h5>Speaker Name: </h5>
                                    <p>{speakerName}</p>
                              </span>

                              <span>
                                    <h5>Current Status:</h5>
                                    <p>{SpeakerApprovalStatus[currentStatus]}</p>
                              </span>
                        </section>

                        <span className="flex flex-col gap-1.5">
                              <h5 className="text-md font-semibold">New Status</h5>
                              <StaticOptionsDropdownInput
                                    label=""
                                    variant="secondary"
                                    data={SPEAKER_APPROVAL_STATUS_OPTION}
                                    selected={{
                                          value: value,
                                          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                                          option: SPEAKER_APPROVAL_STATUS_OPTION.find(
                                                (data) => data.value === value
                                          )?.option!,
                                    }}
                                    onChangeHandler={function (data): void {
                                          onChangeHandler(+data.value);
                                    }}
                              />
                        </span>

                        <Button type="button" title="Save" onClickHandler={submitHandler} />
                  </div>
            </Modal>
      );
}

export default SpeakerScheduleStatusUpdateModal;
