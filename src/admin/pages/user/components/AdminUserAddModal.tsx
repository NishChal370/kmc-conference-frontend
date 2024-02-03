import { BaseSyntheticEvent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { IAdminUserAddForm } from "@/admin/model/user/userModel";
import SecondaryInput from "@/shared/input/SecondaryInput";
import StaticOptionsDropdownInput from "@/shared/input/StaticOptionsDropdownInput";
import { Modal, ModalActionButtons, ModalFooter, ModalSectionHeader } from "@/shared/modal";
import { GENDER_OPTIONS } from "@/site/pages/registerUser/data/genderList";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { REGEX } from "@/helper/regex";
import PhoneInput from "@/shared/input/PhoneInput";
import { USER_ROLE_OPTIONS } from "@/admin/pages/user/data/userRoleOptionList";

interface IAdminUserAddModal {
      modalType?: "Add" | "Edit";
      closeModalHandler: () => void;
      formResetHandler: () => void;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
      userForm: UseFormReturn<IAdminUserAddForm>;
}
function AdminUserAddModal({
      modalType = "Add",
      closeModalHandler,
      formResetHandler,
      formSubmitHandler,
      userForm: {
            control,
            register,
            formState: { errors },
      },
}: IAdminUserAddModal) {
      return (
            <Modal
                  title={`${modalType} User Detail`}
                  size="w-full lg:!max-w-[76rem]"
                  closeHandler={closeModalHandler}
            >
                  <form
                        onSubmit={formSubmitHandler}
                        className="flex flex-col gap-12 w-full
                              [&>section]:flex [&>section]:flex-col  [&>section]:gap-10
                              [&>section>span]:grid [&>section>span]:sm:grid-cols-2 [&>section>span]:gap-x-10  [&>section>span]:gap-y-7
                        "
                  >
                        <section>
                              <ModalSectionHeader title="Personal Information" />

                              <span>
                                    <span className="sm:col-span-2 grid grid-cols-3 gap-x-4 w-full">
                                          <SecondaryInput
                                                isRequired
                                                label="First Name"
                                                errorMessage={errors.firstName?.message}
                                          >
                                                {register("firstName", {
                                                      required: {
                                                            value: true,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                })}
                                          </SecondaryInput>

                                          <SecondaryInput
                                                label="Middle Name"
                                                errorMessage={errors.middleName?.message}
                                          >
                                                {register("middleName")}
                                          </SecondaryInput>

                                          <SecondaryInput
                                                isRequired
                                                label="Last Name"
                                                errorMessage={errors.lastName?.message}
                                          >
                                                {register("lastName", {
                                                      required: {
                                                            value: true,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                })}
                                          </SecondaryInput>
                                    </span>

                                    <SecondaryInput
                                          type="date"
                                          isRequired
                                          label="Date Of Birth"
                                          errorMessage={errors.dateOfBirth?.message}
                                    >
                                          {register("dateOfBirth", {
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                          })}
                                    </SecondaryInput>

                                    <Controller
                                          name="gender"
                                          control={control}
                                          rules={{
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                          }}
                                          render={({ field, fieldState }) => (
                                                <StaticOptionsDropdownInput
                                                      label="Gender"
                                                      isRequired
                                                      variant="secondary"
                                                      data={GENDER_OPTIONS}
                                                      selected={
                                                            field.value
                                                                  ? {
                                                                          value: field.value,
                                                                          option: field.value,
                                                                    }
                                                                  : undefined
                                                      }
                                                      onChangeHandler={function (data): void {
                                                            field.onChange(data.value);
                                                      }}
                                                      errorMessage={fieldState.error?.message}
                                                />
                                          )}
                                    />
                                    <SecondaryInput
                                          label="Email"
                                          isRequired
                                          errorMessage={errors.emailAddress?.message}
                                    >
                                          {register("emailAddress", {
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                                pattern: {
                                                      value: REGEX.EMAIL,
                                                      message: INPUT_ERROR_MESSAGE.invalidEmail,
                                                },
                                          })}
                                    </SecondaryInput>

                                    <PhoneInput
                                          variant="secondary"
                                          label="Phone Number"
                                          name="phoneNumber"
                                          control={control}
                                    />
                              </span>
                        </section>

                        <section>
                              <ModalSectionHeader title="Professional Information" />

                              <span>
                                    <SecondaryInput
                                          label="Title"
                                          isRequired
                                          errorMessage={errors.title?.message}
                                    >
                                          {register("title", {
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                          })}
                                    </SecondaryInput>

                                    <SecondaryInput
                                          label="Job Title"
                                          isRequired
                                          errorMessage={errors.jobTitle?.message}
                                    >
                                          {register("jobTitle", {
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                          })}
                                    </SecondaryInput>

                                    <SecondaryInput
                                          isRequired
                                          label="Affiliation"
                                          errorMessage={errors.affiliation?.message}
                                    >
                                          {register("affiliation", {
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                          })}
                                    </SecondaryInput>
                              </span>
                        </section>

                        <section>
                              <ModalSectionHeader title="System Information" />

                              <span>
                                    <Controller
                                          name="role"
                                          control={control}
                                          rules={{
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                          }}
                                          render={({ field, fieldState }) => (
                                                <StaticOptionsDropdownInput
                                                      label="User Role"
                                                      isRequired
                                                      variant="secondary"
                                                      data={USER_ROLE_OPTIONS}
                                                      selected={
                                                            field.value
                                                                  ? {
                                                                          value: field.value,
                                                                          option: field.value,
                                                                    }
                                                                  : undefined
                                                      }
                                                      onChangeHandler={function (data): void {
                                                            field.onChange(data.value);
                                                      }}
                                                      errorMessage={fieldState.error?.message}
                                                />
                                          )}
                                    />
                              </span>
                        </section>
                        <ModalFooter>
                              <ModalActionButtons resetHandler={formResetHandler} />
                        </ModalFooter>
                  </form>
            </Modal>
      );
}

export default AdminUserAddModal;
