import { Control, Controller, FieldValues, Path } from "react-hook-form";
import PhoneInputWithCountry, { isPossiblePhoneNumber } from "react-phone-number-input";
import { INPUT_ERROR_MESSAGE } from "@/constants/messages/inputErrorMessage";
import "react-phone-number-input/style.css";

interface IPhoneInput<TControl extends FieldValues> {
      name: Path<TControl>;
      control: Control<TControl>;
      isRequired?: boolean;
      label?: string;
      variant?: "primary" | "secondary";
      containerClassName?: string;
}

function PhoneInput<TControl extends FieldValues>({
      name,
      control,
      isRequired = false,
      label = "Phone",
      variant = "primary",
      containerClassName,
}: IPhoneInput<TControl>) {
      return (
            <Controller
                  name={name}
                  control={control}
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
                  render={({ field: { onChange, value }, formState: { errors } }) => (
                        <div
                              className={`relative flex flex-col 
                                    ${variant === "secondary" ? " justify-between gap-1" : "gap-0"}  
                                    ${containerClassName}`}
                        >
                              {variant === "secondary" ? (
                                    <span className="flex w-full justify-between gap-1 pl-1">
                                          <label
                                                htmlFor={`input-${label}`}
                                                className={`leading-none p-0 text-sm font-semibold tracking-wide
                                                      ${
                                                            errors[name]?.message
                                                                  ? "text-error peer-focus:text-error"
                                                                  : "text-black"
                                                      } 
                                                `}
                                          >
                                                {label}&nbsp;
                                                {isRequired && "*"}
                                          </label>

                                          {errors[name]?.message && (
                                                <p className=" text-error text-xs">
                                                      {errors[name]?.message as string}
                                                </p>
                                          )}
                                    </span>
                              ) : (
                                    errors[name]?.message && (
                                          <p className="absolute bottom-10 right-0 mt-1 text-error text-xs">
                                                {errors[name]?.message as string}
                                          </p>
                                    )
                              )}

                              <section
                                    className={`relative group tracking-wide pr-2 border rounded-md flex items-center
                                          focus-within:border-black
                                          ${errors[name]?.message ? "!border-error" : "border-default"} 
                                    `}
                              >
                                    <span className="w-full flex">
                                          <PhoneInputWithCountry
                                                id={`input-phone-${label}`}
                                                international
                                                defaultCountry="NP"
                                                className={`border-0 w-full pl-2 ${
                                                      variant === "primary" ? "py-2" : "py-1.5"
                                                }
                                                      placeholder:text-white/0 placeholder:text-[0rem]
                                                `}
                                                placeholder="Enter phone number"
                                                countryCallingCodeEditable={true}
                                                value={value || ""}
                                                onChange={onChange}
                                          />

                                          {variant === "primary" && (
                                                <label
                                                      htmlFor={`input-${label}`}
                                                      className={`absolute pointer-events-none start-2.5 top-0 leading-none -translate-y-[60%] bg-white p-0 transition-all 
                                                            ${
                                                                  value
                                                                        ? "top-0"
                                                                        : "top-1/2 text-white/0 bg-white/0"
                                                            }
                                                            ${
                                                                  errors[name]?.message
                                                                        ? "text-error"
                                                                        : value
                                                                          ? "text-black"
                                                                          : "text-mute"
                                                            } 
                                                      `}
                                                >
                                                      {label}
                                                </label>
                                          )}
                                    </span>
                              </section>
                        </div>
                  )}
            />
      );
}

export default PhoneInput;
