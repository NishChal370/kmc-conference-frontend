import { ReactNode } from "react";

interface INestedChildTr {
      children: ReactNode;
}
function NestedChildTr({ children }: INestedChildTr) {
      return <tr className="nested-tr text-start">{children}</tr>;
}

export default NestedChildTr;
