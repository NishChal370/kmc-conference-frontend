import { IParticipationContactForm } from "@/admin/model/participant/participantModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import Button from "@/shared/button/Button";
import Input from "@/shared/input/Input";
import { UseFormReturn } from "react-hook-form";

interface IContactInformationForm {
      slideToPrev: () => void;
      form: UseFormReturn<IParticipationContactForm>;
      formSubmitHandler: (fields: (keyof IParticipationContactForm)[]) => () => void;
}

function ContactInformationForm({
      slideToPrev,
      form: {
            register,
            formState: { errors },
      },
      formSubmitHandler,
}: IContactInformationForm) {
      return (
            <div className="sm:grid-cols-2">
                  <Input label="Address" errorMessage={errors.address?.message}>
                        {register("address", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </Input>

                  <Input label="City" errorMessage={errors.city?.message}>
                        {register("city", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </Input>

                  <Input label="State" errorMessage={errors.state?.message}>
                        {register("state", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </Input>

                  <Input label="Country" errorMessage={errors.country?.message}>
                        {register("country", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </Input>

                  <Input label="Postal Code" errorMessage={errors.postalCode?.message}>
                        {register("postalCode", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </Input>

                  <span className="sm:col-span-2 sm:w-fit sm:place-self-end grid sm:grid-cols-2 gap-4">
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
                                    "address",
                                    "city",
                                    "state",
                                    "country",
                                    "postalCode",
                              ])}
                        />
                  </span>
            </div>
      );
}

export default ContactInformationForm;
