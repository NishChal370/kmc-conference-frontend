import { Modal } from "@/shared/modal";
import Button from "@/shared/button/Button";
import StaticOptionsDropdownInput from "@/shared/input/StaticOptionsDropdownInput";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";
import { IAdminCallForPaperStatusChangeModal } from "@/admin/model/callForPaper/callForPaperModel";
import { CALL_FOR_PAPER_APPROVAL_STATUS_OPTION } from "../data/callForPaperApprovalStatusOption";

interface IAdminCallForPaperStatusUpdateModal {
      value: CallForPaperApprovalStatus;
      submitHandler: () => void;
      closeModalHandler: () => void;
      currentStatus: CallForPaperApprovalStatus;
      onChangeHandler: (value: CallForPaperApprovalStatus) => void;
      callForPaperName: IAdminCallForPaperStatusChangeModal["callForPaperName"];
}

function AdminCallForPaperStatusUpdateModal({
      value,
      currentStatus,
      callForPaperName,
      submitHandler,
      onChangeHandler,
      closeModalHandler,
}: IAdminCallForPaperStatusUpdateModal) {
      return (
            <Modal
                  title="Update Call For Paper Application Status"
                  size="w-full md:!w-[34rem]"
                  closeHandler={closeModalHandler}
            >
                  <div className="flex flex-col gap-8 text-sm tracking-widest">
                        <section
                              className="flex flex-col gap-3 [&>span]:flex [&>span]:gap-2
                              [&>span>h5]:min-w-[7rem] [&>span>h5]:font-semibold"
                        >
                              <span>
                                    <h5>Name: </h5>
                                    <p>{callForPaperName}</p>
                              </span>

                              <span>
                                    <h5>Current Status:</h5>
                                    <p>{CallForPaperApprovalStatus[currentStatus]}</p>
                              </span>
                        </section>

                        <span className="flex flex-col gap-1.5">
                              <h5 className="text-md font-semibold">New Status</h5>
                              <StaticOptionsDropdownInput
                                    label=""
                                    variant="secondary"
                                    data={CALL_FOR_PAPER_APPROVAL_STATUS_OPTION}
                                    selected={{
                                          value: value,
                                          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                                          option: CALL_FOR_PAPER_APPROVAL_STATUS_OPTION.find(
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

export default AdminCallForPaperStatusUpdateModal;
