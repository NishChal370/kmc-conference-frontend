import { ReactNode } from "react";
import { Status } from "@/enum/commonEnum";

interface INestedChildTBody {
      status: Status;
      children: ReactNode;
}
function NestedChildTBody({ children, status }: INestedChildTBody) {
      return status === Status.SUCCEEDED ? <tbody className="nested-tbody">{children}</tbody> : undefined;
}

export default NestedChildTBody;
