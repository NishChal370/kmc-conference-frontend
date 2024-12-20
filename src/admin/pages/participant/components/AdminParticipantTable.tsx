import AppIcon from "@/shared/icon/AppIcon";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { Table, TableBody, TableHead, Td } from "@/admin/shared/table";
import {
      IAdminParticipantDeleteRequest,
      IAdminParticipantViewModal,
      IParticipantBasicModel,
} from "@/admin/model/participant/participantModel";
import { Status, UserRole } from "@/enum/commonEnum";
import { ADMIN_PARTICIPANT_HEADER_LIST } from "../data/adminParticipantHeader";
import getIndex from "@/utils/uniqueId/getIndex";
import { ISortDetail } from "@/admin/model/commonModel";

interface IAdminParticipantTable {
      status: Status;
      currentPageNumber: number;
      participantBasicInfo: IParticipantBasicModel[];
      sortDetail: ISortDetail<unknown, unknown>;
      sortHandler: (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
      openViewModalHandler: (viewingData: IAdminParticipantViewModal) => () => void;
      deleteParticipantDetailHandler: (deletingDetail: IAdminParticipantDeleteRequest) => () => void;
}

function AdminParticipantTable({
      status,
      currentPageNumber,
      participantBasicInfo,
      openViewModalHandler,
      sortDetail,
      sortHandler,
      deleteParticipantDetailHandler,
}: IAdminParticipantTable) {
      return (
            <Table>
                  <TableHead
                        headers={ADMIN_PARTICIPANT_HEADER_LIST}
                        sortDetail={sortDetail}
                        sortHandler={sortHandler}
                  />

                  <TableBody status={status}>
                        <>
                              {participantBasicInfo.map((participant, index) => (
                                    <tr key={participant.id} className="text-start">
                                          <Td id="index" dataName="index">
                                                {getIndex({ currentPageNumber: currentPageNumber, index })}
                                          </Td>

                                          <Td id="name" dataName="Name">
                                                {participant.name}
                                          </Td>

                                          <Td id="address" dataName="Address">
                                                {participant.address}
                                          </Td>

                                          <Td id="jobTitle" dataName="Job Title">
                                                {participant.jobTitle}
                                          </Td>

                                          <Td id="affiliation" dataName="Affiliation">
                                                {participant.affiliation}
                                          </Td>

                                          <Td id="registrationType" dataName="registrationType">
                                                {participant.registrationType}
                                          </Td>
                                          <Td id="table-action-container" dataName="Action">
                                                <TableActionButton
                                                      items={[
                                                            {
                                                                  title: "View Detail",
                                                                  type: "View",
                                                                  icon: <AppIcon name="view" />,
                                                                  clickHandler: openViewModalHandler({
                                                                        id: participant.id,
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
                                                                  clickHandler:
                                                                        deleteParticipantDetailHandler({
                                                                              id: participant.id,
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

export default AdminParticipantTable;
