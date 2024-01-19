import { IParticipationAdditionalForm } from "@/admin/model/participant/participantModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import Button from "@/shared/button/Button";
import AgreementCheckBox from "@/shared/input/AgreementCheckBox";
import Input from "@/shared/input/Input";
import { Controller, UseFormReturn } from "react-hook-form";

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
            <div className="sm:grid-cols-2  !min-h-[20rem]">
                  <span className="col-span-2  grid grid-col-1 gap-x-6 gap-y-6 h-fit w-full">
                        <Input
                              label="conference Discovery Source"
                              errorMessage={errors.conferenceDiscoverySource?.message}
                        >
                              {register("conferenceDiscoverySource")}
                        </Input>

                        <Input label="Expectation" errorMessage={errors.expectationsGoals?.message}>
                              {register("expectationsGoals")}
                        </Input>
                  </span>

                  <span className="col-span-2 flex flex-col gap-2.5 justify-end">
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

                        <span className="sm:col-span-2 w-full sm:w-[30rem] sm:place-self-end mt-4 grid sm:grid-cols-2 gap-4 ">
                              <Button
                                    variant="outlined"
                                    type="button"
                                    title="Previous"
                                    onClickHandler={slideToPrev}
                              />

                              <Button
                                    disable={!watch("consentToPhotography") || !watch("hasReadPrivacy")}
                                    type="submit"
                                    title="Submit"
                                    extraClassName=" disabled:bg-primary/80  disabled:cursor-not-allowed disabled:active:!shadow-none"
                              />
                        </span>
                  </span>
            </div>
      );
}

export default AdditionalDetailForm;
