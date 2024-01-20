import { Controller, UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import ToggleButton from "@/shared/button/ToggleButton";
import SecondaryInput from "@/shared/input/SecondaryInput";
import RichTextEditor from "@/shared/input/RichTextEditor";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import FileDragDropContainer from "@/shared/fileInput/FileDragDropContainer";
import { ISpeakerSessionDetailAddFrom } from "@/admin/model/speaker/adminSpeakerModel";

interface ISessionForm {
      slideToPrev: () => void;
      formSubmitHandler: () => void;
      formContext: UseFormReturn<ISpeakerSessionDetailAddFrom>;
}

function SessionForm({
      slideToPrev,
      formContext: {
            register,
            formState: { errors },
            control,
      },
      formSubmitHandler,
}: ISessionForm) {
      return (
            <>
                  <div>
                        <SecondaryInput
                              label="Audio/View Requirement"
                              errorMessage={errors.avRequirements?.message}
                        >
                              {register("avRequirements")}
                        </SecondaryInput>

                        <SecondaryInput
                              type="number"
                              label="Preferred session length (in minutes)"
                              errorMessage={errors.preferredSessionLengthMinutes?.message}
                        >
                              {register("preferredSessionLengthMinutes", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <Controller
                              name="willingToTravel"
                              control={control}
                              render={({ field }) => (
                                    <ToggleButton
                                          label="Willing to travel"
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          buttonName={{
                                                one: "Yes, I will",
                                                two: "No, I can not",
                                          }}
                                    />
                              )}
                        />

                        <Controller
                              control={control}
                              name="accommodationNeeds"
                              render={({ field }) => (
                                    <RichTextEditor
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          label="Accommodation Needs"
                                          placeHolder="Write about your  accommodation needs"
                                          containerClassName="md:col-span-2 pb-10 sm:pb-6 md:pb-0"
                                    />
                              )}
                        />

                        <span className="sm:col-span-2">
                              <Controller
                                    name="sessionProposal"
                                    control={control}
                                    render={({ field }) => (
                                          <FileDragDropContainer
                                                label="Session Proposal"
                                                value={field.value}
                                                onChangeHandler={field.onChange}
                                          />
                                    )}
                              />
                        </span>
                  </div>

                  <span
                        className="flex  flex-col justify-end w-full  md:min-w-[20rem] self-end gap-6
                              md:flex-row md:w-fit 
                        "
                  >
                        <Button title="Previous" variant="outlined" onClickHandler={slideToPrev} />
                        <Button title="Next" onClickHandler={formSubmitHandler} />
                  </span>
            </>
      );
}

export default SessionForm;
