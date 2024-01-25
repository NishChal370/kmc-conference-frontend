import AppIcon from "@/shared/icon/AppIcon";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import {
      NestedChildTBody,
      NestedChildTd,
      NestedChildTh,
      NestedChildTr,
} from "@/admin/shared/table/nested-table";
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
                        <NestedChildTh headers={ADMIN_SESSION_TOPIC_TABLE_HEADER} />

                        <NestedChildTBody status={status}>
                              <>
                                    {scheduleTopics.map((scheduleTopic, index) => (
                                          <NestedChildTr key={scheduleTopic.id}>
                                                <NestedChildTd id="index">{index + 1}</NestedChildTd>

                                                <NestedChildTd id="session-title">
                                                      {scheduleTopic.title}
                                                </NestedChildTd>

                                                <NestedChildTd id="action">
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
                                                </NestedChildTd>
                                          </NestedChildTr>
                                    ))}
                              </>
                        </NestedChildTBody>
                  </table>
            </>
      );
}

export default AdminScheduleTopicTable;
