import { Controller, UseFormReturn } from "react-hook-form";
import Button from "@/shared/button/Button";
import ToggleButton from "@/shared/button/ToggleButton";
import RichTextEditor from "@/shared/input/RichTextEditor";
import { IParticipationPostPreferenceForm } from "@/admin/model/callForPaper/callForPaperApplyModel";

interface IPreferenceForm {
      slideToPrev: () => void;
      formSubmitHandler: () => void;
      formContext: UseFormReturn<IParticipationPostPreferenceForm>;
}
function PreferenceForm({ formContext: { control }, slideToPrev, formSubmitHandler }: IPreferenceForm) {
      return (
            <>
                  <div>
                        <Controller
                              name="willParticipateInPanel"
                              control={control}
                              defaultValue={false}
                              render={({ field }) => (
                                    <ToggleButton
                                          label="Willing Participate In Panel"
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          buttonName={{
                                                one: "Yes, I will",
                                                two: "No, I can not",
                                          }}
                                    />
                              )}
                        />

                        <Controller
                              name="willParticipateInWorkshop"
                              control={control}
                              defaultValue={false}
                              render={({ field }) => (
                                    <ToggleButton
                                          label="Will Participate in Workshop"
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          buttonName={{
                                                one: "Yes, I will",
                                                two: "No, I can not",
                                          }}
                                    />
                              )}
                        />

                        <Controller
                              name="specialAccommodationNeeds"
                              control={control}
                              render={({ field, fieldState }) => (
                                    <RichTextEditor
                                          label="Special Accommodation Needs"
                                          value={field.value}
                                          onChangeHandler={field.onChange}
                                          placeHolder="Write your accommodation needs"
                                          errorMessage={fieldState.error?.message}
                                          containerClassName="md:col-span-2  pb-10 sm:pb-6 md:pb-0"
                                    />
                              )}
                        />
                  </div>

                  <span
                        className="flex  flex-col justify-end w-full self-end gap-6
                              md:flex-row md:w-fit md:min-w-[20rem]
                        "
                  >
                        <Button title="Previous" variant="outlined" onClickHandler={slideToPrev} />

                        <Button title="Next" onClickHandler={formSubmitHandler} />
                  </span>
            </>
      );
}

export default PreferenceForm;
