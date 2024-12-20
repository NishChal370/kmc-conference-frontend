import AppIcon from "@/shared/icon/AppIcon";
import { Table, TableBody, TableHead, Td } from "@/admin/shared/table";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import AdminScheduleTopic from "@/admin/pages/scheduleTopic/AdminScheduleTopic";
import { NestedRowWrapper, NestedRowContainer } from "@/admin/shared/table/nested-table";
import { Status, UserRole } from "@/enum/commonEnum";
import { IScheduleDeleteRequest, IScheduleModel } from "@/admin/model/schedule/scheduleModel";
import { ADMIN_SESSION_TABLE_HEADER } from "../data/adminScheduleHeaders";
import getIndex from "@/utils/uniqueId/getIndex";
import { ISortDetail } from "@/admin/model/commonModel";

interface IAdminScheduleTable {
      status: Status;
      currentPageNumber: number;
      schedules: IScheduleModel[];
      sortDetail?: ISortDetail<unknown, unknown>;
      sortHandler?: (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
      openTopicAddModalHandler: (data: IScheduleModel["id"]) => () => void;
      deleteScheduleHandler: (deletingDetail: IScheduleDeleteRequest) => void;
      editButtonHandler: (data: { editingData: IScheduleModel }) => () => void;
}

function AdminScheduleTable({
      schedules,
      status,
      sortDetail,
      sortHandler,
      currentPageNumber,
      editButtonHandler,
      deleteScheduleHandler,
      openTopicAddModalHandler,
}: IAdminScheduleTable) {
      return (
            <>
                  <Table>
                        <TableHead
                              headers={ADMIN_SESSION_TABLE_HEADER}
                              sortDetail={sortDetail}
                              sortHandler={sortHandler}
                        />

                        <TableBody status={status}>
                              <NestedRowContainer>
                                    {({ selectedRowId, selectRowHandler, closeRowHandler }) =>
                                          schedules.map((schedule, index) => (
                                                <NestedRowWrapper
                                                      key={schedule.id}
                                                      childColSpan={5}
                                                      presentRowId={schedule.id}
                                                      selectedRowId={selectedRowId}
                                                      parentTr={({ isOpen }) => (
                                                            <tr>
                                                                  <Td id="index" dataName="index">
                                                                        {getIndex({
                                                                              currentPageNumber,
                                                                              index,
                                                                        })}
                                                                  </Td>

                                                                  <Td
                                                                        id="title"
                                                                        dataName="Title"
                                                                        className="xs:text-start"
                                                                  >
                                                                        {schedule.title}
                                                                  </Td>

                                                                  <Td
                                                                        id="location"
                                                                        dataName="Location"
                                                                        className="xs:text-start"
                                                                  >
                                                                        {schedule.location}
                                                                  </Td>

                                                                  <Td
                                                                        id="time"
                                                                        dataName="Time"
                                                                        className="xs:text-start"
                                                                  >
                                                                        <>
                                                                              {schedule.startTime} -{" "}
                                                                              {schedule.endTime}
                                                                        </>
                                                                  </Td>

                                                                  <Td
                                                                        id="table-action-container"
                                                                        dataName="Action"
                                                                  >
                                                                        <TableActionButton
                                                                              menuAccess={{
                                                                                    message: "Not Allowed",
                                                                                    allowToAllRole: false,
                                                                                    notAllowedRoles: [
                                                                                          UserRole.REVIEWER,
                                                                                          UserRole.READ_ONLY,
                                                                                    ],
                                                                              }}
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
                                                                                                      schedule.id
                                                                                                ),
                                                                                    },
                                                                              ]}
                                                                              items={[
                                                                                    {
                                                                                          title: "Update",
                                                                                          type: "Update",
                                                                                          icon: (
                                                                                                <AppIcon name="update" />
                                                                                          ),
                                                                                          clickHandler:
                                                                                                editButtonHandler(
                                                                                                      {
                                                                                                            editingData:
                                                                                                                  schedule,
                                                                                                      }
                                                                                                ),
                                                                                    },
                                                                                    {
                                                                                          title: "Delete",
                                                                                          type: "Danger",

                                                                                          icon: (
                                                                                                <AppIcon name="delete" />
                                                                                          ),
                                                                                          clickHandler:
                                                                                                () => {
                                                                                                      closeRowHandler(
                                                                                                            schedule.id
                                                                                                      );
                                                                                                      deleteScheduleHandler(
                                                                                                            {
                                                                                                                  id: schedule.id,
                                                                                                            }
                                                                                                      );
                                                                                                },
                                                                                    },
                                                                                    {
                                                                                          title: "Add Topic",
                                                                                          type: "View",
                                                                                          icon: (
                                                                                                <AppIcon name="add" />
                                                                                          ),
                                                                                          clickHandler:
                                                                                                openTopicAddModalHandler(
                                                                                                      schedule.id
                                                                                                ),
                                                                                    },
                                                                              ]}
                                                                        />
                                                                  </Td>
                                                            </tr>
                                                      )}
                                                >
                                                      {({ isOpen }) => (
                                                            <AdminScheduleTopic
                                                                  isVisible={isOpen}
                                                                  scheduleId={schedule.id}
                                                            />
                                                      )}
                                                </NestedRowWrapper>
                                          ))
                                    }
                              </NestedRowContainer>
                        </TableBody>
                  </Table>
            </>
      );
}

export default AdminScheduleTable;
