import { Fragment, ReactElement } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface IModal {
      toShow?: boolean;
      size: string; // format -> w-[size in %]
      title?: string;
      closeHandler?: () => void;
      children: ReactElement | undefined;
}

function Modal({ title, closeHandler, size, toShow = true, children }: IModal) {
      const initialScrollTop = () => {
            const modalContainer = document.querySelector(".scroll--container");
            if (modalContainer) {
                  modalContainer.scrollTo(0, 0);
            }
      };
      return (
            <Transition appear show={toShow} afterEnter={initialScrollTop} as={Fragment}>
                  <Dialog
                        as="div"
                        className="relative z-40 min-w-fit"
                        onClose={() => null} // this work like backDrop
                  >
                        <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-0"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in duration-1000"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                        >
                              <div className="fixed inset-0 bg-[#000000] bg-opacity-30 " />
                        </Transition.Child>

                        <div className="scroll--container fixed inset-0 overflow-y-auto">
                              <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                          as={Fragment}
                                          enter="ease-out duration-0"
                                          enterFrom="opacity-0 scale-95"
                                          enterTo="opacity-100 scale-100"
                                          leave="ease-in duration-1000"
                                          leaveFrom="opacity-100 scale-100"
                                          leaveTo="opacity-0 scale-95"
                                    >
                                          <Dialog.Panel
                                                className={
                                                      `flex flex-col gap-8  transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ` +
                                                      size
                                                }
                                          >
                                                <Dialog.Title
                                                      as="h3"
                                                      className={`text-lg leading-6 text-default flex ${
                                                            title ? "justify-between" : " justify-end"
                                                      }`}
                                                >
                                                      {title && (
                                                            <header className=" text-base  min-w-min tracking-wide font-semibold">
                                                                  {title}
                                                            </header>
                                                      )}

                                                      {closeHandler && (
                                                            <button
                                                                  type="button"
                                                                  className="hover:bg-mute-gray px-2 rounded-md font-bold text-base"
                                                                  onClick={closeHandler}
                                                            >
                                                                  X
                                                            </button>
                                                      )}
                                                </Dialog.Title>

                                                <Dialog.Description>{children}</Dialog.Description>
                                          </Dialog.Panel>
                                    </Transition.Child>
                              </div>
                        </div>
                  </Dialog>
            </Transition>
      );
}

export default Modal;
