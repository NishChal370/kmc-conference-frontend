import { Controller, UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { REGEX } from "@/helper/regex";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { ICallForPaperPostPersonalForm } from "@/admin/model/callForPaper/callForPaperApplyModel";

interface IPersonalInformationForm {
      formSubmitHandler: () => void;
      formContext: UseFormReturn<ICallForPaperPostPersonalForm>;
}
function PersonalInformationForm({
      formSubmitHandler,
      formContext: {
            control,
            register,
            formState: { errors },
      },
}: IPersonalInformationForm) {
      return (
            <>
                  <div>
                        <SecondaryInput label="LinkedIn" errorMessage={errors.linkedInProfile?.message}>
                              {register("linkedInProfile", {
                                    pattern: {
                                          value: REGEX.URL,
                                          message: INPUT_ERROR_MESSAGE.invalidUrl,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput label="Twitter" errorMessage={errors.twitterHandler?.message}>
                              {register("twitterHandler", {
                                    pattern: {
                                          value: REGEX.URL,
                                          message: INPUT_ERROR_MESSAGE.invalidUrl,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput
                              label="Personal website"
                              errorMessage={errors.professionalWebsite?.message}
                        >
                              {register("professionalWebsite", {
                                    pattern: {
                                          value: REGEX.URL,
                                          message: INPUT_ERROR_MESSAGE.invalidUrl,
                                    },
                              })}
                        </SecondaryInput>

                        <Controller
                              name="briefBiography"
                              control={control}
                              rules={{
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              }}
                              render={({ field, fieldState }) => (
                                    <RichTextEditor
                                          isRequired
                                          label="Add a Biography"
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          placeHolder="Write your biography"
                                          errorMessage={fieldState.error?.message}
                                          containerClassName="md:col-span-2  pb-10 sm:pb-6 md:pb-0"
                                    />
                              )}
                        />
                  </div>

                  <span className="flex justify-end w-full md:w-fit min-w-[10rem] self-end">
                        <Button type="button" title="Next" onClickHandler={formSubmitHandler} />
                  </span>
            </>
      );
}

export default PersonalInformationForm;
