import { Status } from "@/enum/commonEnum";
import { SPEAKERS_DETAILS } from "@/pages-normalUser/speakers/seed.tsx/speakersDetailList";
import { Table, TableBody, TableHead, Td } from "@/shared-adminUser/table";
import TableActionButton from "@/shared-adminUser/table/TableActionButton";
import AppIcon from "@/shared/icon/AppIcon";
import { SPEAKER_HEADER_LIST } from "../data/speakerHeaderList";

function AdminSpeakerTable() {
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

                                          <Td
                                                dataName="speaker-image"
                                                className="w-full sm:!w-fit !hidden sm:!flex"
                                          >
                                                <img
                                                      className="w-8 h-8 object-cover flex justify-end "
                                                      src={speaker.image}
                                                      alt=""
                                                />
                                          </Td>

                                          <Td dataName="Speaker Name">{speaker.name}</Td>

                                          <Td dataName="Designation">{speaker.designation}</Td>

                                          <Td dataName="Company">{speaker.company}</Td>

                                          <Td id="table-action-container" dataName="Action">
                                                <TableActionButton
                                                      items={[
                                                            {
                                                                  title: "Update",
                                                                  type: "Update",
                                                                  icon: <AppIcon name="accommodation" />,
                                                                  clickHandler: () => {},
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
