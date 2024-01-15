import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const CALL_FOR_PAPER_HEADER_LIST: ITableHeaderDataList = [
      { id: "index", title: "#" },
      { id: "call-for-paper-name", title: "Name", className: "text-start" },
      { id: "call-for-paper-designation", title: "Designation", className: "text-start" },
      { id: "call-for-paper-affiliation", title: "Affiliation", className: "text-start" },
      { id: "call-for-paper-approvalStatus", title: "Approval Status", className: "text-start" },
      { id: "action", title: "Action" },
];