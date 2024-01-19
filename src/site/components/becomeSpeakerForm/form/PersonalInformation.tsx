import { ISpeakerPersonalAddForm } from "@/admin/model/speaker/adminSpeakerModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { REGEX } from "@/helper/regex";
import Button from "@/shared/button/Button";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { Controller, useFormContext } from "react-hook-form";

interface IPersonalInformation {
      slideToPrev: () => void;
      submitToParent: (fields: (keyof ISpeakerPersonalAddForm)[]) => void;
}
function PersonalInformation({ slideToPrev, submitToParent }: IPersonalInformation) {
      const scheduleSpecificForm = useFormContext<ISpeakerPersonalAddForm>();

      const formSubmitHandler = (fields: (keyof ISpeakerPersonalAddForm)[]) => () => {
            submitToParent(fields);
      };

      const {
            control,
            register,
            formState: { errors },
      } = scheduleSpecificForm;

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

                        {/* <SecondaryInput label="Twitter" /> */}

                        <SecondaryInput label="Twitter" errorMessage={errors.twitterHandle?.message}>
                              {register("twitterHandle", {
                                    pattern: {
                                          value: REGEX.URL,
                                          message: INPUT_ERROR_MESSAGE.invalidUrl,
                                    },
                              })}
                        </SecondaryInput>

                        {/* <SecondaryInput label="Personal website" /> */}
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

                        {/* <RichTextEditor
                              label="Add Biography"
                              placeHolder="Write your biography"
                              value=""
                              onChangeHandler={() => {}}
                        /> */}
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
                        className="flex  flex-col justify-end w-full  md:min-w-[20rem] self-end gap-6
                              md:flex-row md:w-fit 
                        "
                  >
                        <Button title="Previous" variant="outlined" onClickHandler={slideToPrev} />
                        <Button
                              title="Next"
                              onClickHandler={formSubmitHandler([
                                    "bio",
                                    "linkedInProfile",
                                    "professionalWebsite",
                                    "twitterHandle",
                              ])}
                        />
                  </span>
            </>
      );
}

export default PersonalInformation;
