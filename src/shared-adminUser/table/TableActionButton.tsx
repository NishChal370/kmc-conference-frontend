import AppIcon from "@/shared/icon/AppIcon";
import TableMenu, { ITableMenuItems, TableMenuButton, TableMenuItems } from "./TableMenu";

interface ITableActionButton extends ITableMenuItems {
      message?: string;
      disabled?: boolean;
}

function TableActionButton({ items, message, disabled }: ITableActionButton) {
      return (
            <TableMenu>
                  <TableMenuButton message={message} disabled={disabled}>
                        <AppIcon name="more-horizontal" />
                  </TableMenuButton>

                  <TableMenuItems items={items} />
            </TableMenu>
      );
}

export default TableActionButton;
