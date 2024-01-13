import { ReactNode } from "react";
import { Status } from "@/enum/commonEnum";

interface INestedTBody {
      status: Status;
      children: ReactNode;
}
function NestedTBody({ children, status }: INestedTBody) {
      return status === Status.SUCCEEDED ? <tbody className="nested-tbody">{children}</tbody> : undefined;
}

export default NestedTBody;
