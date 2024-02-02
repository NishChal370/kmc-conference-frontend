import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import AppIcon from "../icon/AppIcon";
import { Status } from "@/enum/commonEnum";
import { IApiErrorDetail } from "@/models/commonModel";
import LoadingMessage from "../loading/LoadingMessage";
import ErrorMessage from "../errorMessage/ErrorMessage";
import NotFoundMessage from "../errorMessage/NotFoundMessage";

interface IData {
      id: string | number;
      value: string | number;
}

interface IDropDownInput {
      label: string;
      isRequired?: boolean;
      errorMessage?: string;
      data: IData[];
      selected?: IData;
      onChangeHandler: (data: IData) => void;
      status: Status;
      apiError?: IApiErrorDetail;
}

/**
 * This component should be used when dropdown input is depend upon api response/data
 */
function DropDownInput({
      label,
      isRequired,
      errorMessage,
      selected,
      onChangeHandler,
      data,
      status,
      apiError,
}: IDropDownInput) {
      return (
            //NOTE: In value if we don't add empty object when `selected` is `undefined` then previous selected status will not be removed from the List box.
            <Listbox by="id" value={selected || {}} onChange={onChangeHandler}>
                  <div className="relative">
                        <div className="tracking-wide  flex flex-col gap-2 items-start w-full text-sm">
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
                                          <p className=" text-error text-xs">{errorMessage as string}</p>
                                    )}
                              </span>
                              <Listbox.Button
                                    className={`relative border border-default rounded-md w-full px-2 py-2 text-start ${
                                          selected?.id ? "text-default" : "text-mute"
                                    }`}
                              >
                                    {({ open }) => (
                                          <>
                                                <span className="block truncate">
                                                      {selected?.id ? selected.value : label}
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
                        </div>

                        <Transition
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                        >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {status === Status.FAILED && (
                                          <ErrorMessage
                                                title={apiError?.title}
                                                detail={apiError?.detail}
                                                traceId={apiError?.traceId}
                                          />
                                    )}

                                    {status === Status.DATA_NOT_FOUND && <NotFoundMessage />}

                                    {(status === Status.IDEL || status === Status.LOADING) && (
                                          <LoadingMessage needHeader={false} />
                                    )}

                                    {data.map((option) => (
                                          <Listbox.Option
                                                key={option.id}
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

export default DropDownInput;
