import TableActionButton from "@/admin/shared/table/TableActionButton";
import { Table, TableBody, TableHead, Td } from "@/admin/shared/table";
import { DAY_THEME_HEADER_LIST } from "../data/dayThemeHeader";
import { Status } from "@/enum/commonEnum";
import AppIcon from "@/shared/icon/AppIcon";
import { IDayThemeDeleteRequest, IDayThemeModel } from "@/admin/model/dayTheme/dayThemeModel";

interface IAdminDayTheme {
      status: Status;
      dayThemes: IDayThemeModel[];
      openViewModalHandler: (viewingData: IDayThemeModel) => () => void;
      openEditModalHandler: (editingData: IDayThemeModel) => () => void;
      deleteHandler: (deletingData: IDayThemeDeleteRequest) => () => void;
}

function AdminDayThemeTable({
      status,
      dayThemes,
      deleteHandler,
      openEditModalHandler,
      openViewModalHandler,
}: IAdminDayTheme) {
      return (
            <Table>
                  <TableHead headers={DAY_THEME_HEADER_LIST} />

                  <TableBody status={status}>
                        <>
                              {dayThemes.map((theme, index) => (
                                    <tr key={theme.id}>
                                          <Td id="index" dataName="index" className="sm:text-start">
                                                {index + 1}
                                          </Td>

                                          <Td id="title" dataName="Date" className="sm:text-start">
                                                {theme.day.date}
                                          </Td>

                                          <Td id="title" dataName="Title" className="sm:text-start">
                                                {theme.title}
                                          </Td>

                                          <Td
                                                id="plenary-title"
                                                dataName="Plenary Session Title"
                                                className="sm:text-start"
                                          >
                                                {theme.plenarySession.title}
                                          </Td>

                                          <Td
                                                id="plenary-time"
                                                dataName="Plenary Session Time"
                                                className="sm:text-start"
                                          >
                                                <>
                                                      {theme.plenarySession.startTime}&nbsp;-&nbsp;
                                                      {theme.plenarySession.endTime}
                                                </>
                                          </Td>

                                          <Td id="table-action-container" dataName="Action">
                                                <TableActionButton
                                                      items={[
                                                            {
                                                                  title: "View Detail",
                                                                  type: "View",
                                                                  icon: <AppIcon name="view" />,
                                                                  clickHandler: openViewModalHandler(theme),
                                                            },
                                                            {
                                                                  title: "Update",
                                                                  type: "Update",
                                                                  icon: <AppIcon name="update" />,
                                                                  clickHandler: openEditModalHandler(theme),
                                                            },
                                                            {
                                                                  title: "Delete",
                                                                  type: "Danger",
                                                                  icon: <AppIcon name="delete" />,
                                                                  clickHandler: deleteHandler({
                                                                        id: theme.id,
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

export default AdminDayThemeTable;
