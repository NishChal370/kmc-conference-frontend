import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import Input from "@/shared/input/Input";
import Button from "@/shared/button/Button";
import TextArea from "@/shared/input/TextArea";
import { IContactUsAddForm } from "@/admin/model/contactUs/contactUsModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { REGEX } from "@/helper/regex";

interface IContactUsForm {
      form: UseFormReturn<IContactUsAddForm>;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
}

function ContactUsForm({
      form: {
            register,
            formState: { errors },
      },
      formSubmitHandler,
}: IContactUsForm) {
      return (
            <form className="grid md:grid-cols-2 gap-x-6 gap-y-10 text-sm" onSubmit={formSubmitHandler}>
                  <Input label="Enter your name" errorMessage={errors.fullName?.message}>
                        {register("fullName", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </Input>

                  <Input type="email" label="Enter email address" errorMessage={errors.email?.message}>
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

                  <Input
                        label="Enter Subject"
                        containerClassName="md:col-span-2"
                        errorMessage={errors.subject?.message}
                  >
                        {register("subject", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </Input>

                  <TextArea
                        label="Enter Message"
                        containerClassName="md:col-span-2"
                        errorMessage={errors.description?.message}
                  >
                        {register("description", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </TextArea>

                  <Button type="submit" extraClassName="md:col-span-2 uppercase " title="Send" />
            </form>
      );
}

export default ContactUsForm;
