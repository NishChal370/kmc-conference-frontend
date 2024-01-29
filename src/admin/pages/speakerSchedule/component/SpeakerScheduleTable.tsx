import {
      NestedChildTd,
      NestedChildTh,
      NestedChildTr,
      NestedChildTBody,
} from "@/admin/shared/table/nested-table";
import AppIcon from "@/shared/icon/AppIcon";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { ADMIN_SPEAKER_SCHEDULE_TABLE_HEADER } from "../data/adminSpeakerScheduleHeader";
import { Status, UserRole } from "@/enum/commonEnum";
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";
import {
      ISpeakerScheduleApprovalStatusChangeModal,
      ISpeakerScheduleResponse,
      ISpeakerScheduleDeleteAdminReq,
      ISpeakerScheduleViewModal,
} from "@/admin/model/speakerSchedule/speakerScheduleModel";

interface ISpeakerScheduleTable {
      status: Status;
      speakerSchedules: ISpeakerScheduleResponse;
      openViewModalHandler: (detail: ISpeakerScheduleViewModal) => () => void;
      deleteSessionHandler: (sessionId: ISpeakerScheduleDeleteAdminReq["sessionId"]) => () => void;
      openApprovalStatusModalHandler: (data: ISpeakerScheduleApprovalStatusChangeModal) => () => void;
}
function SpeakerScheduleTable({
      status,
      speakerSchedules,
      openViewModalHandler,
      deleteSessionHandler,
      openApprovalStatusModalHandler,
}: ISpeakerScheduleTable) {
      return (
            <table className="!w-full !h-full">
                  <NestedChildTh headers={ADMIN_SPEAKER_SCHEDULE_TABLE_HEADER} />

                  <NestedChildTBody status={status}>
                        <>
                              {speakerSchedules.map((speakerSchedule, index) => (
                                    <NestedChildTr key={speakerSchedule.sessionId}>
                                          <NestedChildTd id="index">{index + 1}</NestedChildTd>

                                          <NestedChildTd id="session-title">
                                                {speakerSchedule.title}
                                          </NestedChildTd>

                                          <NestedChildTd id="session-approval-status">
                                                {SpeakerApprovalStatus[speakerSchedule.approvalStatus]}
                                          </NestedChildTd>

                                          <NestedChildTd id="action">
                                                <TableActionButton
                                                      items={[
                                                            {
                                                                  title: "View",
                                                                  type: "View",
                                                                  icon: <AppIcon name="view" />,
                                                                  clickHandler:
                                                                        openViewModalHandler(speakerSchedule),
                                                            },
                                                            {
                                                                  allowToAllRole: false,
                                                                  notAllowedRoles: [UserRole.READ_ONLY],
                                                                  title: "Update Approval",
                                                                  type: "Update",
                                                                  icon: <AppIcon name="update" />,
                                                                  clickHandler:
                                                                        openApprovalStatusModalHandler({
                                                                              id: -1, // this is kept -1 here, cause. the speaker id will be passed from speaker table   parent component.
                                                                              speakerName: "", // this is kept empty string here, cause. the speaker name will be passed from speaker table parent component.
                                                                              sessionId:
                                                                                    speakerSchedule.sessionId,
                                                                              sessionTitle:
                                                                                    speakerSchedule.title,
                                                                              approvalStatus:
                                                                                    speakerSchedule.approvalStatus,
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
                                                                  clickHandler: deleteSessionHandler(
                                                                        speakerSchedule.sessionId
                                                                  ),
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

export default SpeakerScheduleTable;
