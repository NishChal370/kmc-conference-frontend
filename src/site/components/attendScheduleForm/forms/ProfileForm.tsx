import { Controller, UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { IParticipationPersonalProfileForm } from "@/admin/model/participant/participantModel";
import { REGEX } from "@/helper/regex";

interface IProfileForm {
      slideToPrev: () => void;
      form: UseFormReturn<IParticipationPersonalProfileForm>;
      formSubmitHandler: () => void;
}

function ProfileForm({
      form: {
            control,
            register,
            formState: { errors },
      },
      slideToPrev,
      formSubmitHandler,
}: IProfileForm) {
      return (
            <>
                  <div>
                        <SecondaryInput
                              isRequired
                              label="Linked In"
                              errorMessage={errors.linkedInProfile?.message}
                        >
                              {register("linkedInProfile", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                                    pattern: {
                                          value: REGEX.URL,
                                          message: INPUT_ERROR_MESSAGE.invalidUrl,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput
                              isRequired
                              label="Twitter"
                              errorMessage={errors.twitterHandle?.message}
                        >
                              {register("twitterHandle", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
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
                              render={({ field }) => (
                                    <RichTextEditor
                                          isRequired
                                          label="Add Biography"
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          placeHolder="Write your biography"
                                          containerClassName="md:col-span-2"
                                    />
                              )}
                        />
                  </div>
                  <span
                        className="flex flex-col justify-end w-full  md:min-w-[20rem] self-end gap-6
                              md:flex-row md:w-fit 
                        "
                  >
                        <Button
                              type="button"
                              title="Previous"
                              variant="outlined"
                              onClickHandler={slideToPrev}
                        />
                        <Button type="button" title="Next" onClickHandler={formSubmitHandler} />
                  </span>
            </>
      );
}

export default ProfileForm;
