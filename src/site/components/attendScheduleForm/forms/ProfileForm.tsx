import { IParticipationPersonalProfileForm } from "@/admin/model/participant/participantModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { REGEX } from "@/helper/regex";
import Button from "@/shared/button/Button";
import Input from "@/shared/input/Input";
import RichTextEditor from "@/shared/input/RichTextEditor";
import { Controller, UseFormReturn } from "react-hook-form";

interface IProfileForm {
      slideToPrev: () => void;
      form: UseFormReturn<IParticipationPersonalProfileForm>;
      formSubmitHandler: (fields: (keyof IParticipationPersonalProfileForm)[]) => () => void;
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
            <div className="sm:grid-cols-2 sm:!gap-y-2">
                  <Input label="Linked In" errorMessage={errors.linkedInProfile?.message}>
                        {register("linkedInProfile", {
                              pattern: {
                                    value: REGEX.URL,
                                    message: INPUT_ERROR_MESSAGE.invalidUrl,
                              },
                        })}
                  </Input>

                  <Input label="Twitter" errorMessage={errors.twitterHandle?.message}>
                        {register("twitterHandle", {
                              pattern: {
                                    value: REGEX.URL,
                                    message: INPUT_ERROR_MESSAGE.invalidUrl,
                              },
                        })}
                  </Input>

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
                                    label="Add Biography"
                                    value={field.value}
                                    onChangeHandler={field.onChange}
                                    placeHolder="Write your biography"
                                    textBoxClassName=" h-[8rem] lg:h-[10rem]"
                                    containerClassName="sm:col-span-2"
                                    errorMessage={fieldState.error?.message}
                              />
                        )}
                  />

                  <span className="sm:col-span-2 w-full sm:w-fit sm:place-self-end grid sm:grid-cols-2 gap-4 mt-10">
                        <Button
                              variant="outlined"
                              type="button"
                              title="Previous"
                              onClickHandler={slideToPrev}
                        />

                        <Button
                              type="button"
                              title="Next"
                              onClickHandler={formSubmitHandler(["bio", "linkedInProfile", "twitterHandle"])}
                        />
                  </span>
            </div>
      );
}

export default ProfileForm;
