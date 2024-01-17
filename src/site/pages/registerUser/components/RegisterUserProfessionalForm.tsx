import { UseFormReturn } from "react-hook-form";
import Input from "@/shared/input/Input";
import Button from "@/shared/button/Button";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { IRegisterUserProfessionalForm } from "@/site/model/registerUser/registerUserModel";

interface IRegisterUserBasicFormProps {
      slideToPrev: () => void;
      registerUserProfessionalForm: UseFormReturn<IRegisterUserProfessionalForm>;
      professionalFormSubmitHandler: (fields: (keyof IRegisterUserProfessionalForm)[]) => () => void;
}

function RegisterUserProfessionalForm({
      registerUserProfessionalForm: {
            register,
            formState: { errors },
      },
      slideToPrev,
      professionalFormSubmitHandler,
}: IRegisterUserBasicFormProps) {
      return (
            <div className="w-full grid grid-cols-2 gap-y-10 gap-x-4">
                  <Input label="Title" errorMessage={errors.title?.message}>
                        {register("title", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </Input>

                  <Input label="Job Title" errorMessage={errors.jobTitle?.message}>
                        {register("jobTitle", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </Input>

                  <Input label="Affiliation" errorMessage={errors.affiliation?.message}>
                        {register("affiliation", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </Input>

                  <span
                        className="w-full flex flex-col gap-6 items-center justify-center 
                              lg:flex-row
                        "
                  >
                        <Button
                              variant="outlined"
                              title="Previous"
                              extraClassName="!w-full"
                              onClickHandler={slideToPrev}
                        />

                        <Button
                              type="button"
                              title="Next"
                              extraClassName="!w-full"
                              onClickHandler={professionalFormSubmitHandler([
                                    "title",
                                    "jobTitle",
                                    "affiliation",
                              ])}
                        />
                  </span>
            </div>
      );
}

export default RegisterUserProfessionalForm;
