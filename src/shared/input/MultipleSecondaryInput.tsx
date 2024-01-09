import { Fragment } from "react";
import {
      ArrayPath,
      Control,
      Controller,
      FieldArray,
      FieldError,
      FieldErrorsImpl,
      FieldValues,
      Merge,
      Path,
      RegisterOptions,
      useFieldArray,
} from "react-hook-form";
import Button from "../button/Button";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import { IMultipleInputFields } from "@/models/input/multiplePhoneInputModel";

interface IMultipleInput<TControl extends FieldValues> {
      label?: string;
      isRequired?: boolean;
      placeholder?: string;
      name: ArrayPath<TControl>;
      control: Control<TControl>;
      containerClassName?: string;
      errorMessage?: Merge<
            FieldError,
            (Merge<FieldError, FieldErrorsImpl<IMultipleInputFields[0]>> | undefined)[]
      >;
      validation?:
            | Omit<
                    RegisterOptions<TControl, Path<TControl>>,
                    "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
              >
            | undefined;
}

const totalInput = {
      min: 1,
      max: 3,
};

const initialValue: IMultipleInputFields[0] = {
      value: "",
};

function MultipleSecondaryInput<TControl extends FieldValues>({
      name,
      label,
      control,
      isRequired = false,
      validation,
      placeholder,
      errorMessage,
      containerClassName,
}: IMultipleInput<TControl>) {
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
                              {Array.isArray(errorMessage) && errorMessage.at(0).value?.message && (
                                    <p className=" text-error text-xs self-end">
                                          {errorMessage.at(index)?.value?.message}
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
                                                name={`${name}[${index}].value` as Path<TControl>} // .value is taken from interface IMultipleInputFields
                                                rules={{
                                                      ...validation,
                                                      required: {
                                                            value: isRequired,
                                                            message: INPUT_ERROR_MESSAGE.empty,
                                                      },
                                                }}
                                                render={({ field: input }) => (
                                                      <input
                                                            id={`input-${field.id}`}
                                                            type={"type"}
                                                            className="border-0 w-full pl-2 py-2"
                                                            placeholder={placeholder ?? label}
                                                            value={input.value}
                                                            onChange={({ target }) =>
                                                                  input.onChange(target.value)
                                                            }
                                                      />
                                                )}
                                          />

                                          <Button
                                                type="button"
                                                variant="text"
                                                title="Remove"
                                                disable={fields.length === totalInput.min}
                                                onClickHandler={() => remove(index)}
                                                extraClassName={`text-xs
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

export default MultipleSecondaryInput;
