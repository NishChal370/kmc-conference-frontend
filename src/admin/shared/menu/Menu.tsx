import { Fragment, ReactNode } from "react";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";

interface IMenu {
      children: ReactNode;
}

function Menu({ children }: IMenu) {
      return (
            <HeadlessMenu as="div" className="relative">
                  {children}
            </HeadlessMenu>
      );
}

export default Menu;

interface IMenuButton {
      children: ReactNode;
}

export function MenuButton({ children }: IMenuButton) {
      return (
            <HeadlessMenu.Button className="flex gap-2 items-center text-start">
                  {children}
            </HeadlessMenu.Button>
      );
}

interface IMenuItems {
      items: {
            title: string;
            clickHandler: () => void;
            icon: JSX.Element;
      }[];
}

export function MenuItems({ items }: IMenuItems) {
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
                  <HeadlessMenu.Items className="absolute right-0 top-10 flex flex-col gap-4  px-6 py-6 bg-white shadow-md w-40 rounded-lg text-sm">
                        {items.map(({ title, clickHandler, icon }, index: number) => (
                              <HeadlessMenu.Item key={index + "menu-items"}>
                                    {({ active }) => (
                                          <button
                                                type="button"
                                                className={`${
                                                      active ? "text-primary" : "text-default"
                                                } w-full flex items-center gap-3`}
                                                onClick={clickHandler}
                                          >
                                                {icon}

                                                {title}
                                          </button>
                                    )}
                              </HeadlessMenu.Item>
                        ))}
                  </HeadlessMenu.Items>
            </Transition>
      );
}
