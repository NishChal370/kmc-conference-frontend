import AppIcon from "@/shared/icon/AppIcon";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { Table, TableBody, TableHead, Td, Ti } from "@/admin/shared/table";
import { SPEAKER_HEADER_LIST } from "../data/speakerHeaderList";
import {
      ISpeakerBasicModel,
      ISpeakerDeleteRequest,
      IAdminSpeakerStatusChangeModal,
      IAdminSpeakerViewOrEditModal,
} from "@/admin/model/speaker/adminSpeakerModel";
import { Status } from "@/enum/commonEnum";
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";

interface IAdminSpeakerTable {
      status: Status;
      speakersBasicInfo: ISpeakerBasicModel[];
      openEditModalHandler: (editingData: IAdminSpeakerViewOrEditModal) => () => void;
      openViewModalHandler: (viewingData: IAdminSpeakerViewOrEditModal) => () => void;
      deleteSpeakerDetailHandler: (deletingDetail: ISpeakerDeleteRequest) => () => void;
      openStatusChangeModalHandler: (speakerDetail: IAdminSpeakerStatusChangeModal) => () => void;
}

function AdminSpeakerTable({
      status,
      speakersBasicInfo,
      openEditModalHandler,
      openViewModalHandler,
      openStatusChangeModalHandler,
      deleteSpeakerDetailHandler,
}: IAdminSpeakerTable) {
      return (
            <Table>
                  <TableHead headers={SPEAKER_HEADER_LIST} />

                  <TableBody status={status}>
                        <>
                              {speakersBasicInfo.map((speaker, index) => (
                                    <tr key={index} className="text-start">
                                          <Td id="index" dataName="index">
                                                {index + 1}
                                          </Td>
                                          <Ti /> {/*//TODO:Add image here */}
                                          <Td dataName="Speaker Name">{speaker.name}</Td>
                                          <Td dataName="Designation">{speaker.jobTitle}</Td>
                                          <Td dataName="Company">{speaker.affiliation}</Td>
                                          <Td dataName="Approval Status">
                                                {SpeakerApprovalStatus[speaker.approvalStatus]}
                                          </Td>
                                          <Td id="table-action-container" dataName="Action">
                                                <TableActionButton
                                                      items={[
                                                            {
                                                                  title: "View Detail",
                                                                  type: "View",
                                                                  icon: <AppIcon name="view" />,
                                                                  clickHandler: openViewModalHandler({
                                                                        id: speaker.id,
                                                                  }),
                                                            },
                                                            {
                                                                  title: "Update Detail",
                                                                  type: "Update",
                                                                  icon: <AppIcon name="update" />,
                                                                  clickHandler: openEditModalHandler({
                                                                        id: speaker.id,
                                                                  }),
                                                            },
                                                            {
                                                                  title: "Update Status",
                                                                  type: "Update",
                                                                  icon: <AppIcon name="update" />,
                                                                  clickHandler: openStatusChangeModalHandler({
                                                                        id: speaker.id,
                                                                        approvalStatus:
                                                                              speaker.approvalStatus,
                                                                        speakerName: speaker.name,
                                                                  }),
                                                            },
                                                            {
                                                                  title: "Delete",
                                                                  type: "Danger",
                                                                  icon: <AppIcon name="delete" />,
                                                                  clickHandler: deleteSpeakerDetailHandler({
                                                                        speakerId: speaker.id,
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

export default AdminSpeakerTable;
