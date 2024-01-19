import { ISpeakerProfessionalAddForm } from "@/admin/model/speaker/adminSpeakerModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { REGEX } from "@/helper/regex";
import Button from "@/shared/button/Button";
import MultipleSecondaryInput from "@/shared/input/MultipleSecondaryInput";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { Controller, useFormContext } from "react-hook-form";

interface IProfessionalInformationForm {
      submitToParent: (fields: (keyof ISpeakerProfessionalAddForm)[]) => void;
}
function ProfessionalInformationForm({ submitToParent }: IProfessionalInformationForm) {
      const scheduleSpecificForm = useFormContext<ISpeakerProfessionalAddForm>();

      const formSubmitHandler = (fields: (keyof ISpeakerProfessionalAddForm)[]) => () => {
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
                        <SecondaryInput
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

                        {/* <SecondaryInput label="Publication" /> */}
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

                        {/* <SecondaryInput label="Previous Speaking Engagement" /> */}
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

                        {/* <RichTextEditor
                              containerClassName="col-span-1 md:col-span-2 pb-10 sm:pb-6 md:pb-0"
                              label="Previous Experience"
                              value=""
                              onChangeHandler={() => {}}
                        /> */}

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

                        {/* <RichTextEditor label="Previous Conference" value="" onChangeHandler={() => {}} /> */}

                        <Controller
                              control={control}
                              name="previousConferences"
                              render={({ field }) => (
                                    <RichTextEditor
                                          label="Previous Conference"
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          placeHolder="Write about your previous conference"
                                          containerClassName="md:col-span-2  pb-10 sm:pb-6 md:pb-0"
                                    />
                              )}
                        />
                  </div>

                  <span className="flex justify-end w-full md:w-fit min-w-[10rem] self-end">
                        <Button
                              title="Next"
                              onClickHandler={formSubmitHandler([
                                    "expertiseInField",
                                    "previousConferences",
                                    "previousExperience",
                                    "previousSpeakingEngagements",
                                    "publications",
                              ])}
                        />
                  </span>
            </>
      );
}

export default ProfessionalInformationForm;
