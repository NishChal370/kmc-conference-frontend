import AppIcon from "@/shared/icon/AppIcon";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { Table, TableBody, TableHead, Td } from "@/admin/shared/table";
import { Status } from "@/enum/commonEnum";
import { CONFERENCE_DAY_TABLE_HEADER } from "../data/conferenceDayTableHeader";
import {
      IConferenceDayDeleteRequest,
      IConferenceDayModel,
} from "@/admin/model/conferenceDay/conferenceDayModel";
import getIndex from "@/utils/uniqueId/getIndex";

interface IConferenceDayTable {
      status: Status;
      currentPageNumber: number;
      conferenceDay: IConferenceDayModel[];
      viewThemeHandler: (dayId: IConferenceDayModel["id"]) => () => void;
      deleteButtonHandler: (conferenceDayDetail: IConferenceDayDeleteRequest) => () => void;
      editButtonHandler: ({ editingData }: { editingData: IConferenceDayModel }) => () => void;
}

function ConferenceDayTable({
      status,
      currentPageNumber,
      conferenceDay,
      viewThemeHandler,
      editButtonHandler,
      deleteButtonHandler,
}: IConferenceDayTable) {
      return (
            <>
                  <Table>
                        <TableHead headers={CONFERENCE_DAY_TABLE_HEADER} />

                        <TableBody status={status}>
                              <>
                                    {conferenceDay.map((day, index) => (
                                          <tr key={day.id}>
                                                <Td id="index" dataName="index">
                                                      {getIndex({ currentPageNumber, index })}
                                                </Td>

                                                <Td id="Date" dataName="Date" className="xs:text-start">
                                                      {day.date}
                                                </Td>

                                                <Td
                                                      id="location"
                                                      dataName="Location"
                                                      className="xs:text-start"
                                                >
                                                      <>
                                                            <span className="font-semibold">
                                                                  {day.venueInfo.location}
                                                            </span>
                                                            <br />
                                                            {day.venueInfo.venueCity},&nbsp;
                                                            {day.venueInfo.venueState}
                                                      </>
                                                </Td>

                                                <Td id="parking" dataName="Parking" className="xs:text-start">
                                                      <>
                                                            <span className="font-semibold">
                                                                  {day.venueInfo.parkingInfo}
                                                            </span>
                                                            <br />
                                                            {day.venueInfo.parkingLocation}
                                                      </>
                                                </Td>

                                                <Td
                                                      id="accommodation"
                                                      dataName="Accommodation"
                                                      className="xs:text-start"
                                                >
                                                      <>
                                                            <span className="font-semibold">
                                                                  {day.venueInfo.hotelInfo}
                                                            </span>
                                                            <br />
                                                            {day.venueInfo.parkingLocation}
                                                      </>
                                                </Td>

                                                <Td id="table-action-container" dataName="Action">
                                                      <TableActionButton
                                                            items={[
                                                                  {
                                                                        title: "View Theme",
                                                                        type: "View",
                                                                        icon: <AppIcon name="view" />,
                                                                        clickHandler: viewThemeHandler(
                                                                              day.id
                                                                        ),
                                                                  },
                                                                  {
                                                                        title: "Update",
                                                                        type: "Update",
                                                                        icon: <AppIcon name="update" />,
                                                                        clickHandler: editButtonHandler({
                                                                              editingData: day,
                                                                        }),
                                                                  },
                                                                  {
                                                                        title: "Delete",
                                                                        type: "Danger",
                                                                        icon: <AppIcon name="delete" />,
                                                                        clickHandler: deleteButtonHandler({
                                                                              id: day.id,
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
            </>
      );
}

export default ConferenceDayTable;
