import { ReactElement } from "react";

interface INestedChildTd {
      type?: "string" | "number";
      id?: React.HTMLAttributes<HTMLTableCellElement>["id"];
      children?: ReactElement | string | number;
}

function NestedChildTd({ type, id, children }: INestedChildTd) {
      return (
            <>
                  {id === "index" && (
                        <td className="sm:text-center">
                              {type === "string" ? children || "N/A" : children ?? "N/A"}
                        </td>
                  )}
                  {id === "action" && (
                        <td className="[&>div]:!flex [&>div]:!flex-col [&>div>button]:!justify-center">
                              {children}
                        </td>
                  )}
                  {!["index", "action"].includes(id || "") && (
                        <td className="nested-td">
                              {" "}
                              {type === "string" ? children?.toString() || "N/A" : children ?? "N/A"}
                        </td>
                  )}
            </>
      );
}

export default NestedChildTd;
