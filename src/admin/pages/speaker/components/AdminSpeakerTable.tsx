import AppIcon from "@/shared/icon/AppIcon";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { Table, TableBody, TableHead, Td, Ti } from "@/admin/shared/table";
import { Status } from "@/enum/commonEnum";
import { SpeakerApprovalStatus } from "@/enum/speaker/speakerEnum";
import { SPEAKER_HEADER_LIST } from "../data/speakerHeaderList";
import { ISpeakerBasicInfo } from "@/models/speaker/SpeakerModel";
import { IAdminSpeakerEditModal } from "@/admin/model/speaker/adminSpeakerModel";

interface IAdminSpeakerTable {
      status: Status;
      speakersBasicInfo: ISpeakerBasicInfo[];
      openViewModal: ({ viewingData }: { viewingData: IAdminSpeakerEditModal }) => void;
      openEditModal: ({ editingData }: { editingData: IAdminSpeakerEditModal }) => void;
}

function AdminSpeakerTable({ openEditModal, openViewModal, status, speakersBasicInfo }: IAdminSpeakerTable) {
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

                                          <Ti image={speaker.photo} />

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
                                                                  clickHandler: () => {
                                                                        openViewModal({
                                                                              viewingData: {
                                                                                    speakerId: speaker.id,
                                                                              },
                                                                        });
                                                                  },
                                                            },
                                                            {
                                                                  title: "Update",
                                                                  type: "Update",
                                                                  icon: <AppIcon name="view" />,
                                                                  clickHandler: () => {
                                                                        openEditModal({
                                                                              editingData: {
                                                                                    speakerId: speaker.id,
                                                                              },
                                                                        });
                                                                  },
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
