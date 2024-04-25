import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const CALL_FOR_PAPER_HEADER_LIST: ITableHeaderDataList = [
      { id: "index", title: "#", sortValue: "index" },
      { id: "call-for-paper-name", title: "Name", className: "sm:text-start", sortValue: "FirstName" },
      { id: "call-for-paper-designation", title: "Designation", className: "sm:text-start", sortValue: "JobTitle" },
      { id: "call-for-paper-affiliation", title: "Affiliation", className: "sm:text-start", sortValue: "Affiliation" },
      { id: "call-for-email", title: "Email", className: "sm:text-start", sortValue: "Email" },
      { id: "action", title: "Action" },
];