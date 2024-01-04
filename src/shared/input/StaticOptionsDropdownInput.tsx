import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import AppIcon from "../icon/AppIcon";

interface IData {
      id: string | number;
      value: string | number;
}

interface IStaticOptionsDropdownInput {
      name: string;
      data: IData[];
      selected?: IData;
      errorMessage?: string;
      onChangeHandler?: (data: IData) => void;
}

function StaticOptionsDropdownInput({
      name,
      data,
      selected,
      onChangeHandler,
      errorMessage,
}: IStaticOptionsDropdownInput) {
      return (
            //NOTE: In value if we don't add empty object when `selected` is `undefined` then previous selected status will not be removed from the List box.
            <Listbox by="id" value={selected || {}} onChange={onChangeHandler}>
                  <div className="relative w-full min-w-[14rem]">
                        {errorMessage && <p className="self-end text-error text-xs">{errorMessage}</p>}

                        <div className="relative group tracking-wide items-start w-full min-w-fit text-sm">
                              <Listbox.Button
                                    className={`relative border border-default rounded-md w-full px-2 py-1.5 text-start ${
                                          selected?.value ? "text-default" : "text-mute"
                                    }`}
                              >
                                    {({ open }) => (
                                          <>
                                                <span className="flex items-center truncate min-h-[1.6rem]">
                                                      {selected?.value ? selected.value : ""}
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
                                    htmlFor="userInput"
                                    className={`absolute pointer-events-none start-2.5 top-0 leading-none  -translate-y-[60%] bg-white p-0 transition-all 
                                          text-mute  peer-focus:text-black
                                          ${
                                                errorMessage
                                                      ? "text-error peer-focus:text-error"
                                                      : "text-mute peer-focus:text-black "
                                          } 
                                    `}
                              >
                                    {name}
                              </label>
                        </div>

                        <Transition
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                        >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {data.map((product) => (
                                          <Listbox.Option
                                                key={product.id}
                                                className={({ active }) =>
                                                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                            active
                                                                  ? "bg-primary/10 text-primary"
                                                                  : "text-gray-900"
                                                      }`
                                                }
                                                value={product}
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
                                                                  {product.value}
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
