import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import Input from "@/shared/input/Input";
import { IForgotPasswordRequest } from "@/site/model/forgotPassword/forgotPasswordModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { REGEX } from "@/helper/regex";
import LoadingAnimation from "@/shared/loading/LoadingAnimation";

interface IForgetPasswordForm {
      isLoading: boolean;
      form: UseFormReturn<IForgotPasswordRequest, any, undefined>;
      formSubmitHandler: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
}

function ForgotPasswordForm({
      form: {
            register,
            formState: { errors },
      },
      formSubmitHandler,
      isLoading,
}: IForgetPasswordForm) {
      return (
            <form className="flex flex-col gap-y-8 w-full md:w-[90%] h-full" onSubmit={formSubmitHandler}>
                  <Input type="email" label="Email Address" errorMessage={errors.email?.message}>
                        {register("email", {
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

                  <Button type="submit" title="Reset Password" />

                  {isLoading && <LoadingAnimation />}
            </form>
      );
}

export default ForgotPasswordForm;
