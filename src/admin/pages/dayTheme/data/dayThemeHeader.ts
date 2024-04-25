import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const DAY_THEME_HEADER_LIST: ITableHeaderDataList = [
      { id: "index", title: "#", sortValue: "index" },

      { id: "date", title: "Date", className: "sm:text-start", sortValue: "date" },

      { id: "title", title: "Theme Title", className: "sm:text-start", sortValue: "title" },

      { id: "plenary-title", title: "Plenary Session Title", className: "sm:text-start", sortValue: "plenarySession.title" },

      { id: "plenary-startTime", title: "Plenary Session Time", className: "sm:text-start" },

      { id: "action", title: "Action" },
]