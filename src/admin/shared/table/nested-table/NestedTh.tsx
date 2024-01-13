import { ITableHeaderDataList } from "@/admin/model/commonModel";

interface INestedTh {
      headers: ITableHeaderDataList;
}

function NestedTh({ headers }: INestedTh) {
      return (
            <thead className="nested-thead [&>*]:!bg-white">
                  {headers.map(({ id, title }) => (
                        <>
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
                        </>
                  ))}
            </thead>
      );
}

export default NestedTh;
