import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const ADMIN_SESSION_TABLE_HEADER: ITableHeaderDataList = [
      { id: "index", title: "#" },
      { id: "title", title: "Title", className: "sm:text-start" },
      { id: "location", title: "Location", className: "sm:text-start" },
      { id: "time", title: "Time", className: "sm:text-start" },
      { id: "action", title: "Action" },
] as const;

