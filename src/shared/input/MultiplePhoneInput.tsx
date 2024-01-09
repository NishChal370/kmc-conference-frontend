import { Fragment } from "react";
import {
      Control,
      useFieldArray,
      ArrayPath,
      Controller,
      FieldArray,
      FieldValues,
      Path,
      Merge,
      FieldError,
      FieldErrorsImpl,
} from "react-hook-form";
import PhoneInputWithCountry, { isPossiblePhoneNumber } from "react-phone-number-input";
import Button from "../button/Button";
import { IMultiplePhoneNumberInput } from "@/models/input/multiplePhoneInputModel";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import "react-phone-number-input/style.css";

//NOTE: make sure you always pass the variable that have type {phone:string}[] i.e.  interface IMultiplePhoneNumberInput
interface IMultiplePhoneInput<TControl extends FieldValues> {
      name: ArrayPath<TControl>;
      control: Control<TControl>;
      isRequired?: boolean;
      label?: string;
      containerClassName?: string;
      errorMessage?: Merge<FieldError, (Merge<FieldError, FieldErrorsImpl<{ phone: string }>> | undefined)[]>;
}

const initialValue: IMultiplePhoneNumberInput[0] = {
      phone: "",
};

const totalInput = {
      min: 1,
      max: 3,
};

function MultiplePhoneInput<TControl extends FieldValues>({
      label,
      isRequired = false,
      control,
      name,
      errorMessage,
      containerClassName,
}: IMultiplePhoneInput<TControl>) {
      const { fields, append, remove } = useFieldArray({
            control,
            name: name,
      });

      return (
            <div className={`relative flex flex-col gap-2 ${containerClassName}`}>
                  <span className="flex w-full justify-between gap-1 pl-1">
                        <label
                              htmlFor={`input-${label}`}
                              className={`leading-none p-0 text-sm font-semibold tracking-wide
                                    ${errorMessage ? "text-error peer-focus:text-error" : "text-black"} 
                              `}
                        >
                              {label}
                        </label>
                  </span>

                  {fields.map((field, index) => (
                        <Fragment key={field.id}>
                              {Array.isArray(errorMessage) && errorMessage.at(0)?.phone?.message && (
                                    <p className=" text-error text-xs self-end">
                                          {errorMessage.at(index)?.phone?.message}
                                    </p>
                              )}
                              <section
                                    className={`group tracking-wide pr-2 border rounded-md flex items-center
                                          focus-within:border-black
                                          ${errorMessage ? "!border-error" : "border-default"} 
                                    `}
                              >
                                    <span className="w-full flex justify-center">
                                          <Controller
                                                control={control}
                                                name={`${name}[${index}].phone` as Path<TControl>} // .phone is taken from interface IMultiplePhoneNumberInput
                                                rules={{
                                                      required: {
                                                            value: isRequired,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                      validate: (value) => {
                                                            if (value && !isPossiblePhoneNumber(value)) {
                                                                  return INPUT_ERROR_MESSAGE.invalidContactNumber;
                                                            }
                                                      },
                                                }}
                                                render={({ field: input }) => (
                                                      <PhoneInputWithCountry
                                                            id={`input-phone-${field.id}`}
                                                            international
                                                            defaultCountry="NP"
                                                            className="border-0 w-full pl-2 py-2 placeholder:text-white/0 placeholder:text-[0rem]"
                                                            placeholder="Enter phone number"
                                                            countryCallingCodeEditable={true}
                                                            value={input.value}
                                                            onChange={(value) => input.onChange(value)}
                                                      />
                                                )}
                                          />

                                          <Button
                                                type="button"
                                                variant="text"
                                                title="Remove"
                                                disable={fields.length === totalInput.min}
                                                onClickHandler={() => remove(index)}
                                                extraClassName={` text-xs
                                                      ${fields.length === totalInput.min ? "!text-mute" : ""}
                                                `}
                                          />
                                    </span>
                              </section>
                        </Fragment>
                  ))}

                  <Button
                        type="button"
                        variant="text"
                        title="Add More"
                        disable={fields.length === totalInput.max}
                        suggestion={fields.length === totalInput.max ? "Three input is allowed" : ""}
                        extraClassName={`text-xs self-end
                              ${fields.length === totalInput.max ? "!text-mute" : " !text-default"}
                        `}
                        onClickHandler={() =>
                              append(initialValue as FieldArray<TControl, ArrayPath<TControl>>)
                        }
                  />
            </div>
      );
}

export default MultiplePhoneInput;
