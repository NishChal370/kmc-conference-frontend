import AppIcon from "@/shared/icon/AppIcon";
import { Table, TableBody, TableHead, Td } from "@/admin/shared/table";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { Status, UserRole } from "@/enum/commonEnum";
import {
      IAdminUserRoleChangeModal,
      IAdminUserStatusChangeModal,
      IUserModel,
} from "@/admin/model/user/userModel";
import { USER_HEADER_LIST } from "../data/userHeaderList";
import getIndex from "@/utils/uniqueId/getIndex";
import { UserStatus } from "@/enum/user/userEnum";
import replaceUnderscoreWithSpace from "@/utils/stringFormat/replaceUnderscoreWithSpace";

interface IAdminUserTable {
      status: Status;
      users: IUserModel[];
      currentPageNumber: number;
      openViewModalHandler: (viewingData: IUserModel) => () => void;
      openEditRoleModalHandler: (editingData: IAdminUserRoleChangeModal) => () => void;
      openEditStatusModalHandler: (editingData: IAdminUserStatusChangeModal) => () => void;
}

function AdminUserTable({
      users,
      currentPageNumber,
      status,
      openViewModalHandler,
      openEditRoleModalHandler,
      openEditStatusModalHandler,
}: IAdminUserTable) {
      return (
            <Table>
                  <TableHead headers={USER_HEADER_LIST} />

                  <TableBody status={status}>
                        <>
                              {users.map((user, index) => (
                                    <tr key={index} className="text-start">
                                          <Td id="index" dataName="index">
                                                {getIndex({ currentPageNumber, index })}
                                          </Td>

                                          <Td id="title" dataName="Title">
                                                {user.title}
                                          </Td>

                                          <Td id="fullName" dataName="Full Name">
                                                {user.fullName}
                                          </Td>

                                          <Td id="gender" dataName="Gender">
                                                {user.gender}
                                          </Td>

                                          <Td id="phone-number" dataName="Phone Number">
                                                {user.phoneNumber}
                                          </Td>

                                          <Td id="email" dataName="Email">
                                                {user.email}
                                          </Td>

                                          <Td id="status" dataName="Status">
                                                {replaceUnderscoreWithSpace(UserStatus[user.userStatus])}
                                          </Td>

                                          <Td id="table-action-container" dataName="Action">
                                                <TableActionButton
                                                      items={[
                                                            {
                                                                  title: "View Detail",
                                                                  type: "View",
                                                                  icon: <AppIcon name="view" />,
                                                                  clickHandler: openViewModalHandler(user),
                                                            },
                                                            {
                                                                  title: "Update Role",
                                                                  type: "Update",
                                                                  icon: <AppIcon name="update" />,
                                                                  allowToAllRole: false,
                                                                  notAllowedRoles: [
                                                                        UserRole.SITE_MANAGER,
                                                                        UserRole.REVIEWER,
                                                                        UserRole.READ_ONLY,
                                                                        UserRole.USER,
                                                                  ],
                                                                  clickHandler: openEditRoleModalHandler({
                                                                        id: user.id,
                                                                        fullName: user.fullName,
                                                                        userRole: user.userRole,
                                                                  }),
                                                            },
                                                            {
                                                                  title: "Update Status",
                                                                  type: "Update",
                                                                  icon: <AppIcon name="update" />,
                                                                  allowToAllRole: false,
                                                                  notAllowedRoles: [
                                                                        UserRole.REVIEWER,
                                                                        UserRole.READ_ONLY,
                                                                        UserRole.USER,
                                                                  ],
                                                                  clickHandler: openEditStatusModalHandler({
                                                                        id: user.id,
                                                                        fullName: user.fullName,
                                                                        userStatus: user.userStatus,
                                                                  }),
                                                            },
                                                      ]}
                                                />
                                          </Td>
                                    </tr>
                              ))}
                        </>
                  </TableBody>
            </Table>
      );
}

export default AdminUserTable;
