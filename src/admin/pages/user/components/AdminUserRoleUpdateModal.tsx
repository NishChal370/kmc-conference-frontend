import { Modal } from "@/shared/modal";
import Button from "@/shared/button/Button";
import StaticOptionsDropdownInput from "@/shared/input/StaticOptionsDropdownInput";
import { UserRole } from "@/enum/commonEnum";
import { IAdminUserRoleChangeModal } from "@/admin/model/user/userModel";
import { USER_ROLE_OPTIONS } from "@/shared/input/data/userRoleOptionList";

interface IAdminUserRoleUpdateModal {
      value: UserRole;
      submitHandler: () => void;
      closeModalHandler: () => void;
      currentRole: UserRole;
      onChangeHandler: (value: UserRole) => void;
      userName: IAdminUserRoleChangeModal["fullName"];
}

function AdminUserRoleUpdateModal({
      value,
      currentRole,
      userName,
      submitHandler,
      onChangeHandler,
      closeModalHandler,
}: IAdminUserRoleUpdateModal) {
      return (
            <Modal title="Update User Role" size="w-full md:!w-[34rem]" closeHandler={closeModalHandler}>
                  <div className="flex flex-col gap-8 text-sm tracking-widest">
                        <section
                              className="flex flex-col gap-3 [&>span]:flex [&>span]:gap-2
                              [&>span>h5]:min-w-[7rem] [&>span>h5]:font-semibold"
                        >
                              <span>
                                    <h5>Full Name: </h5>
                                    <p>{userName}</p>
                              </span>

                              <span>
                                    <h5>Current Role:</h5>
                                    <p>{currentRole}</p>
                              </span>
                        </section>

                        <span className="flex flex-col gap-1.5">
                              <h5 className="text-md font-semibold">New Role</h5>
                              <StaticOptionsDropdownInput
                                    label=""
                                    variant="secondary"
                                    data={USER_ROLE_OPTIONS}
                                    selected={{
                                          value: value,
                                          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                                          option: USER_ROLE_OPTIONS.find((data) => data.value === value)
                                                ?.option!,
                                    }}
                                    onChangeHandler={function (data): void {
                                          onChangeHandler(data.value as unknown as UserRole);
                                    }}
                              />
                        </span>

                        <Button type="button" title="Save" onClickHandler={submitHandler} />
                  </div>
            </Modal>
      );
}

export default AdminUserRoleUpdateModal;
