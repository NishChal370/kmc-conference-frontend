import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const AUDIT_LOG_TABLE_HEADER: ITableHeaderDataList = [
      { id: "index", title: "#", sortValue: "index" },
      { id: "date", title: "Date", className: "text-start", sortValue: "Date" },
      { id: "time", title: "Time", className: "text-start", },
      { id: "level", title: "level", className: "text-start", sortValue: "Level" },
      { id: "message", title: "message", className: "text-start", sortValue: "Message" },
] as const;