import AppIcon from "@/shared/icon/AppIcon";
import { Table, TableBody, TableHead, Td } from "@/admin/shared/table";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { CALL_FOR_PAPER_HEADER_LIST } from "../data/adminCallForPaperHeader";
import {
      IAdminCallForPaperDeleteRequest,
      IAdminCallForPaperViewModal,
      ICallForPaperBasicModel,
} from "@/admin/model/callForPaper/callForPaperModel";
import { Status, UserRole } from "@/enum/commonEnum";
import { NestedRowContainer, NestedRowWrapper } from "@/admin/shared/table/nested-table";
import CallForPaperSchedule from "../../callForPaperSchedule/CallForPaperSchedule";
import getIndex from "@/utils/uniqueId/getIndex";
import { ISortDetail } from "@/admin/model/commonModel";

interface IAdminCallForPaperTable {
      status: Status;
      currentPageNumber: number;
      callForPaperBasicInfo: ICallForPaperBasicModel[];
      sortDetail: ISortDetail<unknown, unknown>;
      sortHandler: (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
      openViewModalHandler: (viewingData: IAdminCallForPaperViewModal) => () => void;
      deleteCallForPaperDetailHandler: (deletingDetail: IAdminCallForPaperDeleteRequest) => () => void;
}

function AdminCallForPaperTable({
      status,
      currentPageNumber,
      callForPaperBasicInfo,
      sortDetail,
      sortHandler,
      openViewModalHandler,
      deleteCallForPaperDetailHandler,
}: IAdminCallForPaperTable) {
      return (
            <Table>
                  <TableHead
                        headers={CALL_FOR_PAPER_HEADER_LIST}
                        sortDetail={sortDetail}
                        sortHandler={sortHandler}
                  />

                  <TableBody status={status}>
                        <NestedRowContainer>
                              {({ selectedRowId, selectRowHandler }) =>
                                    callForPaperBasicInfo.map((callForPaper, index) => (
                                          <NestedRowWrapper
                                                key={callForPaper.id}
                                                childColSpan={CALL_FOR_PAPER_HEADER_LIST.length}
                                                presentRowId={callForPaper.id}
                                                selectedRowId={selectedRowId}
                                                parentTr={({ isOpen }) => (
                                                      <tr key={callForPaper.id} className="text-start">
                                                            <Td id="index" dataName="index">
                                                                  {getIndex({ currentPageNumber, index })}
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

                                                            <Td dataName="Email">{callForPaper.email}</Td>

                                                            <Td
                                                                  id="table-action-container"
                                                                  dataName="Action"
                                                                  className="md:!min-w-[10rem]"
                                                            >
                                                                  <TableActionButton
                                                                        extraButton={[
                                                                              {
                                                                                    title:
                                                                                          (isOpen
                                                                                                ? "Hide"
                                                                                                : "View") +
                                                                                          " Topics",
                                                                                    type: "View",

                                                                                    icon: (
                                                                                          <AppIcon
                                                                                                name="down-arrow"
                                                                                                className={`${
                                                                                                      isOpen
                                                                                                            ? "rotate-180"
                                                                                                            : "rotate-0"
                                                                                                }`}
                                                                                          />
                                                                                    ),
                                                                                    clickHandler: () =>
                                                                                          selectRowHandler(
                                                                                                callForPaper.id
                                                                                          ),
                                                                              },
                                                                        ]}
                                                                        items={[
                                                                              {
                                                                                    title: "View Detail",
                                                                                    type: "View",
                                                                                    icon: (
                                                                                          <AppIcon name="view" />
                                                                                    ),
                                                                                    clickHandler:
                                                                                          openViewModalHandler(
                                                                                                {
                                                                                                      id: callForPaper.id,
                                                                                                }
                                                                                          ),
                                                                              },
                                                                              {
                                                                                    title: "Delete",
                                                                                    allowToAllRole: false,
                                                                                    notAllowedRoles: [
                                                                                          UserRole.REVIEWER,
                                                                                          UserRole.READ_ONLY,
                                                                                    ],
                                                                                    type: "Danger",
                                                                                    icon: (
                                                                                          <AppIcon name="delete" />
                                                                                    ),
                                                                                    clickHandler:
                                                                                          deleteCallForPaperDetailHandler(
                                                                                                {
                                                                                                      callId: callForPaper.id,
                                                                                                }
                                                                                          ),
                                                                              },
                                                                        ]}
                                                                  />
                                                            </Td>
                                                      </tr>
                                                )}
                                          >
                                                {({ isOpen }) => (
                                                      <CallForPaperSchedule
                                                            isVisible={isOpen}
                                                            callForPaperName={callForPaper.name}
                                                            callForPaperId={callForPaper.id}
                                                      />
                                                )}
                                          </NestedRowWrapper>
                                    ))
                              }
                        </NestedRowContainer>
                  </TableBody>
            </Table>
      );
}

export default AdminCallForPaperTable;
