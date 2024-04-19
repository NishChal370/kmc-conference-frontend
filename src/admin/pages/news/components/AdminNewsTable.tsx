import AppIcon from "@/shared/icon/AppIcon";
import TableActionButton from "@/admin/shared/table/TableActionButton";
import { Table, TableBody, TableHead, Td, Ti } from "@/admin/shared/table";
import { Status, UserRole } from "@/enum/commonEnum";
import { NEWS_TABLE_HEADER } from "../data/newsTableHeader";
import getIndex from "@/utils/uniqueId/getIndex";
import changeDateFormat from "@/utils/dateFormat/changeDateFormat";
import { INewsBasicResponse, INewsDeleteRequest, INewsViewOrEditModal } from "@/admin/model/news/newsModel";
import { ISortDetail } from "@/admin/model/commonModel";

interface IAdminNewsTable {
      status: Status;
      currentPageNumber: number;
      news: INewsBasicResponse["news"];
      deleteNewsHandler: (deletingDetail: INewsDeleteRequest) => () => void;
      openEditModalHandler: (editingData: INewsViewOrEditModal) => () => void;
      openViewModalHandler: (viewingData: INewsViewOrEditModal) => () => void;
      sortDetail: ISortDetail<unknown, unknown>;
      sortHandler: (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
}
function AdminNewsTable({
      status,
      currentPageNumber,
      news,
      sortDetail,
      sortHandler,
      deleteNewsHandler,
      openEditModalHandler,
      openViewModalHandler,
}: IAdminNewsTable) {
      return (
            <Table>
                  <TableHead headers={NEWS_TABLE_HEADER} sortDetail={sortDetail} sortHandler={sortHandler} />

                  <TableBody status={status}>
                        <>
                              {news.map((news, index) => (
                                    <tr key={news.id}>
                                          <Td id="index" dataName="Index">
                                                {getIndex({ currentPageNumber, index })}
                                          </Td>

                                          <Ti imageType="news" image={news.bannerImage} />

                                          <Td id="Date" dataName="Date" className="sm:text-start">
                                                {changeDateFormat(news.createdDate)}
                                          </Td>

                                          <Td id="Title" dataName="Title" className="sm:text-start">
                                                {news.title}
                                          </Td>

                                          <Td id="table-action-container" dataName="Action">
                                                <TableActionButton
                                                      items={[
                                                            {
                                                                  title: "View Detail",
                                                                  type: "View",
                                                                  icon: <AppIcon name="view" />,
                                                                  clickHandler: openViewModalHandler({
                                                                        newsId: news.id,
                                                                  }),
                                                            },
                                                            {
                                                                  allowToAllRole: false,
                                                                  notAllowedRoles: [
                                                                        UserRole.REVIEWER,
                                                                        UserRole.READ_ONLY,
                                                                  ],
                                                                  title: "Update",
                                                                  type: "Update",
                                                                  icon: <AppIcon name="update" />,
                                                                  clickHandler: openEditModalHandler({
                                                                        newsId: news.id,
                                                                  }),
                                                            },
                                                            {
                                                                  allowToAllRole: false,
                                                                  notAllowedRoles: [
                                                                        UserRole.REVIEWER,
                                                                        UserRole.READ_ONLY,
                                                                  ],
                                                                  title: "Delete",
                                                                  type: "Danger",
                                                                  icon: <AppIcon name="delete" />,
                                                                  clickHandler: deleteNewsHandler({
                                                                        id: news.id,
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

export default AdminNewsTable;
