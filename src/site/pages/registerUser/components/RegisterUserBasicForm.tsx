import { BaseSyntheticEvent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import Input from "@/shared/input/Input";
import Button from "@/shared/button/Button";
import PhoneInput from "@/shared/input/PhoneInput";
import StaticOptionsDropdownInput from "@/shared/input/StaticOptionsDropdownInput";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { IRegisterUserBasicForm } from "@site/model/registerUser/registerUserModel";
import { REGEX } from "@/helper/regex";
import { GENDER_OPTIONS } from "../data/genderList";
import validateDateOfBirth from "@/utils/validation/validateDateOfBirth";

interface IRegisterUserBasicFormProps {
      registerUserBasicForm: UseFormReturn<IRegisterUserBasicForm>;
      basicFormSubmitHandler: (e?: BaseSyntheticEvent) => void;
}

function RegisterUserBasicForm({
      registerUserBasicForm: {
            register,
            control,
            formState: { errors },
      },
      basicFormSubmitHandler,
}: IRegisterUserBasicFormProps) {
      return (
            <form onSubmit={basicFormSubmitHandler}>
                  <section
                        className="grid gap-y-10 gap-x-4 w-full
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
                              {register("middleName")}
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
                        className="grid gap-y-10 gap-x-4 w-full
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
                                    validate: (value: string) =>
                                          !validateDateOfBirth(value) ? INPUT_ERROR_MESSAGE.invalidDob : true,
                              })}
                        </Input>
                  </section>

                  <section
                        className="grid gap-y-10 gap-x-4 w-full
                              lg:grid-cols-2
                        "
                  >
                        <Input type="email" label="Email" errorMessage={errors.emailAddress?.message}>
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
                        </Input>

                        <PhoneInput control={control} isRequired name="phoneNumber" />

                        <span className="flex items-center justify-center w-full lg:col-span-2">
                              <Button
                                    variant="outlined"
                                    type="submit"
                                    title="Next"
                                    extraClassName="!w-full"
                              />
                        </span>
                  </section>
            </form>
      );
}

export default RegisterUserBasicForm;
