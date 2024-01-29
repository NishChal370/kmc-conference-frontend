import AppIcon from "@/shared/icon/AppIcon";
import TableExtraActionButton from "./TableExtraActionButton";
import TableMenu, { ITableMenuItems, TableMenuButton, TableMenuItems } from "./TableMenu";
import { UserRole } from "@/enum/commonEnum";
import getTokenDetail from "@/utils/token/getTokenDetail";

interface ITableActionButton extends ITableMenuItems {
      menuAccess?: {
            allowToAllRole: boolean;
            notAllowedRoles: UserRole[];
            message?: string;
      };
      extraButton?: ITableMenuItems["items"];
}

function TableActionButton({
      items,
      extraButton,
      menuAccess = { allowToAllRole: true, notAllowedRoles: [] },
}: ITableActionButton) {
      const userRole = getTokenDetail.loggedInUserRole();
      return (
            <TableMenu>
                  <TableMenuButton
                        message={menuAccess.message}
                        disabled={
                              menuAccess.allowToAllRole
                                    ? false
                                    : userRole
                                      ? menuAccess.notAllowedRoles.includes(userRole)
                                      : true
                        }
                  >
                        <AppIcon name="more-horizontal" />
                  </TableMenuButton>

                  <TableMenuItems items={items} />

                  <TableExtraActionButton extraButton={extraButton} />
            </TableMenu>
      );
}

export default TableActionButton;
