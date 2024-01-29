import { Fragment } from "react";
import { ITableHeaderDataList } from "@/admin/model/commonModel";

interface INestedChildTh {
      headers: ITableHeaderDataList;
}

function NestedChildTh({ headers }: INestedChildTh) {
      return (
            <thead className="nested-thead">
                  <tr className="[&>*]:!bg-white">
                        {headers.map(({ id, title, className }) => (
                              <Fragment key={id}>
                                    {id === "index" && (
                                          <th id={"nested-" + id} className={`nested-th px-2 ${className}`}>
                                                {title}
                                          </th>
                                    )}
                                    {id === "action" && (
                                          <th
                                                id={"nested-" + id}
                                                className={`nested-th text-center ${className}`}
                                          >
                                                {title}
                                          </th>
                                    )}
                                    {!["index", "action"].includes(id) && (
                                          <th
                                                id={"nested-" + id}
                                                className={`nested-th text-start  ${className}`}
                                          >
                                                {title}
                                          </th>
                                    )}
                              </Fragment>
                        ))}
                  </tr>
            </thead>
      );
}

export default NestedChildTh;
