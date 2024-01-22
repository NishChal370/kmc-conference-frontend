import AppIcon from "@/shared/icon/AppIcon";
import { Table, TableBody, TableHead, Td } from "@/admin/shared/table";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { CALL_FOR_PAPER_HEADER_LIST } from "../data/adminCallForPaperHeader";
import {
      IAdminCallForPaperDeleteRequest,
      IAdminCallForPaperStatusChangeModal,
      IAdminCallForPaperViewOrEditModal,
      ICallForPaperBasicModel,
} from "@/admin/model/callForPaper/callForPaperModel";
import { Status } from "@/enum/commonEnum";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";

interface IAdminCallForPaperTable {
      status: Status;
      callForPaperBasicInfo: ICallForPaperBasicModel[];
      openEditModalHandler: (editingData: IAdminCallForPaperViewOrEditModal) => () => void;
      openViewModalHandler: (viewingData: IAdminCallForPaperViewOrEditModal) => () => void;
      deleteCallForPaperDetailHandler: (deletingDetail: IAdminCallForPaperDeleteRequest) => () => void;
      openStatusChangeModalHandler: (speakerDetail: IAdminCallForPaperStatusChangeModal) => () => void;
}

function AdminCallForPaperTable({
      status,
      callForPaperBasicInfo,
      openEditModalHandler,
      openViewModalHandler,
      openStatusChangeModalHandler,
      deleteCallForPaperDetailHandler,
}: IAdminCallForPaperTable) {
      return (
            <Table>
                  <TableHead headers={CALL_FOR_PAPER_HEADER_LIST} />

                  <TableBody status={status}>
                        <>
                              {callForPaperBasicInfo.map((callForPaper, index) => (
                                    <tr key={callForPaper.id} className="text-start">
                                          <Td id="index" dataName="index">
                                                {index + 1}
                                          </Td>

                                          <Td id="name" dataName="Name">
                                                {callForPaper.name}
                                          </Td>

                                          <Td id="designation" dataName="Designation">
                                                {callForPaper.jobTitle}
                                          </Td>

                                          <Td id="affiliation" dataName="Affiliation">
                                                {callForPaper.affiliation}
                                          </Td>

                                          <Td dataName="Approval Status">
                                                {CallForPaperApprovalStatus[callForPaper.approvalStatus]}
                                          </Td>

                                          <Td id="table-action-container" dataName="Action">
                                                <TableActionButton
                                                      items={[
                                                            {
                                                                  title: "View Detail",
                                                                  type: "View",
                                                                  icon: <AppIcon name="view" />,
                                                                  clickHandler: openViewModalHandler({
                                                                        id: callForPaper.id,
                                                                  }),
                                                            },
                                                            {
                                                                  title: "Update Detail",
                                                                  type: "Update",
                                                                  icon: <AppIcon name="update" />,
                                                                  clickHandler: openEditModalHandler({
                                                                        id: callForPaper.id,
                                                                  }),
                                                            },
                                                            {
                                                                  title: "Update Status",
                                                                  type: "Update",
                                                                  icon: <AppIcon name="update" />,
                                                                  clickHandler: openStatusChangeModalHandler({
                                                                        id: callForPaper.id,
                                                                        callForPaperName: callForPaper.name,
                                                                        approvalStatus:
                                                                              callForPaper.approvalStatus,
                                                                  }),
                                                            },
                                                            {
                                                                  title: "Delete",
                                                                  type: "Danger",
                                                                  icon: <AppIcon name="delete" />,
                                                                  clickHandler:
                                                                        deleteCallForPaperDetailHandler({
                                                                              callId: callForPaper.id,
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

export default AdminCallForPaperTable;
