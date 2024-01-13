import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const ADMIN_SESSION_TOPIC_TABLE_HEADER: ITableHeaderDataList = [
      { id: "index", title: "#" },
      { id: "title", title: "Session Topic", className: "sm:text-start" },
      { id: "action", title: "Action" },
] as const;