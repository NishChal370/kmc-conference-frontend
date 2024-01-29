import AppIcon from "@/shared/icon/AppIcon";
import { Table, TableBody, TableHead, Td } from "@/admin/shared/table";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { Status, UserRole } from "@/enum/commonEnum";
import { IAdminUserRoleChangeModal, IUserModel } from "@/admin/model/user/userModel";
import { USER_HEADER_LIST } from "../data/userHeaderList";
import getIndex from "@/utils/uniqueId/getIndex";

interface IAdminUserTable {
      status: Status;
      users: IUserModel[];
      currentPageNumber: number;
      openViewModalHandler: (viewingData: IUserModel) => () => void;
      openEditRoleModalHandler: (editingData: IAdminUserRoleChangeModal) => () => void;
}

function AdminUserTable({
      users,
      currentPageNumber,
      status,
      openViewModalHandler,
      openEditRoleModalHandler,
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
