import { BaseSyntheticEvent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import SecondaryInput from "@/shared/input/SecondaryInput";
import PhoneInput from "@/shared/input/PhoneInput";
import StaticOptionsDropdownInput from "@/shared/input/StaticOptionsDropdownInput";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { Modal, ModalActionButtons, ModalFooter, ModalSectionHeader } from "@/shared/modal";
import { IAdminProfileEditForm } from "@/admin/model/profile/adminProfileModel";
import { GENDER_OPTIONS } from "@/site/pages/registerUser/data/genderList";
import { REGEX } from "@/helper/regex";

interface IProfileEditModal {
      closeModalHandler: () => void;
      formResetHandler: () => void;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
      adminProfileForm: UseFormReturn<IAdminProfileEditForm>;
}
function ProfileEditModal({
      formResetHandler,
      formSubmitHandler,
      closeModalHandler,
      adminProfileForm: {
            register,
            control,
            formState: { errors },
      },
}: IProfileEditModal) {
      return (
            <Modal
                  title={`Edit Profile Detail`}
                  size="w-full md:!w-[70%] md:!max-w-[60rem]"
                  closeHandler={closeModalHandler}
            >
                  <form
                        className="flex flex-col gap-12 w-full
                              [&>section]:flex [&>section]:flex-col  [&>section]:gap-10
                              [&>section>span]:grid [&>section>span]:sm:grid-cols-2 [&>section>span]:gap-x-6  [&>section>span]:gap-y-6
                        "
                        onSubmit={formSubmitHandler}
                  >
                        <section>
                              <ModalSectionHeader title="Professional Information" />

                              <span>
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

                                    <SecondaryInput
                                          isRequired
                                          type="date"
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
                                          render={({ field }) => (
                                                <StaticOptionsDropdownInput
                                                      label="Gender"
                                                      data={GENDER_OPTIONS}
                                                      variant="secondary"
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
                                                      errorMessage={errors.gender?.message}
                                                />
                                          )}
                                    />

                                    <SecondaryInput
                                          isRequired
                                          label="Email"
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

                                    <PhoneInput variant="secondary" control={control} name="phoneNumber" />
                              </span>
                        </section>

                        <section>
                              <ModalSectionHeader title="Professional Information" />

                              <span>
                                    <SecondaryInput
                                          isRequired
                                          label="Title"
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

                                    <SecondaryInput
                                          isRequired
                                          label="Job Title"
                                          errorMessage={errors.jobTitle?.message}
                                    >
                                          {register("jobTitle", {
                                                required: {
                                                      value: true,
                                                      message: INPUT_ERROR_MESSAGE.empty,
                                                },
                                          })}
                                    </SecondaryInput>
                              </span>
                        </section>

                        <ModalFooter>
                              <ModalActionButtons resetHandler={formResetHandler} />
                        </ModalFooter>
                  </form>
            </Modal>
      );
}

export default ProfileEditModal;
