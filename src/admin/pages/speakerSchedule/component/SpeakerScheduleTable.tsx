import {
      NestedChildTd,
      NestedChildTh,
      NestedChildTr,
      NestedChildTBody,
} from "@/admin/shared/table/nested-table";
import AppIcon from "@/shared/icon/AppIcon";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { ADMIN_SPEAKER_SCHEDULE_TABLE_HEADER } from "../data/adminSpeakerScheduleHeader";
import { Status } from "@/enum/commonEnum";
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";
import { ISpeakerScheduleBasicResponse } from "@/admin/model/speakerSchedule/speakerScheduleModel";

interface ISpeakerScheduleTable {
      speakerSchedules: ISpeakerScheduleBasicResponse;
      status: Status;
}
function SpeakerScheduleTable({ status, speakerSchedules }: ISpeakerScheduleTable) {
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
                                                                  clickHandler: () => () => {
                                                                        console.log("hello view");
                                                                  },
                                                            },
                                                            {
                                                                  title: "Delete",
                                                                  type: "Danger",
                                                                  icon: <AppIcon name="delete" />,
                                                                  clickHandler: () => () => {
                                                                        console.log("hello delete");
                                                                  },
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
