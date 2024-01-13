import AppIcon from "@/shared/icon/AppIcon";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { IScheduleTopicModel } from "@/admin/model/scheduleTopic/scheduleTopicModel";
import { NestedTBody, NestedTd, NestedTh, NestedTr } from "@/admin/shared/table/nested-table";
import { Status } from "@/enum/commonEnum";
import { ADMIN_SESSION_TOPIC_TABLE_HEADER } from "../data/adminScheduleTopicHeaders";

interface IAdminScheduleTopicTable {
      status: Status;
      scheduleTopics: IScheduleTopicModel[];
}

function AdminScheduleTopicTable({ scheduleTopics, status }: IAdminScheduleTopicTable) {
      return (
            <>
                  <table className="w-full !h-full">
                        <NestedTh headers={ADMIN_SESSION_TOPIC_TABLE_HEADER} />
                        <NestedTBody status={status}>
                              <>
                                    {scheduleTopics.map((scheduleTopic, index) => (
                                          <NestedTr key={scheduleTopic.id}>
                                                <NestedTd id="index">{index + 1}</NestedTd>

                                                <NestedTd id="session-title">{scheduleTopic.title}</NestedTd>

                                                <NestedTd id="action">
                                                      <TableActionButton
                                                            items={[
                                                                  {
                                                                        title: "View Theme",
                                                                        type: "View",
                                                                        icon: <AppIcon name="view" />,
                                                                        clickHandler: () => {},
                                                                  },
                                                            ]}
                                                      />
                                                </NestedTd>
                                          </NestedTr>
                                    ))}
                              </>
                        </NestedTBody>
                  </table>
            </>
      );
}

export default AdminScheduleTopicTable;
