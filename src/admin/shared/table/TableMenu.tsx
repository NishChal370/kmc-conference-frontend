import { Fragment, ReactNode } from "react";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { UserRole } from "@/enum/commonEnum";
import getTokenDetail from "@/utils/token/getTokenDetail";

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
            allowToAllRole?: boolean;
            notAllowedRoles?: UserRole[];
            title: string;
            clickHandler: () => void;
            icon: JSX.Element;
            type?: "Danger" | "Update" | "View";
      }[];
}

export function TableMenuItems({ items }: ITableMenuItems) {
      const userRole = getTokenDetail.loggedInUserRole();
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
                        className="absolute z-10 right-[10%] flex flex-col gap-4 px-4 py-6 bg-white border border-default/25 shadow-md w-40 rounded-lg text-sm
                              sm:right-10 sm:left-auto
                        "
                  >
                        {items.map(
                              (
                                    {
                                          title,
                                          clickHandler,
                                          icon,
                                          type,
                                          allowToAllRole = true,
                                          notAllowedRoles = [],
                                    },
                                    index: number
                              ) =>
                                    (allowToAllRole ||
                                          (userRole ? !notAllowedRoles.includes(userRole) : false)) && (
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
