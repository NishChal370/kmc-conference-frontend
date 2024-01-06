import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import Input from "@/shared/input/Input";
import Button from "@/shared/button/Button";
import PasswordInput from "@/shared/input/PasswordInput";
import LoadingAnimation from "@/shared/loading/LoadingAnimation";
import { REGEX } from "@/helper/regex";
import { ILogin } from "@/model-normalUser/login/loginModel";
import { Status } from "@/enum/commonEnum";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";

interface ILoginFormProps {
      status: Status;
      loginForm: UseFormReturn<ILogin>;
      formSubmitHandler: (e?: BaseSyntheticEvent) => void;
}

function LoginForm({
      status,
      loginForm: {
            register,
            formState: { errors },
      },
      formSubmitHandler,
}: ILoginFormProps) {
      return (
            <form className="flex flex-col gap-y-8 w-full h-full" onSubmit={formSubmitHandler}>
                  <Input type="email" label="Email address" errorMessage={errors.emailAddress?.message}>
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

                  <span className="flex flex-col gap-3.5 w-full justify-center">
                        <PasswordInput label="Password" errorMessage={errors.password?.message}>
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

                        <Button
                              type="button"
                              variant="text"
                              title="Forgot Password?"
                              onClickHandler={() => {}}
                              extraClassName="!text-mute self-end !tracking-wider"
                        />
                  </span>

                  <Button type="submit" title="log in" />

                  {status === Status.LOADING && <LoadingAnimation />}
            </form>
      );
}

export default LoginForm;
