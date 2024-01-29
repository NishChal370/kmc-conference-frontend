import AppIcon from "@/shared/icon/AppIcon";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import {
      NestedChildTd,
      NestedChildTh,
      NestedChildTr,
      NestedChildTBody,
} from "@/admin/shared/table/nested-table";
import { Status, UserRole } from "@/enum/commonEnum";
import { CallForPaperApprovalStatus } from "@/enum/callForPaper/callForPaperEnum";
import {
      ICallForPaperDeleteRequest,
      ICallForPaperScheduleApprovalStatusChangeModal,
      ICallForPaperScheduleResponse,
      ICallForPaperScheduleViewModal,
} from "@/admin/model/callForPaperSchedule/callForPaperScheduleModel";
import { CALL_FOR_PAPER_SCHEDULE_TABLE_HEADER } from "../data/callForPaperScheduleHeader";

interface ICallForPaperScheduleTable {
      status: Status;
      callForPaperSchedules: ICallForPaperScheduleResponse;
      openViewModalHandler: (viewingData: ICallForPaperScheduleViewModal) => () => void;
      openApprovalModalHandler: (
            approvalDetail: ICallForPaperScheduleApprovalStatusChangeModal
      ) => () => void;
      deleteCallForPaperScheduleHandler: (detail: ICallForPaperDeleteRequest) => () => void;
}

function CallForPaperScheduleTable({
      status,
      callForPaperSchedules,
      openViewModalHandler,
      openApprovalModalHandler,
      deleteCallForPaperScheduleHandler,
}: ICallForPaperScheduleTable) {
      return (
            <table className="w-full !h-full">
                  <NestedChildTh headers={CALL_FOR_PAPER_SCHEDULE_TABLE_HEADER} />

                  <NestedChildTBody status={status}>
                        <>
                              {callForPaperSchedules.map((callForPaperSchedule, index) => (
                                    <NestedChildTr key={callForPaperSchedule.callForPaperId}>
                                          <NestedChildTd id="index">{index + 1}</NestedChildTd>

                                          <NestedChildTd id="session-title">
                                                {callForPaperSchedule.title}
                                          </NestedChildTd>

                                          <NestedChildTd id="session-location">
                                                {callForPaperSchedule.location}
                                          </NestedChildTd>

                                          <NestedChildTd id="approval-status">
                                                {
                                                      CallForPaperApprovalStatus[
                                                            callForPaperSchedule.approvalStatus
                                                      ]
                                                }
                                          </NestedChildTd>

                                          <NestedChildTd id="action">
                                                <TableActionButton
                                                      items={[
                                                            {
                                                                  title: "View",
                                                                  type: "View",
                                                                  icon: <AppIcon name="view" />,
                                                                  clickHandler:
                                                                        openViewModalHandler(
                                                                              callForPaperSchedule
                                                                        ),
                                                            },
                                                            {
                                                                  allowToAllRole: false,
                                                                  notAllowedRoles: [UserRole.READ_ONLY],
                                                                  title: "Update Approval",
                                                                  type: "Update",
                                                                  icon: <AppIcon name="update" />,
                                                                  clickHandler: openApprovalModalHandler({
                                                                        callId: callForPaperSchedule.callForPaperId,
                                                                        sessionId:
                                                                              callForPaperSchedule.sessionId,
                                                                        callForPaperName: "", // it will be passed from parent component
                                                                        sessionTitle:
                                                                              callForPaperSchedule.title,
                                                                        approvalStatus:
                                                                              callForPaperSchedule.approvalStatus,
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
                                                                        deleteCallForPaperScheduleHandler({
                                                                              callId: callForPaperSchedule.callForPaperId,
                                                                              sessionId:
                                                                                    callForPaperSchedule.sessionId,
                                                                        }),
                                                            },
                                                      ]}
                                                />
                                          </NestedChildTd>
                                    </NestedChildTr>
                              ))}
                        </>
                  </NestedChildTBody>
            </table>
      );
}

export default CallForPaperScheduleTable;
