import { ReactElement } from "react";

interface INestedTd {
      type?: "string" | "number";
      id?: React.HTMLAttributes<HTMLTableCellElement>["id"];
      children?: ReactElement | string | number;
}

function NestedTd({ type, id, children }: INestedTd) {
      return (
            <>
                  {id === "index" && (
                        <td className="sm:text-center">{type === "string" ? children || "N/A" : children}</td>
                  )}
                  {id === "action" && (
                        <td className="[&>div]:!flex [&>div]:!flex-col [&>div>button]:!justify-center">
                              {children}
                        </td>
                  )}
                  {!["index", "action"].includes(id || "") && (
                        <td className="nested-td"> {type === "string" ? children || "N/A" : children}</td>
                  )}
            </>
      );
}

export default NestedTd;
