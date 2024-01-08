import { useMemo } from "react";
import { ICON } from "@/constants/icon";
import { OrderBy } from "@admin/enum/commonEnum";
import { ISortDetail, ITableHeaderDataList } from "@admin/model/commonModel";
import AppIcon from "@/shared/icon/AppIcon";

interface ITableHead<TSortBy, TOrderBy> {
      headers: ITableHeaderDataList;
      sortDetail?: ISortDetail<TSortBy, TOrderBy>;
      sortHandler?: (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
}

function TableHead<TSortBy = undefined, TOrderBy = undefined>({
      headers,
      sortHandler,
      sortDetail,
}: ITableHead<TSortBy, TOrderBy>) {
      const MemoHeader = useMemo(
            () => (
                  <thead>
                        <tr>
                              {headers.map(({ id, title, className, sortValue }) => {
                                    return sortValue && sortDetail ? (
                                          <th key={id} id={id}>
                                                <span
                                                      className={`${className} flex justify-center items-center w-full`}
                                                >
                                                      <span
                                                            className="cursor-pointer flex justify-center items-center gap-1 w-fit"
                                                            onClick={sortHandler}
                                                            data-value={sortValue}
                                                      >
                                                            {title}

                                                            <aside className="flex flex-col justify-center items-center gap-0.5 w-fit">
                                                                  <AppIcon
                                                                        name="sort-ascending"
                                                                        size={ICON.size - 11}
                                                                        className={` ${
                                                                              sortDetail.getSort() ===
                                                                                    sortValue &&
                                                                              sortDetail.getOrderBy() ===
                                                                                    OrderBy.Ascending
                                                                                    ? "text-default"
                                                                                    : "text-mute"
                                                                        }`}
                                                                  />
                                                                  <AppIcon
                                                                        name="sort-descending"
                                                                        size={ICON.size - 11}
                                                                        className={` ${
                                                                              sortDetail.getSort() ===
                                                                                    sortValue &&
                                                                              sortDetail.getOrderBy() ===
                                                                                    OrderBy.Descending
                                                                                    ? "text-default"
                                                                                    : "text-mute"
                                                                        }`}
                                                                  />
                                                            </aside>
                                                      </span>
                                                </span>
                                          </th>
                                    ) : (
                                          <th key={id} id={id} className={className}>
                                                {title}
                                          </th>
                                    );
                              })}
                        </tr>
                  </thead>
            ),
            [sortDetail?.getSort(), sortDetail?.getOrderBy(), sortHandler]
      );

      return MemoHeader;
}

export default TableHead;
