import { Controller, UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import AgreementCheckBox from "@/shared/input/AgreementCheckBox";
import MultiplePhoneInput from "@/shared/input/MultiplePhoneInput";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { ISpeakerAdditionalDetailAddFrom } from "@/admin/model/speaker/becomeSpeakerModel";

interface IAdditionalInformation {
      slideToPrev: () => void;
      formContext: UseFormReturn<ISpeakerAdditionalDetailAddFrom>;
}
function AdditionalInformation({
      slideToPrev,
      formContext: {
            watch,
            formState: { errors },
            control,
      },
}: IAdditionalInformation) {
      return (
            <>
                  <div className="!flex flex-col gap-6 w-full">
                        <MultiplePhoneInput
                              control={control}
                              label="Reference Contact"
                              name="referenceContacts"
                              errorMessage={errors.referenceContacts}
                        />

                        <span className="!flex flex-col gap-4 w-full">
                              <Controller
                                    name="agreedToDates"
                                    control={control}
                                    rules={{
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    }}
                                    render={({ field }) => (
                                          <AgreementCheckBox
                                                label="I Agree to the Conference Participation Dates"
                                                name="dates"
                                                checked={field.value}
                                                onChange={field.onChange}
                                          />
                                    )}
                              />

                              <Controller
                                    name="agreedTandC"
                                    control={control}
                                    rules={{
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    }}
                                    render={({ field }) => (
                                          <AgreementCheckBox
                                                label="I Agree to the Terms and Conditions"
                                                name="term"
                                                checked={field.value}
                                                onChange={field.onChange}
                                          />
                                    )}
                              />
                        </span>
                  </div>
                  <span
                        className="flex  flex-col justify-end w-full  md:min-w-[20rem] self-end gap-6
                              md:flex-row md:w-fit 
                        "
                  >
                        <Button title="Previous" variant="outlined" onClickHandler={slideToPrev} />

                        <Button
                              disable={!watch("agreedToDates") || !watch("agreedTandC")}
                              type="submit"
                              title="Submit"
                              extraClassName=" disabled:bg-primary/80  disabled:cursor-not-allowed disabled:active:!shadow-none"
                        />
                  </span>
            </>
      );
}

export default AdditionalInformation;
