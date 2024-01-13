import { ReactNode } from "react";

interface INestedTr {
      children: ReactNode;
}
function NestedTr({ children }: INestedTr) {
      return <tr className="nested-tr text-start">{children}</tr>;
}

export default NestedTr;
