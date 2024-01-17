import { Fragment, ReactNode } from "react";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";

interface ITableMenu {
      children: ReactNode;
}

function TableMenu({ children }: ITableMenu) {
      return (
            <HeadlessMenu
                  as="div"
                  className="flex justify-end pr-7 
                        sm:pr-0 gap-2 sm:w-full sm:h-full sm:justify-center sm:items-center
                  "
            >
                  {children}
            </HeadlessMenu>
      );
}

export default TableMenu;

interface ITableMenuButton {
      children: ReactNode;
      message?: string;
      disabled?: boolean;
}

export function TableMenuButton({ children, message, disabled = false }: ITableMenuButton) {
      return (
            <HeadlessMenu.Button
                  className="flex gap-2 items-center text-start text-primary"
                  title={message}
                  disabled={disabled}
            >
                  {children}
            </HeadlessMenu.Button>
      );
}

export interface ITableMenuItems {
      items: {
            isVisible?: boolean;
            title: string;
            clickHandler: () => void;
            icon: JSX.Element;
            type?: "Danger" | "Update" | "View";
      }[];
}

export function TableMenuItems({ items }: ITableMenuItems) {
      return (
            <Transition
                  as={Fragment}
                  enter="transition ease-out duration-700"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-300"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
            >
                  <HeadlessMenu.Items
                        className="absolute z-10 -translate-x-0 translate-y-4 flex flex-col gap-4 px-5 py-6 bg-white border border-default/25 shadow-md min-w-[12rem] max-w-[20rem] rounded-md text-sm
                              sm:-translate-x-20 sm:translate-y-24
                        "
                  >
                        {items.map(
                              ({ title, clickHandler, icon, type, isVisible = true }, index: number) =>
                                    isVisible && (
                                          <HeadlessMenu.Item key={index + "menu-items"}>
                                                {({ active }) => (
                                                      <button
                                                            type="button"
                                                            className={`${
                                                                  type === "Danger" ? "text-error" : ""
                                                            }
                                                 ${
                                                       active
                                                             ? type === "Danger"
                                                                   ? "text-error/75"
                                                                   : type === "Update"
                                                                     ? "text-edit"
                                                                     : type === "View"
                                                                       ? "text-primary"
                                                                       : ""
                                                             : "text-default"
                                                 } 
                                                 w-full flex text-start items-center gap-4`}
                                                            onClick={clickHandler}
                                                      >
                                                            {icon}

                                                            {title}
                                                      </button>
                                                )}
                                          </HeadlessMenu.Item>
                                    )
                        )}
                  </HeadlessMenu.Items>
            </Transition>
      );
}
