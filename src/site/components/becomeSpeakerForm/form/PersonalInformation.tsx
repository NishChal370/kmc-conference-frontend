import { Controller, UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { REGEX } from "@/helper/regex";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { ISpeakerPersonalAddForm } from "@/admin/model/speaker/adminSpeakerModel";

interface IPersonalInformation {
      slideToPrev: () => void;
      formSubmitHandler: () => void;
      formContext: UseFormReturn<ISpeakerPersonalAddForm>;
}

function PersonalInformation({
      slideToPrev,
      formSubmitHandler,
      formContext: {
            control,
            register,
            formState: { errors },
      },
}: IPersonalInformation) {
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

                        <SecondaryInput label="Twitter" errorMessage={errors.twitterHandle?.message}>
                              {register("twitterHandle", {
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
                              name="bio"
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

                  <span
                        className="flex  flex-col justify-end w-full self-end gap-6
                              md:flex-row md:w-fit md:min-w-[20rem]
                        "
                  >
                        <Button title="Previous" variant="outlined" onClickHandler={slideToPrev} />

                        <Button title="Next" onClickHandler={formSubmitHandler} />
                  </span>
            </>
      );
}

export default PersonalInformation;
