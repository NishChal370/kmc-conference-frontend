import AppIcon from "@/shared/icon/AppIcon";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { Table, TableBody, TableHead, Td, Ti } from "@/admin/shared/table";
import { SPEAKER_HEADER_LIST } from "../data/speakerHeaderList";
import {
      ISpeakerBasicModel,
      ISpeakerDeleteRequest,
      ISpeakerViewModal,
} from "@/admin/model/speaker/speakerModel";
import { Status, UserRole } from "@/enum/commonEnum";
import SpeakerSchedule from "../../speakerSchedule/SpeakerSchedule";
import { NestedRowWrapper, NestedRowContainer } from "@/admin/shared/table/nested-table";
import getIndex from "@/utils/uniqueId/getIndex";

interface IAdminSpeakerTable {
      status: Status;
      currentPageNumber: number;
      speakersBasicInfo: ISpeakerBasicModel[];
      openViewModalHandler: (viewingData: ISpeakerViewModal) => () => void;
      deleteSpeakerDetailHandler: (deletingDetail: ISpeakerDeleteRequest) => () => void;
}

function AdminSpeakerTable({
      status,
      currentPageNumber,
      speakersBasicInfo,
      openViewModalHandler,
      deleteSpeakerDetailHandler,
}: IAdminSpeakerTable) {
      return (
            <Table>
                  <TableHead headers={SPEAKER_HEADER_LIST} />

                  <TableBody status={status}>
                        <NestedRowContainer>
                              {({ selectedRowId, selectRowHandler }) =>
                                    speakersBasicInfo.map((speaker, index) => (
                                          <NestedRowWrapper
                                                key={speaker.id}
                                                childColSpan={SPEAKER_HEADER_LIST.length}
                                                presentRowId={speaker.id}
                                                selectedRowId={selectedRowId}
                                                parentTr={({ isOpen }) => (
                                                      <tr key={index} className="text-start">
                                                            <Td id="index" dataName="index">
                                                                  {getIndex({ currentPageNumber, index })}
                                                            </Td>
                                                            <Ti image={speaker.photo} />
                                                            <Td dataName="Speaker Name">{speaker.name}</Td>
                                                            <Td dataName="Job Title">{speaker.jobTitle}</Td>
                                                            <Td dataName="Affiliation">
                                                                  {speaker.affiliation}
                                                            </Td>
                                                            <Td dataName="Email">{speaker.email}</Td>
                                                            <Td id="table-action-container" dataName="Action">
                                                                  <TableActionButton
                                                                        extraButton={[
                                                                              {
                                                                                    title:
                                                                                          (isOpen
                                                                                                ? "Hide"
                                                                                                : "View") +
                                                                                          " Topics",
                                                                                    type: "View",

                                                                                    icon: (
                                                                                          <AppIcon
                                                                                                name="down-arrow"
                                                                                                className={`${
                                                                                                      isOpen
                                                                                                            ? "rotate-180"
                                                                                                            : "rotate-0"
                                                                                                }`}
                                                                                          />
                                                                                    ),
                                                                                    clickHandler: () =>
                                                                                          selectRowHandler(
                                                                                                speaker.id
                                                                                          ),
                                                                              },
                                                                        ]}
                                                                        items={[
                                                                              {
                                                                                    title: "View Detail",
                                                                                    type: "View",
                                                                                    icon: (
                                                                                          <AppIcon name="view" />
                                                                                    ),
                                                                                    clickHandler:
                                                                                          openViewModalHandler(
                                                                                                {
                                                                                                      speakerId:
                                                                                                            speaker.id,
                                                                                                }
                                                                                          ),
                                                                              },
                                                                              {
                                                                                    allowToAllRole: false,
                                                                                    notAllowedRoles: [
                                                                                          UserRole.REVIEWER,
                                                                                          UserRole.READ_ONLY,
                                                                                    ],
                                                                                    title: "Delete",
                                                                                    type: "Danger",
                                                                                    icon: (
                                                                                          <AppIcon name="delete" />
                                                                                    ),
                                                                                    clickHandler:
                                                                                          deleteSpeakerDetailHandler(
                                                                                                {
                                                                                                      speakerId:
                                                                                                            speaker.id,
                                                                                                }
                                                                                          ),
                                                                              },
                                                                        ]}
                                                                  />
                                                            </Td>
                                                      </tr>
                                                )}
                                          >
                                                {({ isOpen }) => (
                                                      <SpeakerSchedule
                                                            isVisible={isOpen}
                                                            speakerId={speaker.id}
                                                            speakerName={speaker.name}
                                                      />
                                                )}
                                          </NestedRowWrapper>
                                    ))
                              }
                        </NestedRowContainer>
                  </TableBody>
            </Table>
      );
}

export default AdminSpeakerTable;
