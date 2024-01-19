import { IParticipationPreferenceForm } from "@/admin/model/participant/participantModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import Button from "@/shared/button/Button";
import Input from "@/shared/input/Input";
import { UseFormReturn, useFormContext } from "react-hook-form";

interface IScheduleSpecificForm {
      scheduleSpecificForm: UseFormReturn<IParticipationPreferenceForm>;
      formSubmitHandler: (fields: (keyof IParticipationPreferenceForm)[]) => () => void;
}
function ScheduleSpecificForm({ formSubmitHandler }: IScheduleSpecificForm) {
      const registerUserBasicForm = useFormContext<IParticipationPreferenceForm>();
      const {
            register,
            formState: { errors },
      } = registerUserBasicForm;

      return (
            <div>
                  <Input label="Registration Type" errorMessage={errors.registrationType?.message}>
                        {register("registrationType", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </Input>

                  <Input label="Tack Preferences" errorMessage={errors.trackPreferences?.message}>
                        {register("trackPreferences", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </Input>

                  <Input label="Special Requirements" errorMessage={errors.specialRequirements?.message}>
                        {register("specialRequirements")}
                  </Input>

                  <span className="sm:w-fit sm:place-self-end">
                        <Button
                              type="button"
                              title="Next"
                              onClickHandler={formSubmitHandler([
                                    "registrationType",
                                    "specialRequirements",
                                    "trackPreferences",
                              ])}
                        />
                  </span>
            </div>
      );
}

export default ScheduleSpecificForm;
