import AppIcon from "@/shared/icon/AppIcon";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { NestedTBody, NestedTd, NestedTh, NestedTr } from "@/admin/shared/table/nested-table";
import {
      IScheduleTopicDeleteRequest,
      IScheduleTopicModel,
} from "@/admin/model/scheduleTopic/scheduleTopicModel";
import { Status } from "@/enum/commonEnum";
import { ADMIN_SESSION_TOPIC_TABLE_HEADER } from "../data/adminScheduleTopicHeaders";

interface IAdminScheduleTopicTable {
      status: Status;
      scheduleTopics: IScheduleTopicModel[];
      viewButtonHandler: (viewingData: IScheduleTopicModel) => () => void;
      editButtonHandler: (data: { editingData: IScheduleTopicModel }) => () => void;
      deleteButtonHandler: (conferenceDayDetail: IScheduleTopicDeleteRequest) => () => void;
}

function AdminScheduleTopicTable({
      status,
      scheduleTopics,
      editButtonHandler,
      viewButtonHandler,
      deleteButtonHandler,
}: IAdminScheduleTopicTable) {
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
                                                                        title: "View",
                                                                        type: "View",
                                                                        icon: <AppIcon name="view" />,
                                                                        clickHandler:
                                                                              viewButtonHandler(
                                                                                    scheduleTopic
                                                                              ),
                                                                  },
                                                                  {
                                                                        title: "Update",
                                                                        type: "Update",
                                                                        icon: <AppIcon name="update" />,
                                                                        clickHandler: editButtonHandler({
                                                                              editingData: scheduleTopic,
                                                                        }),
                                                                  },
                                                                  {
                                                                        title: "Delete",
                                                                        type: "Danger",
                                                                        icon: <AppIcon name="delete" />,
                                                                        clickHandler: deleteButtonHandler({
                                                                              id: scheduleTopic.id,
                                                                        }),
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
