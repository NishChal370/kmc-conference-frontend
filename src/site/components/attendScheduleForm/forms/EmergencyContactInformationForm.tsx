import { UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import PhoneInput from "@/shared/input/PhoneInput";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { IParticipationEmergencyContactForm } from "@/admin/model/participant/attendScheduleModel";

interface IEmergencyContactInformationForm {
      slideToPrev: () => void;
      form: UseFormReturn<IParticipationEmergencyContactForm>;
      formSubmitHandler: () => void;
}

function EmergencyContactInformationForm({
      form: {
            register,
            control,
            formState: { errors },
      },
      slideToPrev,
      formSubmitHandler,
}: IEmergencyContactInformationForm) {
      return (
            <>
                  <div>
                        <SecondaryInput
                              isRequired
                              label="Emergency Contact Name"
                              errorMessage={errors.emergencyContactName?.message}
                        >
                              {register("emergencyContactName", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <PhoneInput
                              isRequired
                              control={control}
                              variant="secondary"
                              label="Emergency Contact Number"
                              name="emergencyContactNumber"
                        />

                        <SecondaryInput
                              isRequired
                              label="Emergency Contact Relation"
                              errorMessage={errors.relationshipWithEmergencyContact?.message}
                        >
                              {register("relationshipWithEmergencyContact", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>
                  </div>

                  <span
                        className="flex flex-col justify-end w-full  md:min-w-[20rem] self-end gap-6
                              md:flex-row md:w-fit 
                        "
                  >
                        <Button title="Previous" variant="outlined" onClickHandler={slideToPrev} />

                        <Button type="button" title="Next" onClickHandler={formSubmitHandler} />
                  </span>
            </>
      );
}

export default EmergencyContactInformationForm;
