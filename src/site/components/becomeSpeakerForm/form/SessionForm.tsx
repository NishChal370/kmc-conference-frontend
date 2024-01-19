import { ISpeakerSessionDetailAddFrom } from "@/admin/model/speaker/adminSpeakerModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import Button from "@/shared/button/Button";
import ToggleButton from "@/shared/button/ToggleButton";
import FileDragDropContainer from "@/shared/fileInput/FileDragDropContainer";
import RichTextEditor from "@/shared/input/RichTextEditor";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { Controller, useFormContext } from "react-hook-form";

interface ISessionForm {
      slideToPrev: () => void;
      submitToParent: (fields: (keyof ISpeakerSessionDetailAddFrom)[]) => void;
}
function SessionForm({ slideToPrev, submitToParent }: ISessionForm) {
      const scheduleSpecificForm = useFormContext<ISpeakerSessionDetailAddFrom>();

      const formSubmitHandler = (fields: (keyof ISpeakerSessionDetailAddFrom)[]) => () => {
            submitToParent(fields);
      };

      const {
            register,
            formState: { errors },
            control,
      } = scheduleSpecificForm;

      return (
            <>
                  <div>
                        {/* <SecondaryInput label="Audio/View Requirement" /> */}
                        <SecondaryInput
                              label="Audio/View Requirement"
                              errorMessage={errors.avRequirements?.message}
                        >
                              {register("avRequirements")}
                        </SecondaryInput>

                        {/* <SecondaryInput label="Preferred session length (in minutes)" /> */}
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

                        {/* <ToggleButton
                              label="Willing to travel"
                              value={false}
                              onChangeHandler={() => {}}
                              buttonName={{
                                    one: "Yes, I will",
                                    two: "No, I can not",
                              }}
                        /> */}
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

                        {/* <RichTextEditor
                              label="Accommodation Needs"
                              placeHolder="Write about your accommodation needs"
                              value=""
                              onChangeHandler={() => {}}
                        /> */}

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
                        <Button
                              title="Next"
                              onClickHandler={formSubmitHandler([
                                    "accommodationNeeds",
                                    "avRequirements",
                                    "preferredSessionLengthMinutes",
                                    "sessionProposal",
                                    "willingToTravel",
                              ])}
                        />
                  </span>
            </>
      );
}

export default SessionForm;
