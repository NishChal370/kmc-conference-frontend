import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const CALL_FOR_PAPER_HEADER_LIST: ITableHeaderDataList = [
      { id: "index", title: "#" },
      { id: "call-for-paper-name", title: "Name", className: "sm:text-start" },
      { id: "call-for-paper-designation", title: "Designation", className: "sm:text-start" },
      { id: "call-for-paper-affiliation", title: "Affiliation", className: "sm:text-start" },
      { id: "call-for-paper-approvalStatus", title: "Approval Status", className: "sm:text-start" },
      { id: "action", title: "Action" },
];