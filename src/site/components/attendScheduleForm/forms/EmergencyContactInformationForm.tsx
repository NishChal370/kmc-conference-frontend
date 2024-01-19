import { IParticipationEmergencyContactForm } from "@/admin/model/participant/participantModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import Button from "@/shared/button/Button";
import Input from "@/shared/input/Input";
import PhoneInput from "@/shared/input/PhoneInput";
import { UseFormReturn } from "react-hook-form";

interface IEmergencyContactInformationForm {
      slideToPrev: () => void;
      form: UseFormReturn<IParticipationEmergencyContactForm>;
      formSubmitHandler: (fields: (keyof IParticipationEmergencyContactForm)[]) => () => void;
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
            <div className="sm:justify-between !h-[17rem]">
                  <span className="sm:col-span-2  grid grid-col-1 gap-x-6 gap-y-6 w-full sm:grid-cols-2">
                        <Input
                              label="Emergency Contact Name"
                              errorMessage={errors.emergencyContactName?.message}
                        >
                              {register("emergencyContactName", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </Input>

                        <PhoneInput control={control} isRequired name="emergencyContactNumber" />

                        <Input
                              label="Emergency Contact Relation"
                              errorMessage={errors.relationshipWithEmergencyContact?.message}
                        >
                              {register("relationshipWithEmergencyContact", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </Input>
                  </span>

                  <span className=" sm:col-span-2 w-full sm:w-fit place-self-end grid sm:grid-cols-2 gap-4">
                        <Button
                              variant="outlined"
                              type="button"
                              title="Previous"
                              onClickHandler={slideToPrev}
                        />

                        <Button
                              type="button"
                              title="Next"
                              onClickHandler={formSubmitHandler([
                                    "emergencyContactName",
                                    "emergencyContactNumber",
                                    "relationshipWithEmergencyContact",
                              ])}
                        />
                  </span>
            </div>
      );
}

export default EmergencyContactInformationForm;
