import { IContactUsUpdateForm } from "@/admin/model/contactUs/contactUsModel";
import { ContactReplyStatus } from "@/enum/contactUs/contactUsEnum";
import Button from "@/shared/button/Button";
import StaticOptionsDropdownInput from "@/shared/input/StaticOptionsDropdownInput";
import { Modal } from "@/shared/modal";
import { CONTACT_US_REPLY_STATUS_OPTION } from "../data/contactUsReplyStatusOption";

interface IAdminContactUsEditStatusModal {
      value: ContactReplyStatus;
      submitHandler: () => void;
      onChangeHandler: (status: ContactReplyStatus) => void;
      closeModalHandler: () => void;
      contactUsStatusDetail: IContactUsUpdateForm;
}
function AdminContactUsEditStatusModal({
      value,
      submitHandler,
      onChangeHandler,
      closeModalHandler,
      contactUsStatusDetail,
}: IAdminContactUsEditStatusModal) {
      return (
            <Modal
                  title={`Update Contact Us Approval Status`}
                  size="w-full md:!w-[34rem]"
                  closeHandler={closeModalHandler}
            >
                  <div className="flex flex-col gap-8 text-sm tracking-widest">
                        <section
                              className="flex flex-col gap-3 [&>span]:flex [&>span]:gap-2
                  [&>span>h5]:min-w-[7rem] [&>span>h5]:font-semibold"
                        >
                              <span>
                                    <h5>Full Name: </h5>
                                    <p>{contactUsStatusDetail.fullName}</p>
                              </span>

                              <span>
                                    <h5>Email: </h5>
                                    <p>{contactUsStatusDetail.email}</p>
                              </span>

                              <span>
                                    <h5>Current Reply Status:</h5>
                                    <p>{ContactReplyStatus[contactUsStatusDetail.status]}</p>
                              </span>
                        </section>

                        <span className="flex flex-col gap-1.5">
                              <h5 className="text-md font-semibold">New Reply Status</h5>

                              <StaticOptionsDropdownInput
                                    label=""
                                    variant="secondary"
                                    data={CONTACT_US_REPLY_STATUS_OPTION}
                                    selected={{
                                          value: value,
                                          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                                          option: CONTACT_US_REPLY_STATUS_OPTION.find(
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

export default AdminContactUsEditStatusModal;
