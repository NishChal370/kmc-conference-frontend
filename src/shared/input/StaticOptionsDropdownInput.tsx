import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import AppIcon from "../icon/AppIcon";
import { IDropdownOptionModel } from "@/models/input/dropDownModel";

interface IStaticOptionsDropdownInput {
      label: string;
      data: IDropdownOptionModel[];
      selected?: IDropdownOptionModel;
      errorMessage?: string;
      onChangeHandler?: (data: IDropdownOptionModel) => void;
}

function StaticOptionsDropdownInput({
      label,
      data,
      selected,
      onChangeHandler,
      errorMessage,
}: IStaticOptionsDropdownInput) {
      return (
            //NOTE: In value if we don't add empty object when `selected` is `undefined` then previous selected status will not be removed from the List box.
            <Listbox by="value" value={selected || {}} onChange={onChangeHandler}>
                  <div className="relative w-full min-w-[14rem] flex flex-col gap-0">
                        {errorMessage && (
                              <p className="absolute -top-5 right-0 mt-1 text-error text-xs">
                                    {errorMessage}
                              </p>
                        )}

                        <div className="relative group tracking-wide items-start w-full min-w-fit text-sm">
                              <Listbox.Button
                                    className={`relative border rounded-md w-full px-2 py-1.5 text-start ${
                                          selected?.value ? "text-default" : "text-mute"
                                    } ${errorMessage ? "!border-error" : "border-default"} `}
                              >
                                    {({ open }) => (
                                          <>
                                                <span className="flex items-center truncate min-h-[1.6rem]">
                                                      {selected?.value ? selected?.value : ""}
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

                              <label
                                    htmlFor={`dropdown-${label}`}
                                    className={`absolute pointer-events-none start-2.5 top-0 leading-none bg-white p-0 transition-all 
                                          ${selected?.value ? "-translate-y-[60%]" : "top-[34%]"}
                                          ${
                                                errorMessage
                                                      ? "text-error peer-focus:text-error"
                                                      : "text-mute peer-focus:text-black "
                                          } 
                                    `}
                              >
                                    {label}
                              </label>
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
                                                key={option.value}
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
                                                                  {option.value}
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
