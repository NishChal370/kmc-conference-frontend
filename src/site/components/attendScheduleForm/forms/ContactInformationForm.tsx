import { UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { IParticipationContactForm } from "@/admin/model/participant/attendScheduleModel";

interface IContactInformationForm {
      slideToPrev: () => void;
      form: UseFormReturn<IParticipationContactForm>;
      formSubmitHandler: () => void;
}

function ContactInformationForm({
      form: {
            register,
            formState: { errors },
      },
      slideToPrev,
      formSubmitHandler,
}: IContactInformationForm) {
      return (
            <>
                  <div>
                        <SecondaryInput isRequired label="Address" errorMessage={errors.address?.message}>
                              {register("address", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput isRequired label="City" errorMessage={errors.city?.message}>
                              {register("city", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput isRequired label="State" errorMessage={errors.state?.message}>
                              {register("state", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput isRequired label="Country" errorMessage={errors.country?.message}>
                              {register("country", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput
                              isRequired
                              label="Postal Code"
                              errorMessage={errors.postalCode?.message}
                        >
                              {register("postalCode", {
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

                        <Button title="Next" onClickHandler={formSubmitHandler} />
                  </span>
            </>
      );
}

export default ContactInformationForm;
