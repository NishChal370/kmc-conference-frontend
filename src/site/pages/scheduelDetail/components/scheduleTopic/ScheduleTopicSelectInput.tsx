import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import AppIcon from "@/shared/icon/AppIcon";
import { IScheduleContentBriefDetailModel } from "@/admin/model/schedule/scheduleContentModel";

interface IScheduleTopicSelectInput {
      options: IScheduleContentBriefDetailModel["sessionTopics"];
      value?: IScheduleContentBriefDetailModel["sessionTopics"][0];
      onChangeHandler: (...event: any[]) => void;
}
function ScheduleTopicSelectInput({ options, value, onChangeHandler }: IScheduleTopicSelectInput) {
      return (
            <Listbox by="id" value={value} onChange={onChangeHandler}>
                  <div className={`relative w-full min-w-[14rem] flex flex-col gap-0`}>
                        <Listbox.Button
                              title="Session Title"
                              className={`relative border-b border-mute-1 w-full px-0 py-1.5 text-start`}
                        >
                              {({ open }) => (
                                    <>
                                          <span className="flex items-center  font-medium truncate min-h-[1.6rem] text-2xl pr-6">
                                                {value ? value.title : "Session Topics"}
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

                        <Transition
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                        >
                              <Listbox.Options className="absolute z-10 top-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {options.map((option) => (
                                          <Listbox.Option
                                                key={option.id.toString()}
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
                                                                  {option.title}
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

export default ScheduleTopicSelectInput;
