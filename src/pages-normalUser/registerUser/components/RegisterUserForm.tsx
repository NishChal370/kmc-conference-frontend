import { BaseSyntheticEvent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import Input from "@/shared/input/Input";
import Button from "@/shared/button/Button";
import PasswordInput from "@/shared/input/PasswordInput";
import StaticOptionsDropdownInput from "@/shared/input/StaticOptionsDropdownInput";
import { IRegisterUserForm } from "@/model-normalUser/registerUser/registerUserModel";
import { REGEX } from "@/helper/regex";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";

interface IRegisterUserFormProps {
      registerUserForm: UseFormReturn<IRegisterUserForm>;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
}

function RegisterUserForm({
      registerUserForm: {
            register,
            getValues,
            control,
            formState: { errors },
      },
      formSubmitHandler,
}: IRegisterUserFormProps) {
      return (
            <form
                  className="flex flex-col gap-y-12 gap-x-4 w-full justify-center items-center
                        [&>section]:w-full
                  "
                  onSubmit={formSubmitHandler}
            >
                  <section
                        className="grid gap-y-10 gap-x-4
                              lg:grid-cols-3
                        "
                  >
                        <Input label="First Name" errorMessage={errors.firstName?.message}>
                              {register("firstName", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </Input>

                        <Input label="Middle Name" errorMessage={errors.middleName?.message}>
                              {register("middleName", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </Input>

                        <Input label="Last Name" errorMessage={errors.lastName?.message}>
                              {register("lastName", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </Input>
                  </section>

                  <section
                        className="grid gap-y-10 gap-x-4
                              lg:grid-cols-2
                        "
                  >
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
                                          data={[
                                                { value: "Male", option: "Male" },
                                                { value: "Female", option: "Female" },
                                                { value: "Others", option: "Others" },
                                          ]}
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

                        <Input type="date" label="Date of birth" errorMessage={errors.dateOfBirth?.message}>
                              {register("dateOfBirth", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </Input>
                  </section>

                  <section
                        className="grid gap-y-10 gap-x-4
                              lg:grid-cols-2
                        "
                  >
                        <Input type="email" label="Email" errorMessage={errors.emailAddress?.message}>
                              {register("emailAddress", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </Input>

                        <Input label="Phone Number" errorMessage={errors.phoneNumber?.message}>
                              {register("phoneNumber", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </Input>
                  </section>

                  <section
                        className="grid gap-y-10 gap-x-4
                              lg:grid-cols-2
                        "
                  >
                        <PasswordInput errorMessage={errors.password?.message}>
                              {register("password", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                                    pattern: {
                                          value: REGEX.PASSWORD,
                                          message: INPUT_ERROR_MESSAGE.invalidPassword,
                                    },
                              })}
                        </PasswordInput>

                        <PasswordInput
                              label="Confirm Password"
                              errorMessage={errors.confirmPassword?.message}
                        >
                              {register("confirmPassword", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                                    validate: (value) =>
                                          value === getValues("password") ||
                                          INPUT_ERROR_MESSAGE.passwordNotMatched,
                              })}
                        </PasswordInput>
                  </section>

                  <Button type="submit" title="Register" extraClassName="py-2" />
            </form>
      );
}

export default RegisterUserForm;
