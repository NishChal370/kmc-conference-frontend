import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const ADMIN_SESSION_TABLE_HEADER: ITableHeaderDataList = [
      { id: "index", title: "#", sortValue: "index" },
      { id: "title", title: "Title", className: "sm:text-start", sortValue: "Title" },
      { id: "location", title: "Location", className: "sm:text-start", sortValue: "Location" },
      { id: "time", title: "Time", className: "sm:text-start", sortValue: "StartTime" },
      { id: "action", title: "Action" },
] as const;

