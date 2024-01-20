import { UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { IParticipationPreferenceForm } from "@/admin/model/participant/participantModel";

interface IScheduleSpecificForm {
      scheduleSpecificForm: UseFormReturn<IParticipationPreferenceForm>;
      formSubmitHandler: () => void;
}
function ScheduleSpecificForm({
      formSubmitHandler,
      scheduleSpecificForm: {
            register,
            formState: { errors },
      },
}: IScheduleSpecificForm) {
      return (
            <>
                  <div>
                        <SecondaryInput
                              isRequired
                              label="Registration Type"
                              errorMessage={errors.registrationType?.message}
                        >
                              {register("registrationType", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput
                              isRequired
                              label="Track Preferences"
                              errorMessage={errors.trackPreferences?.message}
                        >
                              {register("trackPreferences", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput
                              label="Special Requirements"
                              errorMessage={errors.specialRequirements?.message}
                        >
                              {register("specialRequirements")}
                        </SecondaryInput>
                  </div>
                  <span
                        className="flex justify-end w-full  min-w-[10rem] self-end
                              md:w-fit
                        "
                  >
                        <Button type="button" title="Next" onClickHandler={formSubmitHandler} />
                  </span>
            </>
      );
}

export default ScheduleSpecificForm;
