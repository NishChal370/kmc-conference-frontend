import { ReactElement } from "react";

interface ITd {
      dataName: string;
      type?: "string" | "number";
      id?: React.HTMLAttributes<HTMLTableCellElement>["id"];
      children?: ReactElement | string | number;
      className?: React.HTMLAttributes<HTMLTableCellElement>["className"];
}

/**
 * @property {string} dataName - it will be shown as table title in smallScreen. Insert the name you wrote in table header title
 * @property {string} id
 * @property {ReactElement | string | number} children - data to show.
 */
function Td({ dataName, id, children, className, type = "string" }: ITd) {
      return (
            <td data-name={dataName} {...{ id, className }}>
                  {type === "string" ? children || "---" : children}
            </td>
      );
}

export default Td;
