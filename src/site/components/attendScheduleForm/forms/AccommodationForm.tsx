import { UseFormReturn } from "react-hook-form";
import Input from "@/shared/input/Input";
import Button from "@/shared/button/Button";
import { IParticipationAccommodationForm } from "@/admin/model/participant/participantModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";

interface IAccommodationForm {
      slideToPrev: () => void;
      form: UseFormReturn<IParticipationAccommodationForm>;
      formSubmitHandler: (fields: (keyof IParticipationAccommodationForm)[]) => () => void;
}

function AccommodationForm({
      form: {
            register,
            formState: { errors },
      },
      slideToPrev,
      formSubmitHandler,
}: IAccommodationForm) {
      return (
            <div className="sm:grid-cols-2">
                  <Input type="date" label="Arrival Date" errorMessage={errors.arrivalDate?.message}>
                        {register("arrivalDate", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </Input>

                  <Input type="date" label="Departure Date" errorMessage={errors.departureDate?.message}>
                        {register("departureDate", {
                              required: {
                                    value: true,
                                    message: INPUT_ERROR_MESSAGE.empty,
                              },
                        })}
                  </Input>

                  <Input label="Transportation mode" errorMessage={errors.modeOfTransportation?.message}>
                        {register("modeOfTransportation")}
                  </Input>

                  <br className="hidden sm:flex" />
                  <Input label="Hotel Preference" errorMessage={errors.hotelPreferences?.message}>
                        {register("hotelPreferences")}
                  </Input>

                  <Input label="Room Preference" errorMessage={errors.roommatePreferences?.message}>
                        {register("roommatePreferences")}
                  </Input>
                  <span className="sm:col-span-2 w-full sm:w-fit place-self-end grid sm:grid-cols-2 gap-4">
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
                                    "arrivalDate",
                                    "departureDate",
                                    "modeOfTransportation",
                                    "hotelPreferences",
                                    "roommatePreferences",
                              ])}
                        />
                  </span>
            </div>
      );
}

export default AccommodationForm;
