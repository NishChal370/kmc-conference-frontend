import { Controller, UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import SecondaryInput from "@/shared/input/SecondaryInput";
import RichTextEditor from "@/shared/input/RichTextEditor";
import MultipleSecondaryInput from "@/shared/input/MultipleSecondaryInput";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { ISpeakerProfessionalAddForm } from "@/admin/model/speaker/becomeSpeakerModel";
import { REGEX } from "@/helper/regex";

interface IProfessionalInformationForm {
      slideToPrev: () => void;
      professionalInformationForm: UseFormReturn<ISpeakerProfessionalAddForm>;
      formSubmitHandler: () => void;
}
function ProfessionalInformationForm({
      slideToPrev,
      professionalInformationForm: {
            control,
            register,
            formState: { errors },
      },
      formSubmitHandler,
}: IProfessionalInformationForm) {
      return (
            <>
                  <div>
                        <SecondaryInput
                              isRequired
                              label="Expertise in Field"
                              errorMessage={errors.expertiseInField?.message}
                        >
                              {register("expertiseInField", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <MultipleSecondaryInput
                              control={control}
                              name="publications"
                              label="Publications"
                              placeholder="Publication link"
                              errorMessage={errors.publications}
                              validation={{
                                    pattern: {
                                          value: REGEX.URL,
                                          message: INPUT_ERROR_MESSAGE.invalidUrl,
                                    },
                              }}
                        />

                        <MultipleSecondaryInput
                              control={control}
                              name="previousSpeakingEngagements"
                              label="Previous Speaking Engagements"
                              placeholder="Previous speaking engagement link"
                              errorMessage={errors.previousSpeakingEngagements}
                              validation={{
                                    pattern: {
                                          value: REGEX.URL,
                                          message: INPUT_ERROR_MESSAGE.invalidUrl,
                                    },
                              }}
                        />

                        <Controller
                              control={control}
                              name="previousExperience"
                              render={({ field }) => (
                                    <RichTextEditor
                                          label="Previous Experience"
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          placeHolder="Write about your previous experience"
                                          containerClassName="col-span-1 md:col-span-2 pb-10 sm:pb-6 md:pb-0"
                                    />
                              )}
                        />

                        <Controller
                              control={control}
                              name="previousConferences"
                              render={({ field }) => (
                                    <RichTextEditor
                                          label="Previous Conference"
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          placeHolder="Write about your previous conference"
                                          containerClassName="pb-10 sm:pb-6 md:pb-0 md:col-span-2"
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

export default ProfessionalInformationForm;
