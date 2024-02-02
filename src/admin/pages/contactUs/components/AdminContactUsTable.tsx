import {
      IContactUsDeleteRequest,
      IContactUsModel,
      IContactUsResponse,
      IContactUsUpdateForm,
} from "@/admin/model/contactUs/contactUsModel";
import { Table, TableBody, TableHead, Td } from "@/admin/shared/table";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { Status, UserRole } from "@/enum/commonEnum";
import { ContactReplyStatus } from "@/enum/contactUs/contactUsEnum";
import AppIcon from "@/shared/icon/AppIcon";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";
import getIndex from "@/utils/uniqueId/getIndex";
import { CONTACT_US_TABLE_HEADER } from "../data/adminContactUsTableHeader";

interface IAdminNewsTable {
      status: Status;
      currentPageNumber: number;
      contactUsDetails: IContactUsResponse["contactUs"];
      openEditStatusModalHandler: (editingData: IContactUsUpdateForm) => () => void;
      openViewModalHandler: (viewingData: IContactUsModel) => () => void;
      deleteNewsHandler: (deletingDetail: IContactUsDeleteRequest) => () => void;
}
function AdminContactUsTable({
      status,
      contactUsDetails,
      currentPageNumber,
      openEditStatusModalHandler,
      openViewModalHandler,
      deleteNewsHandler,
}: IAdminNewsTable) {
      return (
            <Table>
                  <TableHead headers={CONTACT_US_TABLE_HEADER} />

                  <TableBody status={status}>
                        <>
                              {contactUsDetails.map((contactUsDetail, index) => (
                                    <tr key={contactUsDetail.id}>
                                          <Td id="index" dataName="Index">
                                                {getIndex({ currentPageNumber, index })}
                                          </Td>

                                          <Td id="Date" dataName="Date" className="sm:text-start">
                                                {changeDateFormat(contactUsDetail.requestedDate)}
                                          </Td>

                                          <Td id="fullName" dataName="Full Name" className="sm:text-start">
                                                {contactUsDetail.fullName}
                                          </Td>

                                          <Td id="email" dataName="Email" className="sm:text-start break-all">
                                                {contactUsDetail.email}
                                          </Td>

                                          <Td id="subject" dataName="Subject" className="sm:text-start">
                                                {contactUsDetail.subject}
                                          </Td>

                                          <Td id="status" dataName="Reply Status" className="sm:text-start">
                                                {ContactReplyStatus[contactUsDetail.replyStatus]}
                                          </Td>

                                          <Td id="table-action-container" dataName="Action">
                                                <TableActionButton
                                                      items={[
                                                            {
                                                                  title: "View Detail",
                                                                  type: "View",
                                                                  icon: <AppIcon name="view" />,
                                                                  clickHandler:
                                                                        openViewModalHandler(contactUsDetail),
                                                            },
                                                            {
                                                                  allowToAllRole: false,
                                                                  notAllowedRoles: [
                                                                        UserRole.REVIEWER,
                                                                        UserRole.READ_ONLY,
                                                                  ],
                                                                  title: "Update Status",
                                                                  type: "Update",
                                                                  icon: <AppIcon name="update" />,
                                                                  clickHandler: openEditStatusModalHandler({
                                                                        fullName: contactUsDetail.fullName,
                                                                        email: contactUsDetail.email,
                                                                        id: contactUsDetail.id,
                                                                        status: contactUsDetail.replyStatus,
                                                                  }),
                                                            },
                                                            {
                                                                  allowToAllRole: false,
                                                                  notAllowedRoles: [
                                                                        UserRole.REVIEWER,
                                                                        UserRole.READ_ONLY,
                                                                  ],
                                                                  title: "Delete",
                                                                  type: "Danger",
                                                                  icon: <AppIcon name="delete" />,
                                                                  clickHandler: deleteNewsHandler({
                                                                        id: contactUsDetail.id,
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

export default AdminContactUsTable;
