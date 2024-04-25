import { UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import SecondaryInput from "@/shared/input/SecondaryInput";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { IParticipationAccommodationForm } from "@/admin/model/participant/attendScheduleModel";

interface IAccommodationForm {
      slideToPrev: () => void;
      formSubmitHandler: () => void;
      form: UseFormReturn<IParticipationAccommodationForm>;
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
            <>
                  <div>
                        <SecondaryInput
                              isRequired
                              type="date"
                              label="Arrival Date"
                              allowBackDate={false}
                              errorMessage={errors.arrivalDate?.message}
                        >
                              {register("arrivalDate", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput
                              isRequired
                              type="date"
                              label="Departure Date"
                              allowBackDate={false}
                              errorMessage={errors.departureDate?.message}
                        >
                              {register("departureDate", {
                                    required: {
                                          value: true,
                                          message: INPUT_ERROR_MESSAGE.empty,
                                    },
                              })}
                        </SecondaryInput>

                        <SecondaryInput
                              label="Transportation mode"
                              errorMessage={errors.modeOfTransportation?.message}
                        >
                              {register("modeOfTransportation")}
                        </SecondaryInput>

                        <br className="hidden md:flex" />

                        <SecondaryInput
                              label="Hotel Preference"
                              errorMessage={errors.hotelPreferences?.message}
                        >
                              {register("hotelPreferences")}
                        </SecondaryInput>

                        <SecondaryInput
                              label="Room Preference"
                              errorMessage={errors.roommatePreferences?.message}
                        >
                              {register("roommatePreferences")}
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

export default AccommodationForm;
