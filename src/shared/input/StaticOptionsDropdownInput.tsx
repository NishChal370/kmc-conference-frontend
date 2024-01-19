import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import AppIcon from "../icon/AppIcon";
import { IDropdownOptionModel } from "@/models/input/dropDownModel";

interface IStaticOptionsDropdownInput {
      label: string;
      isRequired?: boolean;
      errorMessage?: string;
      data: IDropdownOptionModel[];
      selected?: IDropdownOptionModel;
      variant?: "primary" | "secondary";
      onChangeHandler?: (data: IDropdownOptionModel) => void;
}

function StaticOptionsDropdownInput({
      data,
      label,
      selected,
      errorMessage,
      onChangeHandler,
      isRequired = false,
      variant = "primary",
}: IStaticOptionsDropdownInput) {
      return (
            //NOTE: In value if we don't add empty object when `selected` is `undefined` then previous selected status will not be removed from the List box.
            <Listbox by="value" value={selected || {}} onChange={onChangeHandler}>
                  <div
                        className={`relative w-full min-w-[14rem] flex flex-col 
                              ${variant === "secondary" ? "justify-between gap-1" : "gap-0"}
                        `}
                  >
                        {variant === "secondary" ? (
                              <span className="flex w-full justify-between gap-1 pl-1">
                                    <label
                                          htmlFor={`input-${label}`}
                                          className={`leading-none p-0 text-sm font-semibold tracking-wide
                                                      ${
                                                            errorMessage
                                                                  ? "text-error peer-focus:text-error"
                                                                  : "text-black"
                                                      } 
                                                `}
                                    >
                                          {label}&nbsp;
                                          {isRequired && "*"}
                                    </label>

                                    {errorMessage && (
                                          <p className="text-error text-xs">{errorMessage as string}</p>
                                    )}
                              </span>
                        ) : (
                              errorMessage && (
                                    <p className="absolute -top-5 right-0 mt-1 text-error text-xs">
                                          {errorMessage}
                                    </p>
                              )
                        )}

                        <div className="relative group tracking-wide items-start w-full min-w-fit text-base">
                              <Listbox.Button
                                    className={`relative border rounded-md w-full px-2 py-1.5 text-start ${
                                          selected?.value ? "text-default" : "text-mute"
                                    } ${errorMessage ? "!border-error" : "border-default"} `}
                              >
                                    {({ open }) => (
                                          <>
                                                <span className="flex items-center truncate text-base min-h-[1.6rem]">
                                                      {selected?.option ? selected?.option : label}
                                                </span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                      <AppIcon
                                                            name="down-arrow"
                                                            className={open ? "rotate-180" : "rotate-0"}
                                                      />
                                                </span>
                                          </>
                                    )}
                              </Listbox.Button>

                              {variant === "primary" && (
                                    <label
                                          htmlFor={`dropdown-${label}`}
                                          className={`absolute pointer-events-none start-2.5 top-0 leading-none bg-white p-0 transition-all 
                                                ${
                                                      selected?.value.toString()
                                                            ? "-translate-y-[60%]"
                                                            : "top-[34%]"
                                                }
                                                ${
                                                      errorMessage
                                                            ? "text-error peer-focus:text-error"
                                                            : "text-mute peer-focus:text-black "
                                                } 
                                          `}
                                    >
                                          {label}
                                    </label>
                              )}
                        </div>

                        <Transition
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                        >
                              <Listbox.Options className="absolute z-10 top-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {data.map((option) => (
                                          <Listbox.Option
                                                key={option.value.toString()}
                                                className={({ active }) =>
                                                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                            active
                                                                  ? "bg-primary/10 text-primary"
                                                                  : "text-gray-900"
                                                      }`
                                                }
                                                value={option}
                                          >
                                                {({ selected }) => (
                                                      <>
                                                            <span
                                                                  className={`block truncate ${
                                                                        selected
                                                                              ? "font-medium"
                                                                              : "font-normal"
                                                                  }`}
                                                            >
                                                                  {option.option}
                                                            </span>
                                                            {selected ? (
                                                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                                                        <AppIcon name="tick" />
                                                                  </span>
                                                            ) : null}
                                                      </>
                                                )}
                                          </Listbox.Option>
                                    ))}
                              </Listbox.Options>
                        </Transition>
                  </div>
            </Listbox>
      );
}

export default StaticOptionsDropdownInput;
