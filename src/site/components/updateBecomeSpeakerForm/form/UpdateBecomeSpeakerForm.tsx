import { BaseSyntheticEvent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import SecondaryInput from "@/shared/input/SecondaryInput";
import FileDragDropContainer from "@/shared/fileInput/FileDragDropContainer";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { ISpeakerNewSessionAddForm } from "@/admin/model/speaker/becomeSpeakerModel";

interface IUpdateBecomeSpeakerForm {
      formResetHandler: () => void;
      form: UseFormReturn<ISpeakerNewSessionAddForm>;
      formSubmitHandler: (e?: BaseSyntheticEvent) => Promise<void>;
}

function UpdateBecomeSpeakerForm({
      form: {
            control,
            register,
            formState: { errors },
      },
      formResetHandler,
      formSubmitHandler,
}: IUpdateBecomeSpeakerForm) {
      return (
            <form className="flex flex-col w-full h-full gap-10" onSubmit={formSubmitHandler}>
                  <section
                        className=" grid grid-cols-1 gap-x-6 gap-y-6 w-full
                              md:grid-cols-2 md:gap-y-10"
                  >
                        <SecondaryInput
                              isRequired
                              label="Preferred Session Length (in minutes)"
                              errorMessage={errors.preferredSessionLengthMinutes?.message}
                        >
                              {register("preferredSessionLengthMinutes", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput
                              label="Audio/View Requirement"
                              errorMessage={errors.avRequirements?.message}
                        >
                              {register("avRequirements")}
                        </SecondaryInput>

                        <span className="sm:col-span-2">
                              <Controller
                                    name="proposalFile"
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
                  </section>

                  <span className="flex justify-end w-full gap-4  md:w-fit min-w-[20rem] self-end">
                        <Button variant="outlined" title="Reset" onClickHandler={formResetHandler} />

                        <Button type="submit" title="Submit" />
                  </span>
            </form>
      );
}

export default UpdateBecomeSpeakerForm;
