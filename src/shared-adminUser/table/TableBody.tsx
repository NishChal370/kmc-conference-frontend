import { Status } from "@/enum/commonEnum";

interface ITableBody {
      status: Status;
      children: React.ReactElement;
}

function TableBody({ children, status }: ITableBody) {
      return status === Status.SUCCEEDED ? <tbody>{children}</tbody> : undefined;
}

export default TableBody;
