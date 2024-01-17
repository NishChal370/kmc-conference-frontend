import AppIcon from "@/shared/icon/AppIcon";
import TableExtraActionButton from "./TableExtraActionButton";
import TableMenu, { ITableMenuItems, TableMenuButton, TableMenuItems } from "./TableMenu";

interface ITableActionButton extends ITableMenuItems {
      message?: string;
      disabled?: boolean;
      extraButton?: ITableMenuItems["items"];
}

function TableActionButton({ items, message, disabled, extraButton }: ITableActionButton) {
      return (
            <TableMenu>
                  <TableMenuButton message={message} disabled={disabled}>
                        <AppIcon name="more-horizontal" />
                  </TableMenuButton>

                  <TableExtraActionButton extraButton={extraButton} />

                  <TableMenuItems items={items} />
            </TableMenu>
      );
}

export default TableActionButton;
