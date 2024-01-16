import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import PasswordInput from "@/shared/input/PasswordInput";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { REGEX } from "@/helper/regex";
import { IChangePasswordForm } from "@/admin/model/changePassword/changePasswordModel";
import Button from "@/shared/button/Button";

interface IChangePassword {
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
      changePasswordForm: UseFormReturn<IChangePasswordForm>;
}

function ChangePassword({
      changePasswordForm: {
            register,
            getValues,
            formState: { errors },
      },
      formSubmitHandler,
}: IChangePassword) {
      return (
            <form onSubmit={formSubmitHandler} className="flex flex-col gap-8 w-full h-full [&>*]:text-sm">
                  <PasswordInput label="Old Password" errorMessage={errors.oldPassword?.message}>
                        {register("oldPassword", {
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

                  <PasswordInput label="New Password" errorMessage={errors.newPassword?.message}>
                        {register("newPassword", {
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

                  <PasswordInput label="Confirm Password" errorMessage={errors.confirmPassword?.message}>
                        {register("confirmPassword", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                              validate: (value) =>
                                    value === getValues("newPassword") ||
                                    INPUT_ERROR_MESSAGE.passwordNotMatched,
                        })}
                  </PasswordInput>

                  <Button type="submit" title="Change Password" extraClassName="py-2" />
            </form>
      );
}

export default ChangePassword;
