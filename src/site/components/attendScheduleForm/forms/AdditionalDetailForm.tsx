import { Controller, UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import SecondaryInput from "@/shared/input/SecondaryInput";
import AgreementCheckBox from "@/shared/input/AgreementCheckBox";
import { IParticipationAdditionalForm } from "@/admin/model/participant/participantModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";

interface IAdditionalDetailForm {
      slideToPrev: () => void;
      form: UseFormReturn<IParticipationAdditionalForm>;
}
function AdditionalDetailForm({
      form: {
            register,
            control,
            watch,
            formState: { errors },
      },
      slideToPrev,
}: IAdditionalDetailForm) {
      return (
            <>
                  <div className="md:!grid-cols-1 !gap-y-10">
                        <SecondaryInput
                              isRequired
                              label="conference Discovery Source"
                              errorMessage={errors.conferenceDiscoverySource?.message}
                        >
                              {register("conferenceDiscoverySource", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput label="Expectation" errorMessage={errors.expectationsGoals?.message}>
                              {register("expectationsGoals")}
                        </SecondaryInput>

                        <span className="flex flex-col w-full gap-4">
                              <Controller
                                    name="consentToPhotography"
                                    control={control}
                                    rules={{
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    }}
                                    render={({ field }) => (
                                          <AgreementCheckBox
                                                label="I give consent to be photographed during the event."
                                                name="consent"
                                                checked={field.value}
                                                onChange={field.onChange}
                                          />
                                    )}
                              />

                              <Controller
                                    name="hasReadPrivacy"
                                    control={control}
                                    rules={{
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    }}
                                    render={({ field }) => (
                                          <AgreementCheckBox
                                                label="I understand the event terms and conditions and privacy policy."
                                                name="understand"
                                                checked={field.value}
                                                onChange={field.onChange}
                                          />
                                    )}
                              />
                        </span>
                  </div>
                  <span
                        className="flex flex-col justify-end w-full  md:min-w-[20rem] self-end gap-6
                              md:flex-row md:w-fit 
                        "
                  >
                        <Button title="Previous" variant="outlined" onClickHandler={slideToPrev} />

                        <Button
                              disable={!watch("consentToPhotography") || !watch("hasReadPrivacy")}
                              type="submit"
                              title="Submit"
                              extraClassName=" disabled:bg-primary/80  disabled:cursor-not-allowed disabled:active:!shadow-none"
                        />
                  </span>
            </>
      );
}

export default AdditionalDetailForm;
