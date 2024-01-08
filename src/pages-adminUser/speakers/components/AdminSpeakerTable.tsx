import { Status } from "@/enum/commonEnum";
import AppIcon from "@/shared/icon/AppIcon";
import { Table, TableBody, TableHead, Td } from "@/shared-adminUser/table";
import TableActionButton from "@/shared-adminUser/table/TableActionButton";
import { SPEAKER_HEADER_LIST } from "../data/speakerHeaderList";
import { SPEAKERS_DETAILS } from "@/pages-normalUser/speakers/seed.tsx/speakersDetailList";

interface IAdminSpeakerTable {
      openEditModal: ({ editingData }: { editingData: string }) => void;
}

function AdminSpeakerTable({ openEditModal }: IAdminSpeakerTable) {
      return (
            <Table>
                  <TableHead headers={SPEAKER_HEADER_LIST} />

                  <TableBody status={Status.SUCCEEDED}>
                        <>
                              {SPEAKERS_DETAILS.map((speaker, index) => (
                                    <tr key={index} className="text-start">
                                          <Td id="index" dataName="index">
                                                {index + 1}
                                          </Td>

                                          <Td dataName="" className="w-full sm:!w-fit">
                                                <span className="w-full h-full flex sm:justify-center items-center">
                                                      <img
                                                            className="w-8 h-8 object-cover"
                                                            src={speaker.image}
                                                            alt=""
                                                      />
                                                </span>
                                          </Td>

                                          <Td dataName="Speaker Name">{speaker.name}</Td>

                                          <Td dataName="Designation">{speaker.designation}</Td>

                                          <Td dataName="Company">{speaker.company}</Td>

                                          <Td id="table-action-container" dataName="Action">
                                                <TableActionButton
                                                      items={[
                                                            {
                                                                  title: "View Detail",
                                                                  type: "View",
                                                                  icon: <AppIcon name="view" />,
                                                                  clickHandler: () => {},
                                                            },
                                                            {
                                                                  title: "Update",
                                                                  type: "Update",
                                                                  icon: <AppIcon name="view" />,
                                                                  clickHandler: () => {
                                                                        openEditModal({ editingData: "" });
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
