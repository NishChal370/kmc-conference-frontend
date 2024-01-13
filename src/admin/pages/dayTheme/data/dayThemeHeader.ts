import { ITableHeaderDataList } from "@/admin/model/commonModel";

export const DAY_THEME_HEADER_LIST: ITableHeaderDataList = [
      { id: "index", title: "#", },

      { id: "date", title: "Date", className: "sm:text-start" },

      { id: "title", title: "Theme Title", className: "sm:text-start" },

      { id: "plenary-title", title: "Plenary Session Title", className: "sm:text-start" },

      { id: "plenary-startTime", title: "Plenary Session Time", className: "sm:text-start" },

      { id: "action", title: "Action" },
]