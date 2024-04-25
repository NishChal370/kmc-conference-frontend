import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const CONTACT_US_TABLE_HEADER: ITableHeaderDataList = [
      { id: "index", title: "#", sortValue: "index" },
      { id: "date", title: "Date", className: "sm:text-start", sortValue: "RequestedDate" },
      { id: "fullName", title: "Full Name", className: "sm:text-start", sortValue: "FullName" },
      { id: "email", title: "Email", className: "sm:text-start", sortValue: "Email" },
      { id: "subject", title: "Subject", className: "sm:text-start", sortValue: "Subject" },
      { id: "ReplyStatus", title: "Reply Status", className: "sm:text-start", sortValue: "ReplyStatus" },
      { id: "action", title: "Action" },
] as const;