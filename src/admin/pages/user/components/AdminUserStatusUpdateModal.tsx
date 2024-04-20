import { IAdminUserStatusChangeModal } from "@/admin/model/user/userModel";
import { UserStatus } from "@/enum/user/userEnum";
import StaticOptionsDropdownInput from "@/shared/input/StaticOptionsDropdownInput";
import { Modal } from "@/shared/modal";
import { USER_STATUS_OPTIONS } from "../data/userStatusOptionList";
import Button from "@/shared/button/Button";
import replaceUnderscoreWithSpace from "@/utils/stringFormat/replaceUnderscoreWithSpace";

interface IAdminUserStatusUpdateModal {
      value: UserStatus;
      submitHandler: () => void;
      closeModalHandler: () => void;
      currentStatus: UserStatus;
      onChangeHandler: (value: UserStatus) => void;
      userName: IAdminUserStatusChangeModal["fullName"];
}

function AdminUserStatusUpdateModal({
      value,
      submitHandler,
      closeModalHandler,
      currentStatus,
      onChangeHandler,
      userName,
}: IAdminUserStatusUpdateModal) {
      return (
            <Modal title="Update User Status" size="w-full md:!w-[34rem]" closeHandler={closeModalHandler}>
                  <div className="flex flex-col gap-8 text-sm tracking-widest">
                        <section
                              className="flex flex-col gap-3 [&>span]:flex [&>span]:gap-2
                                    [&>span>h5]:min-w-[7rem] [&>span>h5]:font-semibold
                              "
                        >
                              <span>
                                    <h5>Full Name: </h5>
                                    <p>{userName}</p>
                              </span>

                              <span>
                                    <h5>Current Status:</h5>
                                    <p>{replaceUnderscoreWithSpace(UserStatus[currentStatus])}</p>
                              </span>
                        </section>

                        <span className="flex flex-col gap-1.5">
                              <h5 className="text-md font-semibold ">New Status</h5>
                              <section className="flex flex-col w-full h-full">
                                    <StaticOptionsDropdownInput
                                          label=""
                                          variant="secondary"
                                          data={USER_STATUS_OPTIONS}
                                          disable={currentStatus === UserStatus.EMAIL_NOT_CONFIRMED}
                                          selected={{
                                                value: value,
                                                // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                                                option: USER_STATUS_OPTIONS.find(
                                                      (data) => data.value === value
                                                )?.option!,
                                          }}
                                          onChangeHandler={function (data): void {
                                                onChangeHandler(+data.value);
                                          }}
                                    />
                                    {currentStatus === UserStatus.EMAIL_NOT_CONFIRMED ? (
                                          <p className=" text-blue-500">Email must be confirmed</p>
                                    ) : undefined}
                              </section>
                        </span>

                        <Button
                              disable={currentStatus === UserStatus.EMAIL_NOT_CONFIRMED}
                              type="button"
                              title="Save"
                              onClickHandler={submitHandler}
                        />
                  </div>
            </Modal>
      );
}

export default AdminUserStatusUpdateModal;
