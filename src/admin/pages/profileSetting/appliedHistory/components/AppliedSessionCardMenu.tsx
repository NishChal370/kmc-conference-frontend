import { Menu } from "@headlessui/react";
import AppIcon from "@/shared/icon/AppIcon";
import { MenuButton, MenuItems } from "@/admin/shared/menu/Menu";

interface IAppliedSessionCardMenu {
      deleteButtonHandler: () => void;
}
function AppliedSessionCardMenu({ deleteButtonHandler }: IAppliedSessionCardMenu) {
      return (
            <Menu>
                  <MenuButton>
                        <AppIcon name="more-horizontal" />
                  </MenuButton>

                  <MenuItems
                        items={[
                              {
                                    title: "Delete",
                                    icon: <AppIcon name="delete" />,
                                    clickHandler: deleteButtonHandler,
                              },
                        ]}
                  />
            </Menu>
      );
}

export default AppliedSessionCardMenu;
