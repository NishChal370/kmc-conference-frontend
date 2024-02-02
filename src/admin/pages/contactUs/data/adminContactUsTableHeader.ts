import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const CONTACT_US_TABLE_HEADER: ITableHeaderDataList = [
      { id: "index", title: "#", },
      { id: "date", title: "Date", className: "sm:text-start" },
      { id: "fullName", title: "Full Name", className: "sm:text-start" },
      { id: "email", title: "Email", className: "sm:text-start" },
      { id: "subject", title: "Subject", className: "sm:text-start" },
      { id: "ReplyStatus", title: "Reply Status", className: "sm:text-start" },
      { id: "action", title: "Action" },
] as const;