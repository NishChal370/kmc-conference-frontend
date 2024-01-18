import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { REGEX } from "@/helper/regex";
import Button from "@/shared/button/Button";
import PasswordInput from "@/shared/input/PasswordInput";
import LoadingAnimation from "@/shared/loading/LoadingAnimation";
import { IResetPasswordForm } from "@/site/model/resetPassword/resetPasswordModel";

interface IResetPasswordFrom {
      isLoading: boolean;
      form: UseFormReturn<IResetPasswordForm, any, undefined>;
      formSubmitHandler: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
}

function ResetPasswordForm({
      isLoading,
      form: {
            register,
            getValues,
            formState: { errors },
      },
      formSubmitHandler,
}: IResetPasswordFrom) {
      return (
            <form className="flex flex-col gap-y-8 w-full md:w-[90%] h-full" onSubmit={formSubmitHandler}>
                  <PasswordInput label="Password" errorMessage={errors.newPassword?.message}>
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

                  <Button type="submit" title="Reset Password" />

                  {isLoading && <LoadingAnimation />}
            </form>
      );
}

export default ResetPasswordForm;
