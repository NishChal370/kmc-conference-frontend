import { Fragment } from "react";
import { ITableHeaderDataList } from "@/admin/model/commonModel";

interface INestedChildTh {
      headers: ITableHeaderDataList;
}

function NestedChildTh({ headers }: INestedChildTh) {
      return (
            <thead className="nested-thead">
                  <tr className="[&>*]:!bg-white">
                        {headers.map(({ id, title }) => (
                              <Fragment key={id}>
                                    {id === "index" && (
                                          <th key={id} className="nested-th px-2">
                                                {title}
                                          </th>
                                    )}
                                    {id === "action" && (
                                          <th key={id} className="nested-th text-center">
                                                {title}
                                          </th>
                                    )}
                                    {!["index", "action"].includes(id) && (
                                          <th key={id} className="nested-th text-start">
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
