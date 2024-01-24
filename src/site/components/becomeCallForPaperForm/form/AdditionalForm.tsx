import { Controller, UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import RichTextEditor from "@/shared/input/RichTextEditor";
import AgreementCheckBox from "@/shared/input/AgreementCheckBox";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { IParticipationPostAdditionalForm } from "@/admin/model/callForPaper/callForPaperApplyModel";

interface IAdditionalForm {
      slideToPrev: () => void;
      formContext: UseFormReturn<IParticipationPostAdditionalForm>;
}
function AdditionalForm({ slideToPrev, formContext: { control, watch } }: IAdditionalForm) {
      return (
            <>
                  <div>
                        <Controller
                              name="additionalRequirements"
                              control={control}
                              render={({ field, fieldState }) => (
                                    <RichTextEditor
                                          label="Additional Requirement"
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          placeHolder="Write your biography"
                                          errorMessage={fieldState.error?.message}
                                          containerClassName="md:col-span-2  pb-10 sm:pb-6 md:pb-0"
                                    />
                              )}
                        />

                        <span className="md:col-span-2 flex flex-col gap-4 w-full">
                              <Controller
                                    name="confirmPresent"
                                    control={control}
                                    rules={{
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    }}
                                    defaultValue={false}
                                    render={({ field }) => (
                                          <AgreementCheckBox
                                                label="I Agree to the Conference Dates"
                                                name="dates"
                                                checked={field.value}
                                                onChange={field.onChange}
                                          />
                                    )}
                              />

                              <Controller
                                    name="acceptTandC"
                                    control={control}
                                    rules={{
                                          required: {
                                                value: true,
                                                message: INPUT_ERROR_MESSAGE.empty,
                                          },
                                    }}
                                    defaultValue={false}
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
                              disable={!watch("acceptTandC") || !watch("confirmPresent")}
                              type="submit"
                              title="Submit"
                              extraClassName=" disabled:bg-primary/80  disabled:cursor-not-allowed disabled:active:!shadow-none"
                        />
                  </span>
            </>
      );
}

export default AdditionalForm;
