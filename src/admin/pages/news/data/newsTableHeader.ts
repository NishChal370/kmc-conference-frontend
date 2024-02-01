import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const NEWS_TABLE_HEADER: ITableHeaderDataList = [
      { id: "index", title: "#", },
      { id: "table-image", title: "Banner Image", className: "text-start" },
      { id: "date", title: "Date", className: "sm:text-start" },
      { id: "title", title: "Title", className: "sm:text-start" },
      { id: "action", title: "Action" },
] as const;