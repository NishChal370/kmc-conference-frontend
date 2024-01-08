import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import PasswordInput from "@/shared/input/PasswordInput";
import { IRegisterUserPasswordForm } from "@site/model/registerUser/registerUserModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { REGEX } from "@/helper/regex";

interface IRegisterUserPasswordFormProps {
      registerUserPasswordForm: UseFormReturn<IRegisterUserPasswordForm>;
      passwordFormSubmitHandler: (e?: BaseSyntheticEvent) => void;
      previousButtonHandler: () => void;
}

function RegisterUserPasswordForm({
      registerUserPasswordForm: {
            register,
            getValues,
            formState: { errors },
      },
      passwordFormSubmitHandler,
      previousButtonHandler,
}: IRegisterUserPasswordFormProps) {
      return (
            <form onSubmit={passwordFormSubmitHandler} className="flex w-full h-full">
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

                  <PasswordInput label="Confirm Password" errorMessage={errors.confirmPassword?.message}>
                        {register("confirmPassword", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                              validate: (value) =>
                                    value === getValues("password") || INPUT_ERROR_MESSAGE.passwordNotMatched,
                        })}
                  </PasswordInput>

                  <Button
                        variant="outlined"
                        type="button"
                        title="Previous"
                        extraClassName="!w-full"
                        onClickHandler={previousButtonHandler}
                  />

                  <Button type="submit" title="Register" extraClassName="py-2" />
            </form>
      );
}

export default RegisterUserPasswordForm;
